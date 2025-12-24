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
    Stack
} from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import PageContainer from '../../../components/PageContainer';

// Mock Data
const mockFireAgencyData = [
    { id: 1, name: '타워팰리스', address: '서울 강남구 도곡동', status: '미연계', type: '특급', date: '2024-01-01' },
    { id: 2, name: '63빌딩', address: '서울 영등포구 여의도동', status: '연계', type: '특급', date: '2024-01-01' },
];

const mockInstituteData = [
    { id: 1, name: '타워팰리스', address: '서울 강남구 도곡동 123', match: 'X', code: 'CUST-001' },
    { id: 2, name: '63빌딩', address: '서울 영등포구 여의도동 63', match: 'O', code: 'CUST-002' },
];

const DataConnectionManagement = () => {
    const [tabValue, setTabValue] = useState('1');

    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const agencyColumns: GridColDef[] = [
        { field: 'status', headerName: '연계', width: 80 },
        { field: 'name', headerName: '대상물명', width: 150 },
        { field: 'type', headerName: '등급', width: 80 },
        { field: 'address', headerName: '주소', width: 250 },
    ];

    const instituteColumns: GridColDef[] = [
        { field: 'match', headerName: '매칭', width: 60 },
        { field: 'name', headerName: '대상물명', width: 150 },
        { field: 'address', headerName: '주소', width: 250 },
        { field: 'code', headerName: '고객번호', width: 100 },
    ];

    return (
        <PageContainer title="데이터연계관리" description="소방청 및 안전원 데이터 일치화 관리">
            <Paper sx={{ p: 2 }}>
                <Box>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tabValue} onChange={handleTabChange}>
                                <Tab label="청 기준 (소방서 데이터)" value="1" />
                                <Tab label="안전원 기준 (내부 데이터)" value="2" />
                            </Tabs>
                        </Box>

                        {/* Actions & Filters */}
                        <Box sx={{ p: 2 }}>
                            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mb: 2 }}>
                                <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
                                <Button variant="contained" color="primary" startIcon={<LinkIcon />}>연계</Button>
                                <Button variant="outlined" color="error" startIcon={<LinkOffIcon />}>연계해제</Button>
                            </Stack>

                            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid xs={12} md={3}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel>소방본부</InputLabel>
                                            <Select value="All" label="소방본부">
                                                <MenuItem value="All">전체</MenuItem>
                                                <MenuItem value="Seoul">서울본부</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel>소방서</InputLabel>
                                            <Select value="All" label="소방서">
                                                <MenuItem value="All">전체</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <TextField fullWidth label="검색어 (대상물명)" size="small" />
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <TextField fullWidth label="매칭 상태" size="small" select defaultValue="All">
                                            <MenuItem value="All">전체</MenuItem>
                                            <MenuItem value="Linked">연계</MenuItem>
                                            <MenuItem value="Unlinked">미연계</MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>

                        <TabPanel value="1" sx={{ p: 0 }}>
                            <Grid container spacing={2}>
                                {/* Left: Agency Data */}
                                <Grid xs={12} md={6}>
                                    <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: 'secondary.light', p: 1, borderRadius: 1 }}>
                                        소방청 (소방민원정보시스템) 데이터
                                    </Typography>
                                    <div style={{ height: 600, width: '100%' }}>
                                        <DataGrid
                                            rows={mockFireAgencyData}
                                            columns={agencyColumns}
                                            checkboxSelection
                                            density="compact"
                                        />
                                    </div>
                                </Grid>

                                {/* Right: Institute Data */}
                                <Grid xs={12} md={6}>
                                    <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: 'primary.light', p: 1, borderRadius: 1, color: 'white' }}>
                                        한국소방안전원 (교육종합시스템) 데이터
                                    </Typography>
                                    <div style={{ height: 600, width: '100%' }}>
                                        <DataGrid
                                            rows={mockInstituteData}
                                            columns={instituteColumns}
                                            checkboxSelection
                                            density="compact"
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel value="2">
                            <Typography>안전원 기준 매칭 화면 (청 기준과 유사한 레이아웃)</Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Paper>
        </PageContainer>
    );
};

export default DataConnectionManagement;
