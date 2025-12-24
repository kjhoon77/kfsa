import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef, GridRowParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface DataGridWrapperProps {
    rows: any[];
    columns: GridColDef[];
    onRowDoubleClick?: (params: GridRowParams) => void;
    loading?: boolean;
}

export default function DataGridWrapper({ rows, columns, onRowDoubleClick, loading }: DataGridWrapperProps) {
    return (
        <Box sx={{ height: 400, width: '100%', mt: 2 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id || Math.random().toString(36).substr(2, 9)}
                onRowDoubleClick={onRowDoubleClick}
                loading={loading}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20, 50]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                density="compact" // Closer to MiPlatform density
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#f0f0f0',
                        fontWeight: 'bold',
                    }
                }}
            />
        </Box>
    );
}
