import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'menuName', headerName: '메뉴명', width: 200 },
    { field: 'path', headerName: '경로', width: 250 },
    { field: 'role', headerName: '권한', width: 150, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 'M001', menuName: '회원관리', path: '/mem/management', role: 'ADMIN, MANAGER' },
    { id: 'M002', menuName: '시스템관리', path: '/sys/management', role: 'ADMIN' },
];

const SysManagement = () => {
    return (
        <PageContainer title="시스템 관리" description="메뉴 및 사용자 권한 관리">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="메뉴명" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default SysManagement;
