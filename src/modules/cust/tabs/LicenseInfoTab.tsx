import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import type { LicenseInfo } from '../types';

const columns: GridColDef[] = [
    { field: 'OLHCD', headerName: '자격증명', width: 150 },
    { field: 'OLNO', headerName: '자격증등록번호', width: 150 },
    { field: 'OLDATE', headerName: '등록일자', width: 120 },
];

export default function LicenseInfoTab() {
    const rows: LicenseInfo[] = [];

    return (
        <Box sx={{ height: 300, width: '100%' }}>
            <Typography variant="subtitle2" gutterBottom>보유자격 리스트</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.OLNO}
                hideFooter
            />
        </Box>
    );
}
