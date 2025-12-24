import React from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    Paper,
    Typography,
    InputAdornment
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { mockEduItemTransactions } from '../mockData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ko } from 'date-fns/locale';

interface EduItemTransactionTabProps {
    type: 'EDU' | 'FORM'; // EDU: 교재, FORM: 제서식
}

const columns: GridColDef[] = [
    { field: 'date', headerName: '일자', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'type', headerName: '구분', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'itemCode', headerName: '품목코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'itemName', headerName: '품목명', width: 250, headerAlign: 'center' },
    { field: 'qty', headerName: '수량', width: 100, type: 'number', headerAlign: 'center' },
    { field: 'target', headerName: '사용처/대상', width: 150, headerAlign: 'center' },
    { field: 'remark', headerName: '비고', width: 200, headerAlign: 'center' },
];

const EduItemTransactionTab: React.FC<EduItemTransactionTabProps> = ({ type }) => {
    // Unused title variable removed for clean code
    console.log("Tab Type:", type);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
            <Box>
                {/* Search / Filter Area */}
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <DatePicker
                                label="시작일"
                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <DatePicker
                                label="종료일"
                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <TextField
                                fullWidth
                                label="품목명 검색"
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

                {/* Main Content Area: Grid + Form */}
                <Grid container spacing={2}>
                    {/* Left: Transaction List */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Paper sx={{ height: 600, width: '100%', p: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
                                <Typography variant="subtitle1" fontWeight="bold">수불 내역</Typography>
                                <Box>
                                    <Button size="small" startIcon={<AddIcon />} sx={{ mr: 1 }}>행추가</Button>
                                    <Button size="small" color="error" startIcon={<DeleteIcon />}>행삭제</Button>
                                </Box>
                            </Box>
                            <DataGrid
                                rows={mockEduItemTransactions}
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

                    {/* Right: Input Form */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 2, height: '100%' }}>
                            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                                상세 입력
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                    <DatePicker
                                        label="수불일자"
                                        slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="구분(입고/지급)" size="small" select SelectProps={{ native: true }}>
                                        <option value="IN">입고</option>
                                        <option value="OUT">지급</option>
                                        <option value="DISCARD">폐기/반납</option>
                                    </TextField>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="품목코드" size="small" placeholder="선택하세요" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="품목명" size="small" disabled />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="수량" type="number" size="small" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="사용처/대상" size="small" />
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

export default EduItemTransactionTab;
