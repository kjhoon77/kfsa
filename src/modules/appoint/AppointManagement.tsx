import { Box, Button, Grid, TextField, Paper, Tabs, Tab, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';



const AppointManagement = () => {
    const [searchName, setSearchName] = useState('');
    const [searchBuilding, setSearchBuilding] = useState('');
    const [searchManager, setSearchManager] = useState('');
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // Columns for Master Grid (Customer/Building List)
    const columns: GridColDef[] = [
        { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
        { field: 'customerName', headerName: '고객명(상호)', width: 180 },
        { field: 'buildingName', headerName: '대상물명', width: 200 },
        { field: 'address', headerName: '주소', width: 300 },
        { field: 'managerName', headerName: '선임자명', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'status', headerName: '상태', width: 80, align: 'center', headerAlign: 'center' },
        { field: 'safetyLevel', headerName: '등급', width: 80, align: 'center', headerAlign: 'center' },
    ];

    // Mock Data for Master Grid
    const rows = [
        { id: 1, customerName: '(주)한국소방', buildingName: '한국소방 본사빌딩', address: '서울시 영등포구 여의도동 1-1', managerName: '김철수', status: '정상', safetyLevel: '1급' },
        { id: 2, customerName: '대한물산', buildingName: '대한물산 물류창고', address: '경기도 용인시 처인구 ...', managerName: '이영희', status: '정상', safetyLevel: '2급' },
        { id: 3, customerName: '미래에듀', buildingName: '미래학원', address: '서울시 강남구 역삼동 ...', managerName: '박민수', status: '정상', safetyLevel: '2급' },
        { id: 4, customerName: '스타트업허브', buildingName: '허브타워', address: '서울시 성동구 성수동 ...', managerName: '최지원', status: '휴업', safetyLevel: '1급' },
        { id: 5, customerName: '그린아파트', buildingName: '그린아파트 1단지', address: '경기도 성남시 분당구 ...', managerName: '정동수', status: '정상', safetyLevel: '특급' },
    ];

    // Mock Data for Manager History (Tab 3)
    const historyColumns: GridColDef[] = [
        { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
        { field: 'managerName', headerName: '성명', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'level', headerName: '자격등급', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'appointDate', headerName: '선임일자', width: 120, align: 'center', headerAlign: 'center' },
        { field: 'dismissDate', headerName: '해임일자', width: 120, align: 'center', headerAlign: 'center' },
        { field: 'phone', headerName: '연락처', width: 150 },
        { field: 'status', headerName: '상태', width: 80, align: 'center', headerAlign: 'center' },
    ];

    const historyRows = [
        { id: 1, managerName: '김철수', level: '1급', appointDate: '2023-01-01', dismissDate: '', phone: '010-1234-5678', status: '선임' },
        { id: 2, managerName: '홍길동', level: '1급', appointDate: '2020-05-15', dismissDate: '2022-12-31', phone: '010-9876-5432', status: '해임' },
    ];

    return (
        <PageContainer title="고객 및 선임 관리" description="고객, 대상물, 방화관리자 선임 이력 통합 관리">
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                <Button variant="contained" startIcon={<SearchIcon />}>
                    조회
                </Button>
                <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                    신규
                </Button>
                <Button variant="contained" color="success" startIcon={<SaveIcon />}>
                    저장
                </Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    삭제
                </Button>
            </Box>

            {/* Search Area */}
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, mb: 2, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField
                            fullWidth
                            label="고객명(상호)"
                            variant="outlined"
                            size="small"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField
                            fullWidth
                            label="대상물명"
                            variant="outlined"
                            size="small"
                            value={searchBuilding}
                            onChange={(e) => setSearchBuilding(e.target.value)}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField
                            fullWidth
                            label="선임자명"
                            variant="outlined"
                            size="small"
                            value={searchManager}
                            onChange={(e) => setSearchManager(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Master Data Grid */}
            <Box sx={{ height: 300, width: '100%', mb: 2 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    density="compact"
                    onRowClick={() => { }} // Handle row click to load details if needed for real app
                />
            </Box>

            {/* Bottom Tabs */}
            <Paper square sx={{ width: '100%', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                    <Tab label="고객정보" />
                    <Tab label="대상물정보" />
                    <Tab label="선임정보(이력)" />
                </Tabs>
                <Box sx={{ p: 3, minHeight: 250 }}>
                    {/* Tab 1: Customer Info */}
                    {tabValue === 0 && (
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="고객명(상호)" defaultValue="(주)한국소방" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="대표자명" defaultValue="박대표" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="사업자번호" defaultValue="123-45-67890" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="전화번호" defaultValue="02-1234-5678" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label="이메일" defaultValue="kfsa@example.com" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label="주소" defaultValue="서울시 영등포구 여의도동 ..." size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>우편물수령지</InputLabel>
                                    <Select label="우편물수령지" defaultValue="0">
                                        <MenuItem value="0">사업장</MenuItem>
                                        <MenuItem value="1">자택</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>회원여부</InputLabel>
                                    <Select label="회원여부" defaultValue="Y">
                                        <MenuItem value="Y">회원</MenuItem>
                                        <MenuItem value="N">비회원</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    )}

                    {/* Tab 2: Building Info */}
                    {tabValue === 1 && (
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="대상물명" defaultValue="한국소방 본사빌딩" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="건물용도" defaultValue="업무시설" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="연면적(㎡)" defaultValue="5000" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="안전등급" defaultValue="1급" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="관할소방서" defaultValue="영등포소방서" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <TextField fullWidth label="관서담당자" defaultValue="홍길동" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label="대상물 주소" defaultValue="서울시 영등포구 여의도동 1-1" size="small" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="제연설비설치대상" />
                            </Grid>
                        </Grid>
                    )}

                    {/* Tab 3: Manager History */}
                    {tabValue === 2 && (
                        <Box sx={{ height: 250, width: '100%' }}>
                            <DataGrid
                                rows={historyRows}
                                columns={historyColumns}
                                hideFooter
                                density="compact"
                            />
                        </Box>
                    )}
                </Box>
            </Paper>
        </PageContainer>
    );
};

export default AppointManagement;
