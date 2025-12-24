import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    Tabs,
    Tab,
    Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

// Columns for different tabs
const columnsLarge: GridColDef[] = [
    { field: 'eibCd', headerName: '대분류코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'eibNm', headerName: '대분류명', width: 200, headerAlign: 'center' },
    { field: 'eibTitle', headerName: '타이틀', width: 200, headerAlign: 'center' },
    { field: 'useYn', headerName: '사용여부', width: 100, align: 'center', headerAlign: 'center' },
];

const columnsMedium: GridColDef[] = [
    { field: 'eimCd', headerName: '중분류코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'eimNm', headerName: '중분류명', width: 200, headerAlign: 'center' },
    { field: 'eibNm', headerName: '상위대분류', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'eimTitle', headerName: '타이틀', width: 200, headerAlign: 'center' },
];

const columnsSmall: GridColDef[] = [
    { field: 'eisCd', headerName: '소분류코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'eisNm', headerName: '소분류명', width: 200, headerAlign: 'center' },
    { field: 'eimNm', headerName: '상위중분류', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'eisTitle', headerName: '타이틀', width: 200, headerAlign: 'center' },
];

// Mock Data
const rowsLarge = [
    { id: 1, eibCd: '10', eibNm: '안전교육', eibTitle: 'Safety Edu', useYn: 'Y' },
    { id: 2, eibCd: '20', eibNm: '직무교육', eibTitle: 'Job Training', useYn: 'Y' },
];

const rowsMedium = [
    { id: 1, eimCd: '1001', eimNm: '소방안전', eibNm: '안전교육', eimTitle: 'Fire Safety' },
    { id: 2, eimCd: '1002', eimNm: '전기안전', eibNm: '안전교육', eimTitle: 'Electric Safety' },
];

const rowsSmall = [
    { id: 1, eisCd: '100101', eisNm: '소화기사용법', eimNm: '소방안전', eisTitle: 'Fire Extinguisher' },
];

const ItemManagement = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const getCurrentColumns = () => {
        switch (tabValue) {
            case 0: return columnsLarge;
            case 1: return columnsLarge;
            case 2: return columnsMedium;
            case 3: return columnsSmall;
            default: return columnsLarge;
        }
    };

    const getCurrentRows = () => {
        switch (tabValue) {
            case 0: return rowsLarge;
            case 1: return rowsLarge;
            case 2: return rowsMedium;
            case 3: return rowsSmall;
            default: return rowsLarge;
        }
    };

    return (
        <PageContainer title="품목 관리" description="교육 교보재 및 분류 관리">
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

            {/* Tabs */}
            <Paper square sx={{ width: '100%', mb: 2, borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                    <Tab label="교보재분류" />
                    <Tab label="대분류" />
                    <Tab label="중분류" />
                    <Tab label="소분류" />
                </Tabs>

                {/* Tab Content (Grid) */}
                <Box sx={{ p: 2, height: 500, width: '100%' }}>
                    <DataGrid
                        rows={getCurrentRows()}
                        columns={getCurrentColumns()}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[10, 20]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        density="compact"
                    />
                </Box>
            </Paper>

            {/* Detail Form Area (Conditional based on selection, simplified for now) */}
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="코드" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="명칭" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="비고/타이틀" size="small" />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    );
};

export default ItemManagement;
