import {
    Box,
    Button,
    Grid,
    TextField,
    Paper,
    Typography,
    InputAdornment,
    Card,
    CardMedia,
    CardContent
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { mockEquipments } from '../mockData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ko } from 'date-fns/locale';

const columns: GridColDef[] = [
    { field: 'manageNo', headerName: '관리번호', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: '품명', width: 150, headerAlign: 'center' },
    { field: 'model', headerName: '모델명', width: 150, headerAlign: 'center' },
    { field: 'spec', headerName: '규격', width: 150, headerAlign: 'center' },
    { field: 'place', headerName: '보관장소', width: 120, headerAlign: 'center' },
    { field: 'status', headerName: '상태', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'buyDate', headerName: '구입일자', width: 120, align: 'center', headerAlign: 'center' },
];

const EquipmentManagementTab = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
            <Box>
                {/* Search Area */}
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <TextField
                                fullWidth
                                label="관리부서"
                                size="small"
                                select
                                SelectProps={{ native: true }}
                            >
                                <option value="ALL">전체</option>
                                <option value="HQ">본사</option>
                                <option value="BUSAN">부산지부</option>
                            </TextField>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <DatePicker
                                label="구입일자"
                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <TextField
                                fullWidth
                                label="품명/모델명 검색"
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

                {/* Main Content */}
                <Grid container spacing={2}>
                    {/* List */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper sx={{ height: 600, width: '100%', p: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
                                <Typography variant="subtitle1" fontWeight="bold">기자재 목록</Typography>
                                <Box>
                                    <Button size="small" startIcon={<AddIcon />} sx={{ mr: 1 }}>신규</Button>
                                    <Button size="small" color="error" startIcon={<DeleteIcon />}>삭제</Button>
                                </Box>
                            </Box>
                            <DataGrid
                                rows={mockEquipments}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 20 },
                                    },
                                }}
                                pageSizeOptions={[20, 50]}
                                checkboxSelection
                                disableRowSelectionOnClick
                                density="compact"
                            />
                        </Paper>
                    </Grid>

                    {/* Detail Form */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper sx={{ p: 2, height: '100%', overflow: 'auto' }}>
                            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                                기자재 상세정보
                            </Typography>

                            {/* Image Placeholder */}
                            <Card sx={{ mb: 2, border: '1px dashed grey' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://via.placeholder.com/300x200?text=Equipment+Image"
                                    alt="Equipment"
                                    sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
                                />
                                <CardContent sx={{ p: 1, '&:last-child': { pb: 1 }, textAlign: 'center' }}>
                                    <Button variant="outlined" startIcon={<CloudUploadIcon />} size="small">
                                        이미지 업로드
                                    </Button>
                                </CardContent>
                            </Card>

                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="관리번호" size="small" defaultValue="EQ-2024-001" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="구입일자" size="small" defaultValue="2024-01-10" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="품명" size="small" defaultValue="빔프로젝터" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="모델명" size="small" defaultValue="EB-2255U" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="규격" size="small" defaultValue="5000 Ansi" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="구입금액" type="number" size="small" defaultValue="1500000" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="상태" size="small" select SelectProps={{ native: true }} defaultValue="보유">
                                        <option value="보유">보유</option>
                                        <option value="폐기">폐기</option>
                                        <option value="망실">망실</option>
                                    </TextField>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="보관장소" size="small" defaultValue="본사 1강의실" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="비고" multiline rows={3} size="small" />
                                </Grid>
                                <Grid size={{ xs: 12 }} sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                                    <Button variant="outlined">초기화</Button>
                                    <Button variant="contained" color="success" startIcon={<SaveIcon />}>저장</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    );
};

export default EquipmentManagementTab;
