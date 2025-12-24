import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Button,
    TextField,
    Stack,
    Chip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PageContainer from '../../../components/PageContainer';

// Mock Data
const mockFeeList = [
    { id: 1, year: '2024', type: '교육비', amount: 50000, paid: 50000, unpaid: 0, status: '완납' },
    { id: 2, year: '2024', type: '회비', amount: 30000, paid: 0, unpaid: 30000, status: '미납' },
];

const mockPaymentHistory = [
    { id: 1, date: '2024-01-15', amount: 50000, method: '카드', approvalNo: '12345678', worker: '홍길동' },
];

const CustomerFeeManagement = () => {
    const feeColumns: GridColDef[] = [
        { field: 'year', headerName: '년도', width: 80 },
        { field: 'type', headerName: '구분', width: 100 },
        { field: 'amount', headerName: '부과금액', width: 120, valueFormatter: (params) => params.value?.toLocaleString() },
        { field: 'paid', headerName: '수납금액', width: 120, valueFormatter: (params) => params.value?.toLocaleString() },
        { field: 'unpaid', headerName: '미납금액', width: 120, valueFormatter: (params) => params.value?.toLocaleString() },
        {
            field: 'status', headerName: '상태', width: 100, renderCell: (params) => (
                <Chip
                    label={params.value}
                    color={params.value === '완납' ? 'success' : 'error'}
                    size="small"
                />
            )
        },
    ];

    const paymentColumns: GridColDef[] = [
        { field: 'date', headerName: '수납일자', width: 120 },
        { field: 'amount', headerName: '금액', width: 120, valueFormatter: (params) => params.value?.toLocaleString() },
        { field: 'method', headerName: '수납방법', width: 100 },
        { field: 'approvalNo', headerName: '승인번호', width: 150 },
        { field: 'worker', headerName: '수납자', width: 100 },
    ];

    return (
        <PageContainer title="회비/교육비 정보관리" description="회비 및 교육비 수납/미납 관리">
            <Paper sx={{ p: 2 }}>
                <Box>
                    {/* Top Actions */}
                    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mb: 2 }}>
                        <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
                        <Button variant="contained" color="secondary" startIcon={<PaymentIcon />}>POS수납</Button>
                        <Button variant="outlined" startIcon={<ReceiptIcon />}>영수증출력</Button>
                    </Stack>

                    {/* Search Area */}
                    <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid xs={12} md={3}>
                                <TextField fullWidth label="고객(업체)명" size="small" />
                            </Grid>
                            <Grid xs={12} md={3}>
                                <TextField fullWidth label="고객지부" size="small" />
                            </Grid>
                            <Grid xs={12} md={3}>
                                <TextField fullWidth label="관리번호" size="small" />
                            </Grid>
                            <Grid xs={12} md={3}>
                                <TextField fullWidth label="바코드" size="small" />
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Content Grids */}
                    <Grid container spacing={3}>
                        {/* Left: Fee Status (Unpaid/Paid List) */}
                        <Grid xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>회비/교육비 내역</Typography>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={mockFeeList}
                                    columns={feeColumns}
                                    initialState={{
                                        pagination: { paginationModel: { pageSize: 5 } },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                    density="compact"
                                />
                            </div>
                        </Grid>

                        {/* Right: Payment History */}
                        <Grid xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>수납 이력</Typography>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={mockPaymentHistory}
                                    columns={paymentColumns}
                                    initialState={{
                                        pagination: { paginationModel: { pageSize: 5 } },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    density="compact"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </PageContainer>
    );
};

export default CustomerFeeManagement;
