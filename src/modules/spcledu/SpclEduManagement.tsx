import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'eduName', headerName: '특수교육과정', width: 250 },
    { field: 'target', headerName: '대상', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'schedule', headerName: '일정', width: 200, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 1, eduName: '위험물 안전관리 특수교육', target: '위험물관리자', schedule: '2024.03.01' },
];

const SpclEduManagement = () => {
    return (
        <PageContainer title="특수교육 관리" description="특수 목적 교육 과정 및 접수 관리">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="과정명" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default SpclEduManagement;
