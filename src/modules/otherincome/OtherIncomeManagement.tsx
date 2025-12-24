import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'date', headerName: '일자', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'type', headerName: '수입구분', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'amount', headerName: '금액', width: 120, align: 'right', headerAlign: 'center' },
    { field: 'remark', headerName: '적요', width: 300 },
];

const rows = [
    { id: 1, date: '2024-01-15', type: '이자수익', amount: 50000, remark: '예금 이자' },
];

const OtherIncomeManagement = () => {
    return (
        <PageContainer title="기타수입 관리" description="교육비 외 기타 수입 내역 관리">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="일자" placeholder="YYYY-MM-DD" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="수입구분" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default OtherIncomeManagement;
