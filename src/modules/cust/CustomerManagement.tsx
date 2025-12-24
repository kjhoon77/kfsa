import { useState } from 'react';
import {
    Box, Typography, Paper, Tab, Button, Stack, TextField, Grid
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import MainLayout from '../../layouts/MainLayout'; // Removed due to layout nesting in App.tsx
import PageContainer from '../../components/PageContainer';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ManagerInfoTab from './tabs/ManagerInfoTab';
import BuildingInfoTab from './tabs/BuildingInfoTab';
import FeeInfoTab from './tabs/FeeInfoTab';

export default function CustomerManagement() {
    const [tabValue, setTabValue] = useState('1');

    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const handleSave = () => {
        alert('저장되었습니다.');
    };

    return (
        <PageContainer
            title="고객정보 관리"
            breadcrumbs={[{ label: '고객관리' }, { label: '고객정보 관리' }]}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<SearchIcon />}>조회</Button>
                    <Button variant="outlined" startIcon={<AddIcon />}>신규</Button>
                    <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSave}>저장</Button>
                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>삭제</Button>
                </Stack>
            </Box>

            {/* Search Condition Area */}
            <Paper variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: '#f9f9f9' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField label="고객명/상호" variant="outlined" size="small" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextField label="사업자번호" variant="outlined" size="small" fullWidth />
                    </Grid>
                </Grid>
            </Paper>

            {/* Main Content with Tabs - Set to flex grow to fill space */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="customer management tabs">
                            <Tab label="기본정보" value="1" />
                            <Tab label="관리자정보" value="2" />
                            <Tab label="대상물정보" value="3" />
                            <Tab label="회비정보" value="4" />
                        </TabList>
                    </Box>

                    {/* Tab Panels need to scroll if content is long, so we make them scrollable container */}
                    <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
                        <TabPanel value="1" sx={{ p: 0 }}>
                            <Typography variant="h6" gutterBottom color="primary">기본정보</Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="고객번호" fullWidth size="small" disabled value="AUTO-GENERATED" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="고객명(상호)" fullWidth size="small" required />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="사업자등록번호" fullWidth size="small" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="대표자명" fullWidth size="small" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="주소" fullWidth size="small" />
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2" sx={{ p: 0 }}>
                            <ManagerInfoTab />
                        </TabPanel>
                        <TabPanel value="3" sx={{ p: 0 }}>
                            <BuildingInfoTab />
                        </TabPanel>
                        <TabPanel value="4" sx={{ p: 0 }}>
                            <FeeInfoTab />
                        </TabPanel>
                    </Box>
                </TabContext>
            </Box>
        </PageContainer>
    );
}
