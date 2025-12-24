import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'svcName', headerName: '서비스명', width: 200 },
    { field: 'status', headerName: '상태', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'lastRun', headerName: '최종실행일', width: 150, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 1, svcName: 'OMR 데이터 동기화', status: '대기', lastRun: '2024-01-01 12:00:00' },
];

const LocalSvcManagement = () => {
    return (
        <PageContainer title="로컬서비스 관리" description="로컬 실행 서비스 및 OMR 데이터 연동">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="서비스명" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default LocalSvcManagement;
