import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Button, Stack } from '@mui/material';
import type { EducationPassInfo } from '../types';

const columns: GridColDef[] = [
    { field: 'EPYEAR', headerName: '년도', width: 60 },
    { field: 'ESSTUDENT', headerName: '교육', width: 80 },
    { field: 'EPSUCCESSIONGUBUN', headerName: '구분', width: 80 },
    { field: 'EDUTYPE', headerName: '유형', width: 100 },
    { field: 'EPPASSDATE', headerName: '교육일자', width: 100 },
    { field: 'EPPERSONNM', headerName: '성명', width: 80 },
    { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
    { field: 'EPPERSONKEY', headerName: '개인식별번호', width: 120 },
    { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 80 },
];

export default function EduInfoTab() {
    const rows: EducationPassInfo[] = [];

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Button variant="outlined" size="small">교육안내문 발행이력</Button>
                <Button variant="outlined" size="small">교육안내문 출력</Button>
                <Button variant="outlined" size="small">교육통지서 출력</Button>
            </Stack>
            <Box sx={{ height: 300 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.EPPERSONKEY + row.EPPASSDATE}
                    hideFooter
                />
            </Box>
        </Box>
    );
}
