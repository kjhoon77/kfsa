import React, { useState } from 'react';
import {
    Box,
    Paper,
    Tabs,
    Tab
} from '@mui/material';
import PageContainer from '../../components/PageContainer';
import ItemCodeTab from './tabs/ItemCodeTab';
import EduItemTransactionTab from './tabs/EduItemTransactionTab';
// import EduItemStatusTab from './tabs/EduItemStatusTab'; // Will use later or for Status Tab
import EquipmentManagementTab from './tabs/EquipmentManagementTab';

const ItemManagement = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <PageContainer title="품목 관리" description="교육 교보재, 제서식, 기자재 관리">
            <Paper sx={{ mb: 2 }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="품목코드관리" />
                    <Tab label="교재수불관리" />
                    <Tab label="제서식수불관리" />
                    <Tab label="교육기자재관리" />
                </Tabs>
            </Paper>

            <Box sx={{ mt: 2 }}>
                {tabValue === 0 && <ItemCodeTab />}
                {tabValue === 1 && (
                    <Box>
                        {/* Sub-tabs for Transaction vs Status can be handled here or just stack them */}
                        <Tabs value={0} sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}>
                            <Tab label="수불관리" />
                            <Tab label="현황조회" />
                        </Tabs>
                        {/* For simplicity in this demo, I will just show Transaction Tab here. 
                            Ideally, we might want sub-navigation.
                            Let's assume Tab 1 '교재수불관리' includes both Transaction and Status sub-features? 
                            Or let's just put Transaction here and let user toggle mode?
                            Actually, KEMS likely splits them. Let's start with Transaction.
                        */}
                        <EduItemTransactionTab type="EDU" />
                    </Box>
                )}
                {tabValue === 2 && <EduItemTransactionTab type="FORM" />}
                {tabValue === 3 && <EquipmentManagementTab />}
            </Box>
        </PageContainer>
    );
};

export default ItemManagement;
