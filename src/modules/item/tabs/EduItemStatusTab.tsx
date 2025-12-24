import React from 'react';
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
import { mockItemStatus } from '../mockData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ko } from 'date-fns/locale';

interface EduItemStatusTabProps {
    type: 'EDU' | 'FORM';
}

const columns: GridColDef[] = [
    { field: 'itemCode', headerName: '품목코드', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'itemName', headerName: '품목명', width: 300, headerAlign: 'center' },
    { field: 'basicQty', headerName: '기초재고', width: 100, type: 'number', headerAlign: 'center' },
    { field: 'inQty', headerName: '입고수량', width: 100, type: 'number', headerAlign: 'center' },
    { field: 'outQty', headerName: '지급량', width: 100, type: 'number', headerAlign: 'center' },
    {
        field: 'stockQty', headerName: '현재고', width: 100, type: 'number', headerAlign: 'center',
        renderCell: (params) => (
            <span style={{ fontWeight: 'bold', color: params.value < 10 ? 'red' : 'inherit' }}>
                {params.value}
            </span>
        )
    },
];

const EduItemStatusTab: React.FC<EduItemStatusTabProps> = ({ type }) => {
    console.log("Status Tab Type:", type);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
            <Box>
                {/* Search Area */}
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <DatePicker
                                label="기준년도/월"
                                views={['year', 'month']}
                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <TextField
                                fullWidth
                                label="지부 선택"
                                size="small"
                                select
                                SelectProps={{ native: true }}
                            >
                                <option value="ALL">전체</option>
                                <option value="HQ">본사</option>
                                <option value="BUSAN">부산지부</option>
                            </TextField>
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

                {/* Grid Area */}
                <Paper sx={{ height: 600, width: '100%', p: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                        <Button variant="outlined" size="small">엑셀 다운로드</Button>
                    </Box>
                    <DataGrid
                        rows={mockItemStatus}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 20 },
                            },
                        }}
                        pageSizeOptions={[20, 50]}
                        disableRowSelectionOnClick
                        density="compact"
                    />
                </Paper>
            </Box>
        </LocalizationProvider>
    );
};

export default EduItemStatusTab;
