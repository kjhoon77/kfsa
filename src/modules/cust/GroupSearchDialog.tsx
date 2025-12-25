import { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

interface GroupSearchDialogProps {
    open: boolean;
    onClose: () => void;
    onSelect: (selectedGroup: any) => void;
}

// Mock Data for Group Search
const MOCK_GROUPS = [
    { id: 1, CMGNO: 1, AGNM: '한국소방안전원', BNM: '안전원빌딩', BADDR1: '서울 영등포구' },
    { id: 2, CMGNO: 2, AGNM: '삼성전자', BNM: '삼성전자 서초사옥', BADDR1: '서울 서초구' },
    { id: 3, CMGNO: 10, AGNM: 'LG전자', BNM: 'LG트윈타워', BADDR1: '서울 영등포구' },
];

export default function GroupSearchDialog({ open, onClose, onSelect }: GroupSearchDialogProps) {
    const [keyword, setKeyword] = useState('');
    const [rows, setRows] = useState(MOCK_GROUPS);

    const columns: GridColDef[] = [
        { field: 'CMGNO', headerName: '관리번호', width: 100 },
        { field: 'AGNM', headerName: '고객명', width: 200 },
        { field: 'BNM', headerName: '대상물명', width: 200 },
        { field: 'BADDR1', headerName: '주소', width: 250 },
    ];

    const handleSearch = () => {
        // Mock Filter Logic
        const filtered = MOCK_GROUPS.filter(r =>
            r.AGNM.includes(keyword) || r.BNM.includes(keyword)
        );
        setRows(filtered);
    };

    const handleRowClick = (params: any) => {
        onSelect(params.row);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>그룹조회</DialogTitle>
            <DialogContent>
                <Box sx={{ p: 1, mb: 2, display: 'flex', gap: 1 }}>
                    <TextField
                        label="검색어 (고객명/대상물명)"
                        size="small"
                        fullWidth
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button variant="contained" onClick={handleSearch}>조회</Button>
                </Box>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        onRowClick={handleRowClick}
                        pageSizeOptions={[5, 10]}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 5 } },
                        }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>취소</Button>
            </DialogActions>
        </Dialog>
    );
}
