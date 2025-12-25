import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import type { OverBizInfo } from '../types';

const columns: GridColDef[] = [
    { field: 'CGTMGNO', headerName: '지부', width: 80 },
    { field: 'CNO', headerName: '회원번호', width: 100 },
    { field: 'CNICKFULLNM', headerName: '직능', width: 120 },
    { field: 'COVERGUBUN', headerName: '면제여부', width: 80 },
    { field: 'BNM', headerName: '업체명', width: 150 },
    { field: 'MINAPFEE', headerName: '미납금액', width: 100, type: 'number' },
    { field: 'BBIZCD', headerName: '업종', width: 100 },
];

export default function ConcurrentBizTab() {
    // Mock Data
    const rows: OverBizInfo[] = [];

    return (
        <Box sx={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.CNO}
                hideFooter
            />
        </Box>
    );
}
