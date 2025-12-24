import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'gtDeptNm', headerName: '지부', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'cno', headerName: '관리번호', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'rcNm', headerName: '지역', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'cNickNm', headerName: '직능', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'mbNm', headerName: '대상물명', width: 200, headerAlign: 'center' },
    { field: 'mName', headerName: '성명', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'birthday', headerName: '생년월일', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'mPersonKey', headerName: '회원식별번호', width: 140, align: 'center', headerAlign: 'center' },
    { field: 'fmhStartDate', headerName: '선임일자', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'cFeeYyMm', headerName: '회비부과년월', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'overGubun', headerName: '겸직', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'mAddr', headerName: '대상물주소', width: 300, headerAlign: 'center' },
];

const rows = [
    {
        id: 1,
        gtDeptNm: '서울지부',
        cno: '1001',
        rcNm: '서울',
        cNickNm: '방화관리',
        mbNm: '한국화재보험협회',
        mName: '홍길동',
        birthday: '1980-01-01',
        mPersonKey: 'A1234-56789',
        fmhStartDate: '2023-01-01',
        cFeeYyMm: '2023.12',
        overGubun: 'N',
        mAddr: '서울특별시 영등포구 국제금융로6길 38'
    },
    {
        id: 2,
        gtDeptNm: '경기지부',
        cno: '1002',
        rcNm: '경기',
        cNickNm: '위험물',
        mbNm: '경기물류센터',
        mName: '김철수',
        birthday: '1982-05-05',
        mPersonKey: 'B9876-54321',
        fmhStartDate: '2022-05-15',
        cFeeYyMm: '2023.12',
        overGubun: 'Y',
        mAddr: '경기도 성남시 분당구 판교로 123'
    },
];

const MemberManagement = () => {
    const [branch, setBranch] = useState('ALL');

    return (
        <PageContainer title="회원정보관리" description="회원 정보 관리 및 조회">
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>
                    조회
                </Button>
                <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                    신규
                </Button>
                <Button variant="contained" color="success" startIcon={<SaveIcon />}>
                    저장
                </Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    삭제
                </Button>
            </Box>

            {/* Search Area */}
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, mb: 2, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth size="small">
                            <InputLabel>부서/지부</InputLabel>
                            <Select
                                value={branch}
                                label="부서/지부"
                                onChange={(e) => setBranch(e.target.value)}
                            >
                                <MenuItem value="ALL">전체</MenuItem>
                                <MenuItem value="SEOUL">서울지부</MenuItem>
                                <MenuItem value="GYEONGGI">경기지부</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth size="small">
                            <InputLabel>교육구분</InputLabel>
                            <Select defaultValue="" label="교육구분">
                                <MenuItem value="">전체</MenuItem>
                                <MenuItem value="1">선임자교육</MenuItem>
                                <MenuItem value="2">교육승계</MenuItem>
                                <MenuItem value="3">사이버교육</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="성명"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="주민등록번호"
                            variant="outlined"
                            size="small"
                            placeholder="- 없이 입력"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Data Grid */}
            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                    }}
                    pageSizeOptions={[20, 50, 100]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    density="compact"
                />
            </Box>
        </PageContainer>
    );
};

export default MemberManagement;
