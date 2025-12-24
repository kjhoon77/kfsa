import { Box, Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'courseId', headerName: '과정코드', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'courseName', headerName: '과정명', width: 250 },
    { field: 'term', headerName: '교육기간', width: 200, align: 'center', headerAlign: 'center' },
    { field: 'capacity', headerName: '정원', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'applicant', headerName: '신청', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'status', headerName: '상태', width: 100, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 1, courseId: 'K-001', courseName: '소방안전관리자 1급', term: '2024.01.01 ~ 2024.01.05', capacity: 50, applicant: 45, status: '접수중' },
    { id: 2, courseId: 'K-002', courseName: '소방안전관리자 2급', term: '2024.01.10 ~ 2024.01.12', capacity: 60, applicant: 60, status: '마감' },
];

const TrainingManagement = () => {
    return (
        <PageContainer title="교육 관리" description="교육 과정 개설 및 접수 관리">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
                <Button variant="contained" color="primary" startIcon={<AddIcon />}>교육개설</Button>
            </Box>
            <Box sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="교육과정명" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField fullWidth size="small" label="교육기간" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} density="compact" checkboxSelection />
            </Box>
        </PageContainer>
    );
};

export default TrainingManagement;
