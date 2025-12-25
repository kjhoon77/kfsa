import { useState, useEffect, useCallback } from 'react';
import {
    Box, Grid, Paper, Typography, TextField, Button, MenuItem,
    FormControl, InputLabel, Select
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

// Hooks & Context
import { useCodeStore } from '../../store/useCodeStore';
import { useGlobalDialog } from '../../context/GlobalDialogContext';
import { useHotkeys, HOTKEYS } from '../../hooks/useHotkeys';
import { callService } from '../../lib/api';

// Types
import type { ScholarshipInfo } from './types';

// Styles
const styles = {
    headerBox: { p: 2, mb: 2, backgroundColor: '#f5f5f5', borderRadius: 1 },
    gridContainer: { flex: 1, mb: 2, minHeight: 400 },
    formSection: { p: 2, borderTop: '1px solid #ddd' },
    titleBox: { p: 1, mb: 1, borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }
};

export default function FireScholarshipManagement() {
    // --- Hooks ---
    const { fetchCodes } = useCodeStore();
    const { showAlert, showConfirm } = useGlobalDialog();

    // --- State: Search ---
    const [searchJibu, setSearchJibu] = useState('');
    const [searchYear, setSearchYear] = useState(new Date().getFullYear().toString());
    const [searchName, setSearchName] = useState('');
    const [searchBirth, setSearchBirth] = useState('');
    const [searchDateStart, setSearchDateStart] = useState(new Date().getFullYear() + '-01-01');
    const [searchDateEnd, setSearchDateEnd] = useState(new Date().toISOString().split('T')[0]);

    // --- State: Data ---
    const [list, setList] = useState<ScholarshipInfo[]>([]);
    const [selectedRow, setSelectedRow] = useState<ScholarshipInfo | null>(null);

    // --- State: Form ---
    const [formData, setFormData] = useState<Partial<ScholarshipInfo>>({});
    const [isNewMode, setIsNewMode] = useState(false);

    // --- Lifecycle ---
    useEffect(() => {
        const init = async () => {
            await fetchCodes(['JIBU']);
        };
        init();
    }, [fetchCodes]);

    // --- Handlers: Search ---
    const handleSearch = useCallback(async () => {
        try {
            const response: any = await callService(
                'mem:searchMem0050FireScholarship',
                '',
                {
                    Jibu: searchJibu, Year: searchYear, Name: searchName,
                    Birth: searchBirth, StaDt: searchDateStart, EndDt: searchDateEnd
                },
                'ds_ioScholarship=ds_oScholarship',
                ''
            );
            if (response && response.ds_oScholarship) {
                setList(response.ds_oScholarship);
                if (response.ds_oScholarship.length > 0) {
                    handleRowClick(response.ds_oScholarship[0]);
                } else {
                    setList([]);
                    handleNew(); // Reset form if no data
                    await showAlert('조회된 데이터가 없습니다.');
                }
            }
        } catch (error) {
            console.error(error);
            await showAlert('조회 중 오류가 발생했습니다.');
        }
    }, [searchJibu, searchYear, searchName, searchBirth, searchDateStart, searchDateEnd, showAlert]);

    // --- Handlers: Form ---
    const handleRowClick = (row: ScholarshipInfo) => {
        setSelectedRow(row);
        setFormData({ ...row });
        setIsNewMode(false);
    };

    const handleNew = useCallback(() => {
        setIsNewMode(true);
        setSelectedRow(null);
        setFormData({
            FSYEAR: searchYear,
            FSDATE: new Date().toISOString().split('T')[0],
            FSSELECTYN: 'Y',
            FSAMT: 0,
            FSNM: '',
            BIRTHDAY: '',
            FSBNM: '',
            FSPERSONKEY: '',
            FSREMARK: ''
        });
    }, [searchYear]);

    const handleSave = async () => {
        if (!formData.FSNM) { await showAlert('성명을 입력하세요.'); return; }
        if (!formData.FSSELECTYN) { await showAlert('선발여부를 선택하세요.'); return; }

        if (isNewMode) {
            if (!(await showConfirm('신규 데이터를 저장하시겠습니까?'))) return;
            await callService('mem:insertMem0050Scholarship', '', { ...formData }, '', '');
        } else {
            if (!(await showConfirm('수정된 내용을 저장하시겠습니까?'))) return;
            await callService('mem:updateMem0050Scholarship', '', { ...formData }, '', '');
        }
        await showAlert('저장되었습니다.');
        handleSearch();
    };

    const handleDelete = async () => {
        if (!selectedRow) return;
        if (!(await showConfirm('선택한 항목을 삭제하시겠습니까?'))) return;

        await callService('mem:deleteMem0050FireScholarship', '', { FSMGNO: selectedRow.FSMGNO }, '', '');
        await showAlert('삭제되었습니다.');
        handleSearch();
    };

    const handleReset = useCallback(() => {
        setSearchJibu('');
        setSearchName('');
        setSearchBirth('');
        setList([]);
        handleNew();
    }, [handleNew]);

    // --- Hotkeys ---
    useHotkeys({
        [HOTKEYS.F2]: handleSearch,
        [HOTKEYS.F10]: handleReset
    });

    // --- Columns ---
    const columns: GridColDef[] = [
        { field: 'rowId', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
        { field: 'CGTMGNO', headerName: '지부', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'CNO', headerName: '관리번호', width: 90, align: 'center', headerAlign: 'center' },
        { field: 'CGROUPCD', headerName: '직능', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'FSNM', headerName: '성명', width: 90, align: 'center', headerAlign: 'center' },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'FSYEAR', headerName: '대상년도', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'FSSELECTYN_NM', headerName: '선발여부', width: 80, align: 'center', headerAlign: 'center' },
        {
            field: 'FSAMT', headerName: '지급금액', width: 100, align: 'right', headerAlign: 'center',
            valueFormatter: (value: any) => value ? Number(value).toLocaleString() : '0'
        },
        { field: 'FSDATE', headerName: '지급일자', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'FSBNM', headerName: '대상물(업체)명', width: 150 },
        { field: 'FSREMARK', headerName: '비고', width: 150 },
        { field: 'PNM', headerName: '등록자', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'REGDATE', headerName: '등록일자', width: 100, align: 'center', headerAlign: 'center' },
    ];

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>소방안전장학금관리</Typography>

            {/* 1. Search Area */}
            <Paper elevation={3} sx={styles.headerBox}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            select
                            label="지부"
                            fullWidth
                            size="small"
                            value={searchJibu}
                            onChange={(e) => setSearchJibu(e.target.value)}
                        >
                            <MenuItem value="">전체</MenuItem>
                            <MenuItem value="01">서울지부</MenuItem>
                            <MenuItem value="02">경기지부</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 1 }}>
                        <TextField
                            label="년도"
                            fullWidth
                            size="small"
                            value={searchYear}
                            onChange={(e) => setSearchYear(e.target.value)}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <TextField
                                label="지급일자 시작"
                                type="date"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                value={searchDateStart}
                                onChange={(e) => setSearchDateStart(e.target.value)}
                            />
                            <Typography>~</Typography>
                            <TextField
                                label="지급일자 종료"
                                type="date"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                value={searchDateEnd}
                                onChange={(e) => setSearchDateEnd(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="성명"
                            fullWidth
                            size="small"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="생년월일"
                            placeholder="YYMMDD"
                            fullWidth
                            size="small"
                            value={searchBirth}
                            onChange={(e) => setSearchBirth(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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

            {/* 2. Grid Area */}
            <Paper elevation={2} sx={styles.gridContainer}>
                <DataGrid
                    rows={list}
                    columns={columns}
                    getRowId={(row) => row.rowId || Math.random()}
                    onRowClick={(params) => handleRowClick(params.row)}
                    density="compact"
                    hideFooter
                />
            </Paper>

            {/* 3. Detail Form Area */}
            <Paper elevation={3} sx={styles.formSection}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: isNewMode ? 'brown' : 'forestgreen' }}>
                        {isNewMode ? '신규 등록' : '정보 수정'}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="contained" color="info" startIcon={<AddIcon />} onClick={handleNew}>신규</Button>
                        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleDelete} disabled={isNewMode}>삭제</Button>
                        <Button variant="contained" color="success" startIcon={<SaveIcon />} onClick={handleSave}>저장</Button>
                    </Box>
                </Box>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="관리번호"
                            fullWidth
                            size="small"
                            value={formData.CNO || ''}
                            disabled={!isNewMode}
                            onChange={(e) => setFormData({ ...formData, CNO: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            select
                            label="지부"
                            fullWidth
                            size="small"
                            value={formData.CGTMGNO || ''}
                            onChange={(e) => setFormData({ ...formData, CGTMGNO: e.target.value })}
                        >
                            <MenuItem value="01">서울지부</MenuItem>
                            <MenuItem value="02">경기지부</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            select
                            label="직능"
                            fullWidth
                            size="small"
                            value={formData.CGROUPCD || ''}
                            onChange={(e) => setFormData({ ...formData, CGROUPCD: e.target.value })}
                        >
                            <MenuItem value="10">홍길동</MenuItem>
                            <MenuItem value="20">김철수</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="성명"
                            fullWidth
                            size="small"
                            value={formData.FSNM || ''}
                            onChange={(e) => setFormData({ ...formData, FSNM: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="생년월일"
                            fullWidth
                            size="small"
                            value={formData.BIRTHDAY || ''}
                            onChange={(e) => setFormData({ ...formData, BIRTHDAY: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="대상년도"
                            fullWidth
                            size="small"
                            value={formData.FSYEAR || ''}
                            onChange={(e) => setFormData({ ...formData, FSYEAR: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <TextField
                            label="대상물(업체)명"
                            fullWidth
                            size="small"
                            value={formData.FSBNM || ''}
                            onChange={(e) => setFormData({ ...formData, FSBNM: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel>선발여부</InputLabel>
                            <Select
                                value={formData.FSSELECTYN || ''}
                                label="선발여부"
                                onChange={(e) => setFormData({ ...formData, FSSELECTYN: e.target.value })}
                            >
                                <MenuItem value="Y">선발자</MenuItem>
                                <MenuItem value="N">탈락자</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="지급일자"
                            type="date"
                            fullWidth
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            value={formData.FSDATE || ''}
                            onChange={(e) => setFormData({ ...formData, FSDATE: e.target.value })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextField
                            label="지급금액"
                            fullWidth
                            size="small"
                            value={formData.FSAMT || ''}
                            onChange={(e) => setFormData({ ...formData, FSAMT: Number(e.target.value) })}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8 }}>
                        <TextField
                            label="비고"
                            fullWidth
                            size="small"
                            value={formData.FSREMARK || ''}
                            onChange={(e) => setFormData({ ...formData, FSREMARK: e.target.value })}
                        />
                    </Grid>
                </Grid>

                {/* File Attachment Placeholder */}
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f9f9f9', border: '1px dashed #ccc' }}>
                    <Typography variant="caption" color="textSecondary">민원서류 스캔 및 등록 (구현 예정)</Typography>
                    <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                        <Button size="small" variant="outlined">스캔실행</Button>
                        <Button size="small" variant="outlined">불러오기</Button>
                        <Button size="small" variant="outlined">서류저장</Button>
                    </Box>
                </Box>

            </Paper>
        </Box>
    );
}
