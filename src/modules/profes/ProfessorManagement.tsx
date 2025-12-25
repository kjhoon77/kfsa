import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Tabs,
    Tab,
    Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';

const columns: GridColDef[] = [
    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
    { field: 'pfTeam', headerName: '부서/지부', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'pfNm', headerName: '성명', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'jikRyul', headerName: '직위', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'pfGubun', headerName: '구분', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'pfEDate', headerName: '교수임용일', width: 120, align: 'center', headerAlign: 'center' },
    { field: 'pfRemark', headerName: '비고', width: 250, headerAlign: 'center' },
];

const rows = [
    { id: 1, pfTeam: '교육팀', pfNm: '이교수', jikRyul: '부장', pfGubun: '전임', pfEDate: '2010-03-01', pfRemark: '' },
    { id: 2, pfTeam: '서울지부', pfNm: '박강사', jikRyul: '과장', pfGubun: '겸임', pfEDate: '2015-09-01', pfRemark: '외부 초빙' },
];

const ProfessorManagement = () => {
    const [branch, setBranch] = useState('ALL');
    const [profType, setProfType] = useState('ALL');
    const [tabValue, setTabValue] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <PageContainer title="안전원교수관리" description="교수진 정보 및 자격 관리">
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
                <Button variant="outlined" startIcon={<PrintIcon />}>
                    출력
                </Button>
            </Box>

            {/* Search Area */}
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, mb: 2, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel>부서/지부</InputLabel>
                            <Select
                                value={branch}
                                label="부서/지부"
                                onChange={(e) => setBranch(e.target.value)}
                            >
                                <MenuItem value="ALL">전체</MenuItem>
                                <MenuItem value="EDU">교육팀</MenuItem>
                                <MenuItem value="SEOUL">서울지부</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel>교수구분</InputLabel>
                            <Select
                                value={profType}
                                label="교수구분"
                                onChange={(e) => setProfType(e.target.value)}
                            >
                                <MenuItem value="ALL">전체</MenuItem>
                                <MenuItem value="FULL">전임</MenuItem>
                                <MenuItem value="PART">겸임</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField
                            fullWidth
                            label="성명"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Main Data Grid */}
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
                    <Tab label="기본정보" />
                    <Tab label="자격현황" />
                    <Tab label="학력사항" />
                    <Tab label="경력사항" />
                    <Tab label="강의과목" />
                </Tabs>
                <Box sx={{ p: 3, minHeight: 300 }}>
                    {tabValue === 0 && (
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="사번" size="small" defaultValue="2010001" disabled />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="성명" size="small" defaultValue="이교수" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="직위" size="small" defaultValue="부장" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>교수구분</InputLabel>
                                    <Select label="교수구분" defaultValue="FULL">
                                        <MenuItem value="FULL">전임</MenuItem>
                                        <MenuItem value="PART">겸임</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="부서/지부" size="small" defaultValue="교육팀" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="교수임용일" size="small" defaultValue="2010-03-01" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="전임상세" size="small" defaultValue="교수" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="강의전담" size="small" defaultValue="" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 3 }}>
                                <TextField fullWidth label="지정일" size="small" defaultValue="" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField fullWidth label="비고" multiline rows={2} size="small" />
                            </Grid>
                        </Grid>
                    )}
                    {tabValue === 1 && (
                        <Box sx={{ height: 250, width: '100%' }}>
                            <DataGrid
                                density="compact"
                                columns={[
                                    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
                                    { field: 'date', headerName: '취득일자', width: 120, align: 'center', headerAlign: 'center' },
                                    { field: 'name', headerName: '자격증명', width: 250 },
                                    { field: 'office', headerName: '발행처', width: 200 },
                                    { field: 'hide', headerName: '감추기', width: 80, align: 'center', headerAlign: 'center', type: 'boolean' },
                                ]}
                                rows={[
                                    { id: 1, date: '2005-05-20', name: '소방시설관리사', office: '소방청', hide: false },
                                    { id: 2, date: '2008-11-15', name: '위험물기능장', office: '한국산업인력공단', hide: false },
                                ]}
                                hideFooter
                            />
                        </Box>
                    )}
                    {tabValue === 2 && (
                        <Box sx={{ height: 250, width: '100%' }}>
                            <DataGrid
                                density="compact"
                                columns={[
                                    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
                                    { field: 'school', headerName: '학교명', width: 200 },
                                    { field: 'major', headerName: '전공', width: 200 },
                                    { field: 'degree', headerName: '학위', width: 100, align: 'center', headerAlign: 'center' },
                                    { field: 'gradDate', headerName: '졸업년월', width: 120, align: 'center', headerAlign: 'center' },
                                ]}
                                rows={[
                                    { id: 1, school: '한국대학교', major: '소방방재학과', degree: '학사', gradDate: '2000-02' },
                                    { id: 2, school: '서울대학원', major: '안전공학', degree: '석사', gradDate: '2002-02' },
                                ]}
                                hideFooter
                            />
                        </Box>
                    )}
                    {tabValue === 3 && (
                        // 논문 및 연구실적 + 경력, 여기서는 논문 위주로 구현 (S04)
                        <Box sx={{ height: 250, width: '100%' }}>
                            <DataGrid
                                density="compact"
                                columns={[
                                    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
                                    { field: 'field', headerName: '연구분야', width: 150 },
                                    { field: 'date', headerName: '게재일자', width: 120, align: 'center', headerAlign: 'center' },
                                    { field: 'title', headerName: '논문명', width: 300 },
                                    { field: 'journal', headerName: '게재지명', width: 200 },
                                ]}
                                rows={[
                                    { id: 1, field: '화재역학', date: '2018-06-30', title: '고층 건물 화재 시 연기 유동 해석', journal: '한국화재소방학회지' },
                                ]}
                                hideFooter
                            />
                        </Box>
                    )}
                    {tabValue === 4 && (
                        // 교육훈련 (S05)
                        <Box sx={{ height: 250, width: '100%' }}>
                            <DataGrid
                                density="compact"
                                columns={[
                                    { field: 'id', headerName: '순번', width: 60, align: 'center', headerAlign: 'center' },
                                    { field: 'term', headerName: '교육기간', width: 200, align: 'center', headerAlign: 'center' },
                                    { field: 'content', headerName: '교육내용', width: 300 },
                                    { field: 'agency', headerName: '교육기관', width: 200 },
                                ]}
                                rows={[
                                    { id: 1, term: '2023.01.05 ~ 2023.01.07', content: '최신 소방 기술 동향', agency: '중앙소방학교' },
                                ]}
                                hideFooter
                            />
                        </Box>
                    )}
                </Box>
            </Paper>

        </PageContainer>
    );
};

export default ProfessorManagement;
