import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface MultiDataGridWrapperProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    onRowDoubleClick?: (params: GridRowParams) => void;
    loading?: boolean;
    height?: number | string;
    pageSize?: number;
    rowHeight?: number;
    headerHeight?: number;
    hideFooter?: boolean;
}

export default function MultiDataGridWrapper({
    rows,
    columns,
    onRowDoubleClick,
    loading,
    height = 400,
    pageSize = 100,
    rowHeight,
    headerHeight,
    hideFooter
}: MultiDataGridWrapperProps) {
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
                // Removed density="compact" to allow custom heights
                rowHeight={rowHeight}
                columnHeaderHeight={headerHeight}
                hideFooter={hideFooter}
                getRowHeight={rowHeight ? () => rowHeight : undefined} // Force explicit row height if provided
                sx={{
                    border: '1px solid #e0e0e0',
                    // Header Styling
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#f0f0f0 !important',
                        borderBottom: '1px solid #e0e0e0',
                        fontSize: '11px',
                        color: '#333',
                        // Ensure header text wraps if needed
                        '& .MuiDataGrid-columnHeaderTitle': {
                            whiteSpace: 'normal',
                            lineHeight: 'normal',
                            textAlign: 'center',
                        }
                    },
                    '& .MuiDataGrid-columnHeader': {
                        borderRight: '1px solid #e0e0e0',
                        fontWeight: 'bold',
                        '&:last-child': { borderRight: 'none' },
                        '&:focus': { outline: 'none' },
                        height: 'auto !important', // Allow auto height expansion
                    },
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                        lineHeight: '1.2',
                    },
                    // Row Styling
                    '& .MuiDataGrid-row': {
                        '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                        '&:hover': { backgroundColor: '#e3f2fd' },
                        cursor: 'pointer',
                    },
                    // Cell Styling
                    '& .MuiDataGrid-cell': {
                        borderRight: '1px solid #f0f0f0',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '11px',
                        whiteSpace: 'normal', // Allow wrapping in standard cells
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', // Center content by default for multi-grid
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
