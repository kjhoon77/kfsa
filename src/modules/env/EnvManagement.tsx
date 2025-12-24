import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
    Paper,
    Divider
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SaveIcon from '@mui/icons-material/Save';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const columns: GridColDef[] = [
    { field: 'menuId', headerName: 'ID', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'menuName', headerName: '메뉴명', width: 200, headerAlign: 'center' },
    { field: 'menuPath', headerName: '경로', width: 250, headerAlign: 'center' },
];

const allMenus = [
    { id: 1, menuId: 'M001', menuName: '회원관리', menuPath: '/mem/management' },
    { id: 2, menuId: 'P001', menuName: '교수관리', menuPath: '/profes/management' },
    { id: 3, menuId: 'I001', menuName: '품목관리', menuPath: '/item/management' },
    { id: 4, menuId: 'E001', menuName: '환경관리', menuPath: '/env/management' },
    { id: 5, menuId: 'R001', menuName: '리포트', menuPath: '/report/management' },
];

const initialFavorites = [
    { id: 1, menuId: 'M001', menuName: '회원관리', menuPath: '/mem/management' },
];

const EnvManagement = () => {
    // Stat for demonstration (not truly functional in this mockup without complex state/selection logic)
    const [leftSelection, setLeftSelection] = useState<number[]>([]);
    const [rightSelection, setRightSelection] = useState<number[]>([]);

    return (
        <PageContainer title="즐겨찾기 관리" description="자주 사용하는 메뉴를 등록 및 관리">
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" color="success" startIcon={<SaveIcon />}>
                    저장
                </Button>
            </Box>

            <Grid container spacing={2} sx={{ height: 600 }}>
                {/* Left: All Menus */}
                <Grid item xs={12} md={5.5}>
                    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, px: 1 }}>
                            전체 메뉴
                        </Typography>
                        <Box sx={{ flex: 1 }}>
                            <DataGrid
                                rows={allMenus}
                                columns={columns}
                                checkboxSelection
                                density="compact"
                                onRowSelectionModelChange={(newSelection) => {
                                    setLeftSelection(newSelection as number[]);
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid>

                {/* Middle: Buttons */}
                <Grid item xs={12} md={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Button variant="outlined" sx={{ minWidth: 0 }}>
                        <ArrowForwardIcon />
                    </Button>
                    <Button variant="outlined" sx={{ minWidth: 0 }}>
                        <ArrowBackIcon />
                    </Button>
                </Grid>

                {/* Right: Favorites */}
                <Grid item xs={12} md={5.5}>
                    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, px: 1 }}>
                            즐겨찾기 목록
                        </Typography>
                        <Box sx={{ flex: 1 }}>
                            <DataGrid
                                rows={initialFavorites}
                                columns={columns}
                                checkboxSelection
                                density="compact"
                                onRowSelectionModelChange={(newSelection) => {
                                    setRightSelection(newSelection as number[]);
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default EnvManagement;
