import { useState } from 'react';
import {
    Box, Paper, Button, Stack, TextField, Grid
} from '@mui/material';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Report ID', width: 120 },
    { field: 'reportName', headerName: 'Report Name', width: 250 },
    { field: 'date', headerName: 'Created Date', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
];

const rows = [
    { id: 'RPT-001', reportName: 'Monthly Sales Report', date: '2024-12-01', author: 'System' },
    { id: 'RPT-002', reportName: 'User Activity Log', date: '2024-12-24', author: 'Admin' },
];

export default function ReportManagement() {
    return (
        <PageContainer
            title="리포트 관리"
            breadcrumbs={[{ label: '리포트' }, { label: '리포트 목록' }]}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
                    <Button variant="outlined" startIcon={<PrintIcon />}>출력</Button>
                </Stack>
            </Box>

            <Paper variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: '#f9f9f9' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={3}>
                        <TextField label="리포트명" variant="outlined" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField label="작성일자" variant="outlined" size="small" fullWidth type="date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                </Grid>
            </Paper>

            <Box sx={{ flex: 1, height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </PageContainer>
    );
}
