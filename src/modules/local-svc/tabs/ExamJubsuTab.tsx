import {
    Box,
    Button,
    Grid,
    TextField,
    Paper,
    InputAdornment
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { mockExamJubsuList } from '../mockData';

const columns: GridColDef[] = [
    { field: 'jubsuNo', headerName: '접수번호', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'courseName', headerName: '과목명', width: 180, headerAlign: 'center' },
    { field: 'examSeatNo', headerName: '좌석번호', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: '성명', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'birthDate', headerName: '생년월일', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'mobile', headerName: '휴대전화', width: 140, align: 'center', headerAlign: 'center' },
    { field: 'address', headerName: '주소', width: 300, headerAlign: 'center' },
];

const ExamJubsuTab = () => {
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
                        <TextField
                            fullWidth
                            label="성명/수험번호 검색"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <Button fullWidth variant="contained" startIcon={<SearchIcon />}>
                            조회
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {/* Content */}
            <Paper sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={mockExamJubsuList}
                    columns={columns}
                    getRowId={(row) => row.jubsuNo}
                    checkboxSelection
                    disableRowSelectionOnClick
                    density="compact"
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                    }}
                    pageSizeOptions={[20, 50]}
                />
            </Paper>
        </Box>
    );
};

export default ExamJubsuTab;
