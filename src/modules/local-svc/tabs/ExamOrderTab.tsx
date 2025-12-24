
import {
    Box,
    Button,
    Paper,
    Typography,
    Chip
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import DownloadIcon from '@mui/icons-material/Download';
import SyncIcon from '@mui/icons-material/Sync';
import { mockExamOrders } from '../mockData';

const columns: GridColDef[] = [
    { field: 'examYear', headerName: '년도', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'examRound', headerName: '회차', width: 80, align: 'center', headerAlign: 'center' },
    { field: 'examDate', headerName: '시험일자', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'examTimeStart', headerName: '시작시간', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'examTimeEnd', headerName: '종료시간', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'examPlace', headerName: '고사장', width: 200, headerAlign: 'center' },
    { field: 'seatCount', headerName: '좌석수', width: 100, type: 'number', headerAlign: 'center' },
    {
        field: 'status', headerName: '상태', width: 120, align: 'center', headerAlign: 'center',
        renderCell: (params) => {
            const color = params.value === '접수중' ? 'success' : 'default';
            return <Chip label={params.value} color={color} size="small" variant="outlined" />;
        }
    },
];

const ExamOrderTab = () => {
    return (
        <Box>
            <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1">
                    로컬 OMR 프로그램으로 전송할 시험 회차를 선택하고 다운로드하세요.
                </Typography>
                <Box>
                    <Button variant="contained" startIcon={<DownloadIcon />} sx={{ mr: 1 }}>
                        시험정보 다운로드 (Local DB)
                    </Button>
                    <Button variant="outlined" startIcon={<SyncIcon />}>
                        데이터 동기화
                    </Button>
                </Box>
            </Paper>

            <Paper sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={mockExamOrders}
                    columns={columns}
                    getRowId={(row) => row.examOrderNo}
                    checkboxSelection
                    disableRowSelectionOnClick
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

export default ExamOrderTab;
