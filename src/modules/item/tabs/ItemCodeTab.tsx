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
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { mockItemCodesLarge, mockItemCodesMedium, mockItemCodesSmall } from '../mockData';

const columnsLarge: GridColDef[] = [
    { field: 'code', headerName: '대분류코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: '대분류명', width: 200, headerAlign: 'center' },
    { field: 'title', headerName: '타이틀', width: 200, headerAlign: 'center' },
    { field: 'useYn', headerName: '사용여부', width: 100, align: 'center', headerAlign: 'center' },
];

const columnsMedium: GridColDef[] = [
    { field: 'code', headerName: '중분류코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: '중분류명', width: 200, headerAlign: 'center' },
    { field: 'parentName', headerName: '상위대분류', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'title', headerName: '타이틀', width: 200, headerAlign: 'center' },
];

const columnsSmall: GridColDef[] = [
    { field: 'code', headerName: '소분류코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: '소분류명', width: 200, headerAlign: 'center' },
    { field: 'parentName', headerName: '상위중분류', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'title', headerName: '타이틀', width: 200, headerAlign: 'center' },
];

const ItemCodeTab = () => {
    const [subTabValue, setSubTabValue] = useState(0);

    const handleSubTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSubTabValue(newValue);
    };

    const getCurrentColumns = () => {
        switch (subTabValue) {
            case 0: return columnsLarge;
            case 1: return columnsMedium;
            case 2: return columnsSmall;
            default: return columnsLarge;
        }
    };

    const getCurrentRows = () => {
        switch (subTabValue) {
            case 0: return mockItemCodesLarge;
            case 1: return mockItemCodesMedium;
            case 2: return mockItemCodesSmall;
            default: return mockItemCodesLarge;
        }
    };

    return (
        <Box>
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

            {/* Sub Tabs */}
            <Paper square sx={{ width: '100%', mb: 2, borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Tabs
                    value={subTabValue}
                    onChange={handleSubTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                    <Tab label="대분류" />
                    <Tab label="중분류" />
                    <Tab label="소분류" />
                </Tabs>

                {/* Grid */}
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

            {/* Detail Form */}
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="코드" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="명칭" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField fullWidth label="비고/타이틀" size="small" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ItemCodeTab;
