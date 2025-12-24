import React, { useState } from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Tabs,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Stack
} from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import PageContainer from '../../../components/PageContainer';

// Mock Data
const mockEduApplications = [
    { id: 1, branch: '서울', year: '2024', course: '소방안전관리자 1급', round: '1', jubsuNo: '240001', name: '홍길동', status: '접수완료', date: '2024-01-15' },
    { id: 2, branch: '경기', year: '2024', course: '소방안전관리자 2급', round: '2', jubsuNo: '240002', name: '김철수', status: '이수', date: '2024-01-20' },
];

const mockHistory = [
    { id: 1, date: '2024-01-15', type: '신규접수', details: '인터넷 접수', worker: '시스템' },
    { id: 2, date: '2024-01-16', type: '정보변경', details: '연락처 수정', worker: '관리자' },
];

const mockPayments = [
    { id: 1, type: '교육비', amount: 50000, status: '수납', date: '2024-01-15', method: '카드' },
];

const EduJubsuManagement = () => {
    const [tabValue, setTabValue] = useState('1');
    const [searchBranch, setSearchBranch] = useState('ALL');

    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: '순번', width: 70 },
        { field: 'branch', headerName: '지부', width: 100 },
        { field: 'year', headerName: '년도', width: 80 },
        { field: 'course', headerName: '과정명', width: 200 },
        { field: 'round', headerName: '회차', width: 80 },
        { field: 'jubsuNo', headerName: '접수번호', width: 120 },
        { field: 'name', headerName: '성명', width: 120 },
        { field: 'status', headerName: '상태', width: 100 },
        { field: 'date', headerName: '접수일자', width: 120 },
    ];

    const historyColumns: GridColDef[] = [
        { field: 'date', headerName: '일자', width: 120 },
        { field: 'type', headerName: '구분', width: 120 },
        { field: 'details', headerName: '내용', width: 300 },
        { field: 'worker', headerName: '처리자', width: 120 },
    ];

    return (
        <PageContainer title="실무교육접수관리" description="실무교육 접수 및 이력 관리">
            <Paper sx={{ p: 2 }}>
                <Box>
                    {/* Actions */}
                    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mb: 2 }}>
                        <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
                        <Button variant="contained" color="success" startIcon={<SaveIcon />}>저장</Button>
                        <Button variant="outlined" startIcon={<PrintIcon />}>참가원출력</Button>
                    </Stack>

                    {/* Search Area */}
                    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid xs={12} md={3}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>지부</InputLabel>
                                    <Select
                                        value={searchBranch}
                                        label="지부"
                                        onChange={(e) => setSearchBranch(e.target.value)}
                                    >
                                        <MenuItem value="ALL">전체</MenuItem>
                                        <MenuItem value="Seoul">서울</MenuItem>
                                        <MenuItem value="Gyeonggi">경기</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={2}>
                                <TextField fullWidth label="년도" size="small" defaultValue="2024" />
                            </Grid>
                            <Grid xs={12} md={2}>
                                <TextField fullWidth label="회차" size="small" />
                            </Grid>
                            <Grid xs={12} md={3}>
                                <TextField fullWidth label="성명/접수번호" size="small" />
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Main Layout: Master List & Details */}
                    <Grid container spacing={2}>
                        {/* Left: Applicant List */}
                        <Grid xs={12} md={5}>
                            <Typography variant="subtitle1" gutterBottom sx={{ mt: 1 }}>접수 목록</Typography>
                            <div style={{ height: 600, width: '100%' }}>
                                <DataGrid
                                    rows={mockEduApplications}
                                    columns={columns}
                                    initialState={{
                                        pagination: { paginationModel: { pageSize: 10 } },
                                    }}
                                    pageSizeOptions={[10, 20]}
                                    checkboxSelection
                                    density="compact"
                                />
                            </div>
                        </Grid>

                        {/* Right: Details & Tabs */}
                        <Grid xs={12} md={7}>
                            <Typography variant="subtitle1" gutterBottom sx={{ mt: 1 }}>상세 정보</Typography>
                            <TabContext value={tabValue}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={tabValue} onChange={handleTabChange}>
                                        <Tab label="접수자정보" value="1" />
                                        <Tab label="접수이력" value="2" />
                                        <Tab label="수납내역" value="3" />
                                    </Tabs>
                                </Box>

                                {/* Tab 1: Applicant Info */}
                                <TabPanel value="1" sx={{ p: 2 }}>
                                    <Grid container spacing={2}>
                                        <Grid xs={12} md={6}>
                                            <TextField fullWidth label="접수번호" size="small" defaultValue="240001" InputProps={{ readOnly: true }} />
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <TextField fullWidth label="성명" size="small" defaultValue="홍길동" />
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <TextField fullWidth label="생년월일" size="small" defaultValue="800101-1******" />
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <TextField fullWidth label="휴대폰" size="small" defaultValue="010-1234-5678" />
                                        </Grid>
                                        <Grid xs={12}>
                                            <TextField fullWidth label="주소" size="small" defaultValue="서울시 영등포구..." />
                                        </Grid>
                                        <Grid xs={12}>
                                            <TextField fullWidth label="상세주소" size="small" defaultValue="101호" />
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <TextField fullWidth label="이메일" size="small" defaultValue="hong@example.com" />
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <FormControl fullWidth size="small">
                                                <InputLabel>이수여부</InputLabel>
                                                <Select value="Y" label="이수여부">
                                                    <MenuItem value="Y">이수</MenuItem>
                                                    <MenuItem value="N">미이수</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid xs={12}>
                                            <TextField fullWidth label="비고" multiline rows={3} size="small" />
                                        </Grid>
                                    </Grid>
                                </TabPanel>

                                {/* Tab 2: History */}
                                <TabPanel value="2" sx={{ p: 0, pt: 2 }}>
                                    <div style={{ height: 400, width: '100%' }}>
                                        <DataGrid
                                            rows={mockHistory}
                                            columns={historyColumns}
                                            hideFooter
                                            density="compact"
                                        />
                                    </div>
                                </TabPanel>

                                {/* Tab 3: Payment */}
                                <TabPanel value="3" sx={{ p: 0, pt: 2 }}>
                                    <TableContainer component={Paper} variant="outlined">
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>구분</TableCell>
                                                    <TableCell>금액</TableCell>
                                                    <TableCell>상태</TableCell>
                                                    <TableCell>수납일자</TableCell>
                                                    <TableCell>방법</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {mockPayments.map((row) => (
                                                    <TableRow key={row.id}>
                                                        <TableCell>{row.type}</TableCell>
                                                        <TableCell>{row.amount.toLocaleString()}</TableCell>
                                                        <TableCell>{row.status}</TableCell>
                                                        <TableCell>{row.date}</TableCell>
                                                        <TableCell>{row.method}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TabPanel>
                            </TabContext>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </PageContainer>
    );
};

export default EduJubsuManagement;
