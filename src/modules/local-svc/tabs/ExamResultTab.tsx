import {
    Box,
    Button,
    Grid,
    TextField,
    Paper,
    Chip
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import { mockExamResults } from '../mockData';

const columns: GridColDef[] = [
    { field: 'rank', headerName: '석차', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'jubsuNo', headerName: '수험번호', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: '성명', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'score', headerName: '점수', width: 100, align: 'center', headerAlign: 'center', type: 'number' },
    {
        field: 'passStatus', headerName: '합격여부', width: 120, align: 'center', headerAlign: 'center',
        renderCell: (params) => {
            const color = params.value === '합격' ? 'success' : 'error';
            return <Chip label={params.value} color={color} size="small" variant="filled" />;
        }
    },
];

const ExamResultTab = () => {
    return (
        <Box>
            {/* Search Filter */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <TextField
                            fullWidth
                            label="시험회차 선택"
                            size="small"
                            select
                            SelectProps={{ native: true }}
                        >
                            <option value="EO-2024-001">2024년 101회차 (2024-03-15)</option>
                            <option value="EO-2024-002">2024년 102회차 (2024-06-20)</option>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Button variant="outlined" startIcon={<UploadIcon />}>
                            OMR 결과 업로드
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: 'right' }}>
                        <Button variant="contained" startIcon={<SearchIcon />}>
                            결과 조회
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {/* Content */}
            <Paper sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={mockExamResults}
                    columns={columns}
                    getRowId={(row) => row.jubsuNo}
                    disableRowSelectionOnClick
                    density="compact"
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                        sorting: {
                            sortModel: [{ field: 'rank', sort: 'asc' }],
                        },
                    }}
                    pageSizeOptions={[20, 50]}
                />
            </Paper>
        </Box>
    );
};

export default ExamResultTab;
