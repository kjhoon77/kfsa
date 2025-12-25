import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import type { TrainingPassList } from '../types';

const columns: GridColDef[] = [
    { field: 'TCCOURSENM', headerName: '수료과정', width: 200 },
    { field: 'TPPASSNO', headerName: '수료번호', width: 150 },
    { field: 'TPPASSDATE', headerName: '수료일자', width: 120 },
];

export default function TrainingPassTab() {
    const rows: TrainingPassList[] = [];

    return (
        <Box sx={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.TPPASSNO}
                hideFooter
            />
        </Box>
    );
}
