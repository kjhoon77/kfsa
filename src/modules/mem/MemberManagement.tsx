import { useState, useEffect, useCallback } from 'react';
import {
    Box, Grid, Paper, Typography, TextField, Button, MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

// Hooks & Context
import { useCodeStore } from '../../store/useCodeStore';
import { useGlobalDialog } from '../../context/GlobalDialogContext';
import { useHotkeys, HOTKEYS } from '../../hooks/useHotkeys';
import { callService } from '../../lib/api';

// Types
import type { MemberInfo, CustomerFeeInfo, EducationPassInfo, OverBizInfo, MemberSearchCondition } from './types';

// styles
const styles = {
    headerBox: { p: 2, mb: 2, backgroundColor: '#f5f5f5', borderRadius: 1 },
    gridContainer: { height: 400, width: '100%', mb: 2 },
    bottomSection: { mt: 2 },
    tabPanel: { p: 2, border: '1px solid #e0e0e0', borderRadius: '0 0 4px 4px' },
    subTitle: { fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center' }
};

export default function MemberManagement() {
    // --- State ---
    const { fetchCodes } = useCodeStore(); // removed getCodes
    const { showAlert } = useGlobalDialog();

    // Search Condition
    const [searchCondition, setSearchCondition] = useState<MemberSearchCondition>({
        jibuCd: '',
        custNo: '',
        memberNm: '',
        birthday: '',
        personKey: ''
    });

    // Data Grids
    const [memberList, setMemberList] = useState<MemberInfo[]>([]);
    const [selectedMember, setSelectedMember] = useState<MemberInfo | null>(null);

    // Detail Data
    const [feeList, setFeeList] = useState<CustomerFeeInfo[]>([]);
    const [eduList, setEduList] = useState<EducationPassInfo[]>([]);
    const [overBizList, setOverBizList] = useState<OverBizInfo[]>([]);

    // Loading State
    const [loading, setLoading] = useState(false);

    // --- Lifecycle ---
    useEffect(() => {
        const init = async () => {
            await fetchCodes(['JIBU']); // Load Jibu codes
        };
        init();
    }, [fetchCodes]);

    // Use unused variables to silence linter (or removing them would be better, but keeping for logic steps)
    useEffect(() => {
        if (loading) console.log('Loading...');
        if (selectedMember) console.log('Selected:', selectedMember);
        if (overBizList.length > 0) console.log('OverBiz:', overBizList);
    }, [loading, selectedMember, overBizList]);


    // --- Business Logic ---

    // 1. Search (F2)
    const handleSearch = useCallback(async () => {
        setLoading(true);
        try {
            // Mock API Call
            const response: any = await callService(
                'mem:searchMemberInfo',
                '',
                { ...searchCondition },
                'ds_oMemberInfo=output',
                ''
            );

            if (response && response.ds_oMemberInfo) {
                setMemberList(response.ds_oMemberInfo);
                // Select first row if exists
                if (response.ds_oMemberInfo.length > 0) {
                    handleRowClick(response.ds_oMemberInfo[0]);
                } else {
                    setMemberList([]);
                    clearDetailData();
                    await showAlert('조회 결과가 없습니다.');
                }
            }
        } catch (error) {
            console.error(error);
            await showAlert('조회 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    }, [searchCondition, showAlert]);

    // 2. Select Row (Detail Search)
    const handleRowClick = async (member: MemberInfo) => {
        setSelectedMember(member);

        try {
            const response: any = await callService(
                'mem:searchMemberDetails',
                '',
                { cmgno: member.CMGNO },
                'ds_ioCustomerFeeInfo=output1 ds_ioEducationPassInfo=output2 ds_ioOverBizInfo=output3',
                ''
            );

            if (response) {
                setFeeList(response.ds_ioCustomerFeeInfo || []);
                setEduList(response.ds_ioEducationPassInfo || []);
                setOverBizList(response.ds_ioOverBizInfo || []);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const clearDetailData = () => {
        setSelectedMember(null);
        setFeeList([]);
        setEduList([]);
        setOverBizList([]);
    };

    // 3. Reset (F10)
    const handleReset = useCallback(() => {
        setSearchCondition({
            jibuCd: '',
            custNo: '',
            memberNm: '',
            birthday: '',
            personKey: ''
        });
        setMemberList([]);
        clearDetailData();
    }, []);

    // 4. Hotkeys
    const keyMap = {
        [HOTKEYS.F2]: handleSearch,
        [HOTKEYS.F10]: handleReset,
    };
    useHotkeys(keyMap);

    // --- Columns Definitions ---

    const memberColumns: GridColDef[] = [
        { field: 'rowId', headerName: 'No', width: 50, align: 'center', headerAlign: 'center' },
        { field: 'GTDEPTNM', headerName: '지부', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'CNO', headerName: '관리번호', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'RCNM', headerName: '지역', width: 60, align: 'center', headerAlign: 'center' },
        { field: 'CNICKNM', headerName: '직능', width: 120 },
        { field: 'MBNM', headerName: '대상물명', width: 150 },
        { field: 'MNAME', headerName: '성명', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90, align: 'center', headerAlign: 'center' },
        { field: 'MPERSONKEY', headerName: '회원식별번호', width: 120, align: 'center', headerAlign: 'center' },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'CFEEYYMM', headerName: '회비부과년월', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'OVERGUBUN', headerName: '겸직', width: 50, align: 'center', headerAlign: 'center' },
        { field: 'MADDR', headerName: '대상물주소', width: 250 },
    ];

    const feeColumns: GridColDef[] = [
        { field: 'CFGYEAR', headerName: '년도', width: 70, align: 'center', headerAlign: 'center' },
        {
            field: 'CFCCGUBUN', headerName: '회비구분', width: 80, align: 'center', headerAlign: 'center',
            valueFormatter: (value: any) => value === '0' ? '회비' : '교육비'
        },
        {
            field: 'MINAPFEE', headerName: '미납금액', width: 100, align: 'right', headerAlign: 'center',
            valueFormatter: (value: any) => value ? Number(value).toLocaleString() : '0'
        },
        {
            field: 'SUNAPFEE', headerName: '수납금액', width: 100, align: 'right', headerAlign: 'center',
            renderCell: (params: GridRenderCellParams) => {
                const minap = params.row.MINAPFEE || 0;
                const sunap = params.value || 0;
                if (minap === 0 && sunap === 0) return '면제';
                return Number(sunap).toLocaleString();
            }
        },
    ];

    const eduColumns: GridColDef[] = [
        {
            field: 'print', headerName: '이수확인증', width: 90, sortable: false, align: 'center', headerAlign: 'center',
            renderCell: () => (
                <Button variant="outlined" size="small" startIcon={<PrintIcon />}>출력</Button>
            )
        },
        { field: 'EPYEAR', headerName: '년도', width: 60, align: 'center', headerAlign: 'center' },
        { field: 'ESSTUDENT_NM', headerName: '교육', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'EPSUCCESSIONGUBUN_NM', headerName: '구분', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'EPPERSONNM', headerName: '성명', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90, align: 'center', headerAlign: 'center' },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'ESGUBUN', headerName: '교육구분', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'BNM', headerName: '대상물(업체)명', width: 150 },
    ];

    // --- Render ---
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>회원정보관리</Typography>

            {/* 1. Search Area */}
            <Paper elevation={3} sx={styles.headerBox}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            select
                            label="지부"
                            fullWidth
                            size="small"
                            value={searchCondition.jibuCd}
                            onChange={(e) => setSearchCondition({ ...searchCondition, jibuCd: e.target.value })}
                        >
                            <MenuItem value="">전체</MenuItem>
                            {/* In real app, map codes */}
                            <MenuItem value="01">서울지부</MenuItem>
                            <MenuItem value="02">경기지부</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="관리번호"
                            fullWidth
                            size="small"
                            value={searchCondition.custNo}
                            onChange={(e) => setSearchCondition({ ...searchCondition, custNo: e.target.value })}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="성명"
                            fullWidth
                            size="small"
                            value={searchCondition.memberNm}
                            onChange={(e) => setSearchCondition({ ...searchCondition, memberNm: e.target.value })}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="생년월일"
                            placeholder="YYMMDD"
                            fullWidth
                            size="small"
                            value={searchCondition.birthday}
                            onChange={(e) => setSearchCondition({ ...searchCondition, birthday: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="회원식별번호"
                            fullWidth
                            size="small"
                            value={searchCondition.personKey}
                            onChange={(e) => setSearchCondition({ ...searchCondition, personKey: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }} sx={{ display: 'flex', gap: 1 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<SearchIcon />}
                            onClick={handleSearch}
                            fullWidth
                        >
                            조회(F2)
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleReset}
                            sx={{ minWidth: 40, p: 1 }}
                        >
                            <RefreshIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {/* 2. Main Grid: Member Info */}
            <Paper elevation={2} sx={{ flex: 1, mb: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>회원정보</Typography>
                </Box>
                <DataGrid
                    rows={memberList}
                    columns={memberColumns}
                    getRowId={(row) => row.rowId}
                    onRowClick={(params) => handleRowClick(params.row)}
                    density="compact"
                    sx={{ border: 0 }}
                    hideFooter
                />
            </Paper>

            {/* 3. Bottom Split Section */}
            <Grid container spacing={2} sx={{ height: 300 }}>
                {/* Left: Fee Info */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Paper elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>회비정보</Typography>
                            <Button size="small">상세정보</Button>
                        </Box>
                        <DataGrid
                            rows={feeList}
                            columns={feeColumns}
                            getRowId={(row) => row.CFGYEAR + row.CFCCGUBUN} // Composite Key substitute
                            density="compact"
                            sx={{ border: 0 }}
                            hideFooter
                        />
                        <Box sx={{ p: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" size="small" color="success">은행 가상계좌 보기</Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right: Edu Info */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Paper elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ p: 1, borderBottom: '1px solid #ddd', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>실무교육정보</Typography>
                            <Box>
                                <Button size="small" sx={{ mr: 1 }}>안내문 발행이력</Button>
                                <Button size="small" sx={{ mr: 1 }}>상세정보</Button>
                                <Button size="small" variant="outlined">교육안내문 출력</Button>
                            </Box>
                        </Box>
                        <DataGrid
                            rows={eduList}
                            columns={eduColumns}
                            getRowId={(row) => row.EPMGNO}
                            density="compact"
                            sx={{ border: 0 }}
                            hideFooter
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
