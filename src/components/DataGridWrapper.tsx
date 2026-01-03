import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface DataGridWrapperProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    onRowDoubleClick?: (params: GridRowParams) => void;
    loading?: boolean;
    height?: number | string;
    pageSize?: number;
}

export default function DataGridWrapper({ rows, columns, onRowDoubleClick, loading, height = 400, pageSize = 100 }: DataGridWrapperProps) {
    return (
        <Box sx={{ height: height, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id || Math.random().toString(36).substr(2, 9)}
                onRowDoubleClick={onRowDoubleClick}
                loading={loading}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: pageSize },
                    },
                }}
                pageSizeOptions={[100, 500, 1000, 10000]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                density="compact"
                sx={{
                    border: '1px solid #e0e0e0',
                    // Header Styling
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#f0f0f0 !important',
                        borderBottom: '1px solid #e0e0e0',
                        fontSize: '0.875rem',
                        color: '#333',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        borderRight: '1px solid #e0e0e0', // Separator between headers
                        fontWeight: 'bold',
                        '&:last-child': { borderRight: 'none' }, // No border on last header
                        '&:focus': { outline: 'none' },
                    },
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                    },
                    // Row Styling
                    '& .MuiDataGrid-row': {
                        '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                        '&:hover': { backgroundColor: '#e3f2fd' },
                        cursor: 'pointer',
                    },
                    // Cell Styling
                    '& .MuiDataGrid-cell': {
                        borderRight: '1px solid #f0f0f0', // Separator between cells
                        borderBottom: '1px solid #f0f0f0',
                        '&:last-child': { borderRight: 'none' },
                        '&:focus': { outline: 'none' },
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
