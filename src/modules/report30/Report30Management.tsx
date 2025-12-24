import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'reportName', headerName: '리포트명', width: 300 },
    { field: 'fileName', headerName: '파일명', width: 250 },
    { field: 'updated', headerName: '수정일', width: 120, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 'RPT001', reportName: '교육 수료증 양식', fileName: 'cert_template.reb', updated: '2023-12-01' },
    { id: 'RPT002', reportName: '매출 결산 보고서', fileName: 'sales_report.reb', updated: '2023-12-15' },
];

const Report30Management = () => {
    return (
        <PageContainer title="리포트3.0 관리" description="리포트 서식 및 출력물 관리">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="리포트명" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default Report30Management;
