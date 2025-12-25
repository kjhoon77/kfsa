import { useState, useCallback, useEffect } from 'react';
import {
    Box, Typography, Paper, Tab, Button, Stack, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Divider
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PageContainer from '../../components/PageContainer';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import CancelIcon from '@mui/icons-material/Cancel';

// Tabs
import ManagerBasicInfoTab from './tabs/ManagerBasicInfoTab';
import ConcurrentBizTab from './tabs/ConcurrentBizTab';
import LicenseInfoTab from './tabs/LicenseInfoTab';
import TrainingPassTab from './tabs/TrainingPassTab';
import FeeInfoTab from './tabs/FeeInfoTab';
import EduInfoTab from './tabs/EduInfoTab';

// Popups
import GroupSearchDialog from './GroupSearchDialog';

// Hooks
import { useHotkeys, HOTKEYS } from '../../hooks/useHotkeys';
import { useGlobalDialog } from '../../context/GlobalDialogContext';

// Types & Services
import type { CustomerInfo, BuildingInfo, ManagerInfo, SearchCondition } from './types';
import { callService } from '../../lib/api';
import { useCodeStore } from '../../store/useCodeStore';


export default function CustomerManagement() {
    // UI State
    const [managerTabValue, setManagerTabValue] = useState('1');
    const [bottomTabValue, setBottomTabValue] = useState('1');
    const { showAlert, showConfirm } = useGlobalDialog();

    // Popup State
    const [isGroupSearchOpen, setIsGroupSearchOpen] = useState(false);

    // Data State
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
    const [originalCustomerInfo, setOriginalCustomerInfo] = useState<CustomerInfo | null>(null); // For tracking status changes
    const [buildingInfo, setBuildingInfo] = useState<BuildingInfo | null>(null);
    const [managerInfo, setManagerInfo] = useState<ManagerInfo | null>(null);

    // Common Codes Store
    const { fetchCodes, getCodes } = useCodeStore();

    // Search Criteria State
    const [searchCondition, setSearchCondition] = useState<SearchCondition>({
        jibuCd: '',
        stationCd: '',
        centerCd: '',
        searchKeyword: ''
    });

    // Initial Data Fetch (Common Codes)
    useEffect(() => {
        const loadCodes = async () => {
            await fetchCodes(['REGION', 'JIBU', 'JOB_TYPE']);
        };
        loadCodes();
    }, [fetchCodes]);

    // Tab Handlers
    const handleManagerTabChange = (_event: React.SyntheticEvent, newValue: string) => setManagerTabValue(newValue);
    const handleBottomTabChange = (_event: React.SyntheticEvent, newValue: string) => setBottomTabValue(newValue);

    // --- Popup Handlers ---
    const handleOpenGroupSearch = () => setIsGroupSearchOpen(true);

    const handleGroupSelect = async (selectedGroup: any) => {
        console.log('Group Selected:', selectedGroup);
        // In real app, we would search by the selected Group ID (CMGNO)
        setSearchCondition({ ...searchCondition, searchKeyword: selectedGroup.AGNM });
        // Trigger Search
        await performSearch({ ...searchCondition, searchKeyword: selectedGroup.AGNM });
    };

    // --- Business Logic Functions ---

    // 1. 조회 (handleSearch)
    const performSearch = async (condition: SearchCondition) => {
        console.log('Searching...', condition);
        try {
            // API Call using callService
            const response: any = await callService(
                'cust:searchCustomerInfo',
                '',
                { ...condition },
                'ds_oCustomerInfo=output',
                ''
            );

            if (response && response.customerInfo) {
                setCustomerInfo(response.customerInfo);
                setOriginalCustomerInfo(JSON.parse(JSON.stringify(response.customerInfo))); // Deep copy for change tracking
                setBuildingInfo(response.buildingInfo);
                setManagerInfo(response.managerInfo);
                await showAlert('조회되었습니다.');
            } else {
                await showAlert('조회 결과가 없습니다.');
            }
        } catch (error) {
            console.error(error);
            await showAlert('조회 중 오류가 발생했습니다.');
        }
    };

    const handleSearch = useCallback(() => {
        performSearch(searchCondition);
    }, [searchCondition]);

    // Validation Logic (mimicking lfn_Save)
    // [XML Logic Translation]
    // 1. 한국소방안전원 정보 변경 불가 체크 (lfn_Save line 4986)
    // 2. 필수 값 체크: 지부, 상세직능, 대상물명 (lfn_Save line 5013, 5033, 5072)
    // 3. 직능별 추가 필수 값 체크 (lfn_Save line 5088 switch-case)
    const validateData = async (): Promise<boolean> => {
        if (!customerInfo || !buildingInfo || !managerInfo) return false;

        // 1. Check for specific prohibited modifications
        if (buildingInfo.BMGNO === 1 || customerInfo.CBMGNO === 1) {
            if (buildingInfo.BNM !== "한국소방안전원") {
                await showAlert("한국소방안전원 정보는 변경할 수 없습니다.");
                return false;
            }
        }

        // 2. Mandatory Fields (Common)
        if (!customerInfo.CREGCD) { await showAlert('지역을 입력해 주십시오.'); return false; }
        if (!customerInfo.CCOURSECD) { await showAlert('직능을 입력해 주십시오.'); return false; }

        if (!buildingInfo.BNM) {
            await showAlert('대상물명을 입력해 주십시오.');
            return false;
        }

        // 3. Course Specific Validation
        if (customerInfo.CCOURSECD === '10' && !buildingInfo.BBIZCD) {
            await showAlert('용도를 입력해 주십시오.');
            return false;
        }

        return true;
    };

    // Helper: Customer Status Change Logic
    // [XML Logic Translation] (lfn_CustomerStatusChanged line 15458)
    const checkCustomerStatusChange = (currentInfo: CustomerInfo): number => {
        if (!originalCustomerInfo) return 0;

        let cFlag = 0;

        // 1. 회원구분(CSTATUSGUBUN) 변경 여부 체크
        if (originalCustomerInfo.CSTATUSGUBUN !== currentInfo.CSTATUSGUBUN) {
            if (currentInfo.CSTATUSGUBUN === '0') { // 0: 비회원 -> 회원
                cFlag = 1;
            } else if (currentInfo.CSTATUSGUBUN === '1') { // 1: 회원 -> 비회원
                cFlag = 2;
            }
        }

        // 2. 삭제구분(CDELGUBUN) 변경 여부 체크
        if (originalCustomerInfo.CDELGUBUN !== currentInfo.CDELGUBUN) {
            if (currentInfo.CDELGUBUN === '0') { // 0: 정상 (삭제 -> 정상)
                cFlag = 3;
            } else { // 1: 삭제 (정상 -> 삭제)
                cFlag = 4;
            }
        }

        console.log(`Status Change Check: cFlag=${cFlag}`);
        return cFlag;
    };

    // 2. 저장 (handleSave)
    // [XML Logic Translation] (lfn_Save line 4979)
    // Validate and Save
    const handleSave = async () => {
        if (!customerInfo) return;
        if (!(await validateData())) return;

        const confirmed = await showConfirm('저장하시겠습니까?');
        if (!confirmed) return;

        const payload = {
            customerInfo,
            buildingInfo,
            managerInfo,
            transactionType: customerInfo.CNO ? 'UPDATE' : 'INSERT'
        };

        try {
            const response: any = await callService(
                'cust:saveCustomerInfo',
                '',
                payload,
                '',
                ''
            );

            if (response.status === 'OK') {
                await showAlert('저장되었습니다.');
                checkCustomerStatusChange(customerInfo);
                // Update original info after successful save
                setOriginalCustomerInfo(JSON.parse(JSON.stringify(customerInfo)));
            } else {
                await showAlert('저장 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error(error);
            await showAlert('저장 실패');
        }
    };

    // 3. 신규 (handleNew)
    // [XML Logic Translation] (lfn_Input line 3845)
    // Reset Data
    const handleNew = async () => {
        setCustomerInfo({
            CMGNO: 0, CNO: '', AGNM: '', CSTATUSGUBUN: '0', CDELGUBUN: '0',
            CREGCD: '01', CCOURSECD: '10', CBMGNO: 0, CFMHMGNO: 0, CPERSONGUBUN: '0',
            CCOCD: '01', CAGGUBUN: '0', CAGMGNO: 0, CSTATUSREASONCD: '00', CSTATUSDATE: '',
            CREGISTERYYMM: '', CFEEYYMM: '', COBMGNO: 0, COVERGUBUN: '0',
            CEXCEPTGUBUN: '0', CEXCEPTDATE: '', CDELDATE: '', CFIREMGNO: '', CPOSTREQGUBUN: '0'
        });
        setBuildingInfo({
            BMGNO: 0, BNM: '', BADDR1: '', BADDR2: '', BZIPCD: '',
            BROADADDR1: '', BROADADDR2: '', BADDRGUBUN: '1', BBIZCD: '',
            BFIREUPCD: '', BFIRECD: '', BFIREMAN: '', BTEL: '', BFAX: '',
            BSMOKEGUBUN: '0', BAREA: 0, BCONO: ''
        });
        setManagerInfo({
            FMMGNO: 0, FMNM: '', FMBIRTHDAY: '', FMHTEL: '', FMHHPTEL: '',
            FMHEMAILID: '', FMHEMAILDOMAIN: '', FMHZIPCD: '',
            FMHROADADDR1: '', FMHROADADDR2: '', FMHADDR1: '', FMHADDR2: '',
            FMHADDRGUBUN: '1', FMHLICENSENO: '', FMHSTARTDATE: '', FMHENDDATE: '',
            FMHENDGUBUN: '0', FMRESIDENTERR: '0', FMAUTHGUBUN: '0'
        });
        await showAlert('신규 입력 모드입니다. 데이터를 초기화했습니다.');
    };

    // 4. 삭제 (handleDelete)
    // [XML Logic Translation] (lfn_Delete... related functions)
    const handleDelete = async () => {
        if (!customerInfo?.CNO) {
            await showAlert('삭제할 데이터가 없습니다.');
            return;
        }

        const confirmed = await showConfirm('삭제하시겠습니까?');
        if (!confirmed) return;

        try {
            const response: any = await callService(
                'cust:deleteCustomerInfo',
                '',
                { CNO: customerInfo.CNO },
                '',
                ''
            );

            if (response.status === 'OK') {
                await showAlert('삭제 처리되었습니다.');
                setCustomerInfo(null);
                setBuildingInfo(null);
                setManagerInfo(null);
            }
        } catch (error) {
            console.error(error);
            await showAlert('삭제 실패');
        }
    };

    // --- Hotkeys ---
    const hotkeyMap = {
        [HOTKEYS.F2]: handleSearch,
        [HOTKEYS.F3]: handleNew, // Mapped 'New' to F3 based on standard, XML Says Insert=F3? (Actually XML says F3=Add)
        [HOTKEYS.F4]: handleSave,
        [HOTKEYS.F6]: handleOpenGroupSearch,
        [HOTKEYS.F10]: handleNew, // XML says F10 is Reset/Init, mapped to handleNew as standard reset
    };
    useHotkeys(hotkeyMap);

    return (
        <PageContainer title="고객정보 관리" breadcrumbs={[{ label: '고객관리' }, { label: '고객정보 관리' }]}>
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Box>
                    {/* Group Search Button */}
                    <Button variant="outlined" size="small" sx={{ mr: 1 }} onClick={handleOpenGroupSearch}>그룹조회(F6)</Button>
                </Box>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<SearchIcon />} onClick={handleSearch}>조회(F2)</Button>
                    <Button variant="outlined" startIcon={<AddIcon />} onClick={handleNew}>신규(F3)</Button>
                    <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSave}>저장(F4)</Button>
                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleDelete}>삭제</Button>
                    <Button variant="outlined" startIcon={<CancelIcon />} onClick={handleNew}>초기화(F10)</Button>
                    <Button variant="outlined" startIcon={<PrintIcon />}>출력</Button>
                    <Button variant="outlined">닫기</Button>
                </Stack>
            </Box>

            {/* Popup Dialogs */}
            <GroupSearchDialog
                open={isGroupSearchOpen}
                onClose={() => setIsGroupSearchOpen(false)}
                onSelect={handleGroupSelect}
            />

            {/* Top Search Area */}
            <Paper variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: '#f9f9f9' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="고객명/상호" variant="outlined" size="small" fullWidth
                            value={searchCondition.searchKeyword}
                            onChange={(e) => setSearchCondition({ ...searchCondition, searchKeyword: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField label="관리번호" variant="outlined" size="small" fullWidth value={customerInfo?.CNO || ''} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <FormControl fullWidth size="small">
                            <TextField label="사업자번호" variant="outlined" size="small" value={buildingInfo?.BCONO || ''} />
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel>소방서(지역)</InputLabel>
                            <Select value={searchCondition.stationCd} label="소방서(지역)" onChange={(e) => setSearchCondition({ ...searchCondition, stationCd: e.target.value })}>
                                <MenuItem value="">전체</MenuItem>
                                {getCodes('REGION').map((code) => (
                                    <MenuItem key={code.code} value={code.code}>{code.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>

            {/* Split Layout: Left (Forms) / Right (Manager Tabs) */}
            <Grid container spacing={2}>
                {/* Left Side: Forms */}
                <Grid size={{ xs: 12, md: 6 }}>
                    {/* Customer Info Form */}
                    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>고객 정보</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="고객명(상호)" fullWidth size="small" value={customerInfo?.AGNM || ''} required />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="등록년월" fullWidth size="small" value={customerInfo?.CREGISTERYYMM || ''} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>지부</InputLabel>
                                    <Select
                                        value={customerInfo?.CREGCD || ''}
                                        label="지부"
                                        onChange={(e) => customerInfo && setCustomerInfo({ ...customerInfo, CREGCD: e.target.value })}
                                    >
                                        <MenuItem value="">선택</MenuItem>
                                        {getCodes('JIBU').map((code) => (
                                            <MenuItem key={code.code} value={code.code}>{code.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>직능</InputLabel>
                                    <Select
                                        value={customerInfo?.CCOURSECD || ''}
                                        label="직능"
                                        onChange={(e) => customerInfo && setCustomerInfo({ ...customerInfo, CCOURSECD: e.target.value })}
                                    >
                                        <MenuItem value="">선택</MenuItem>
                                        {getCodes('JOB_TYPE').map((code) => (
                                            <MenuItem key={code.code} value={code.code}>{code.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Building Info Form */}
                    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>대상물 정보</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="대상물명" fullWidth size="small" value={buildingInfo?.BNM || ''} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="전화번호" fullWidth size="small" value={buildingInfo?.BTEL || ''} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="팩스번호" fullWidth size="small" value={buildingInfo?.BFAX || ''} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Stack direction="row" spacing={1}>
                                    <TextField label="우편번호" size="small" sx={{ width: 100 }} value={buildingInfo?.BZIPCD || ''} />
                                    <Button variant="outlined" size="small">주소검색</Button>
                                    <TextField label="구주소1" size="small" fullWidth value={buildingInfo?.BADDR1 || ''} />
                                </Stack>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="구주소2" fullWidth size="small" value={buildingInfo?.BADDR2 || ''} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="신주소1" fullWidth size="small" value={buildingInfo?.BROADADDR1 || ''} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="신주소2" fullWidth size="small" value={buildingInfo?.BROADADDR2 || ''} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Right Side: Manager Info & Tabs */}
                <Grid size={{ xs: 12, md: 6 }}>
                    {/* Manager Short Info */}
                    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>선임자 정보</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="성명" fullWidth size="small" value={managerInfo?.FMNM || ''} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="주민번호" fullWidth size="small" value={managerInfo?.FMBIRTHDAY || ''} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField label="선임일" fullWidth size="small" value={managerInfo?.FMHSTARTDATE || ''} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <Button variant="outlined" size="small">선임자 변경</Button>
                                <Button variant="outlined" size="small" sx={{ ml: 1 }}>실명인증</Button>
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Manager Details Tabs */}
                    <Paper variant="outlined" sx={{ height: 400 }}>
                        <TabContext value={managerTabValue}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleManagerTabChange}>
                                    <Tab label="기본정보" value="1" />
                                    <Tab label="겸직정보" value="2" />
                                    <Tab label="보유자격" value="3" />
                                    <Tab label="강습수료" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><ManagerBasicInfoTab managerInfo={managerInfo} /></TabPanel>
                            <TabPanel value="2"><ConcurrentBizTab /></TabPanel>
                            <TabPanel value="3"><LicenseInfoTab /></TabPanel>
                            <TabPanel value="4"><TrainingPassTab /></TabPanel>
                        </TabContext>
                    </Paper>
                </Grid>
            </Grid>

            {/* Bottom Section: Fee & Edu Tabs (tabTab2 in XML) */}
            <Box sx={{ mt: 2 }}>
                <Paper variant="outlined">
                    <TabContext value={bottomTabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleBottomTabChange}>
                                <Tab label="회비/교육비" value="1" />
                                <Tab label="실무교육" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><FeeInfoTab /></TabPanel>
                        <TabPanel value="2"><EduInfoTab /></TabPanel>
                    </TabContext>
                </Paper>
            </Box>

        </PageContainer>
    );
}
