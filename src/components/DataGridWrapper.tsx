import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface DataGridWrapperProps {
    rows: GridRowsProp;
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
                        paginationModel: { page: 0, pageSize: 15 },
                    },
                }}
                pageSizeOptions={[10, 15, 20, 50, 100]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                density="compact"
                sx={{
                    border: 0,
                    // Header Styling
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#f5f5f5',
                        borderBottom: '1px solid #e0e0e0',
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        color: '#333',
                    },
                    '& .MuiDataGrid-columnHeader:focus': {
                        outline: 'none',
                    },
                    // Row Styling
                    '& .MuiDataGrid-row': {
                        '&:nth-of-type(odd)': {
                            backgroundColor: '#fafafa', // Light stripe
                        },
                        '&:hover': {
                            backgroundColor: '#e3f2fd', // Hover color
                        },
                        cursor: 'pointer',
                    },
                    // Cell Styling
                    '& .MuiDataGrid-cell': {
                        borderBottom: '1px solid #f0f0f0',
                        '&:focus': {
                            outline: 'none',
                        },
                    },
                    // Footer
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: '1px solid #e0e0e0',
                        backgroundColor: '#f5f5f5',
                    },
                }}
            />
        </Box>
    );
}
