import React, { useState } from 'react';
import {
    Box,
    Paper,
    Tabs,
    Tab
} from '@mui/material';
import PageContainer from '../../components/PageContainer';
import ExamOrderTab from './tabs/ExamOrderTab';
import ExamJubsuTab from './tabs/ExamJubsuTab';
import ExamResultTab from './tabs/ExamResultTab';

const LocalServiceManagement = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <PageContainer title="로컬 서비스 관리" description="로컬 OMR 프로그램 데이터 연동 및 관리">
            <Paper sx={{ mb: 2 }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="시험회차관리(다운로드)" />
                    <Tab label="시험접수관리" />
                    <Tab label="성적처리결과" />
                </Tabs>
            </Paper>

            <Box sx={{ mt: 2 }}>
                {tabValue === 0 && <ExamOrderTab />}
                {tabValue === 1 && <ExamJubsuTab />}
                {tabValue === 2 && <ExamResultTab />}
            </Box>
        </PageContainer>
    );
};

export default LocalServiceManagement;
