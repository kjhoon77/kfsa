import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'posNo', headerName: 'POS번호', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'location', headerName: '설치위치', width: 150 },
    { field: 'status', headerName: '상태', width: 100, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 1, posNo: 'POS-01', location: '1층 로비', status: '정상' },
];

const PosEtcManagement = () => {
    return (
        <PageContainer title="POS/기타 관리" description="POS 장비 및 기타 자원 관리">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="POS 번호" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default PosEtcManagement;
