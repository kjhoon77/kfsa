import React, { useState } from 'react';
import {
    Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Collapse, Toolbar, Typography
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Settings as SettingsIcon,
    ExpandLess,
    ExpandMore,
    SettingsInputComponent as EnvIcon,
    Inventory as ItemIcon,
    Group as MemIcon,
    School as ProfesIcon,
    Assessment as ReportIcon,
    Add as AddIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 260;

interface MenuItemData {
    id: string;
    title: string;
    icon?: React.ReactNode;
    path?: string;
    children?: MenuItemData[];
}

const menuItems: MenuItemData[] = [
    { id: 'dashboard', title: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    {
        id: 'cust',
        title: '고객관리',
        icon: <PeopleIcon />,
        children: [
            { id: 'agent-search', title: '업무대행업체 검색 (Pilot)', path: '/cust/agent-info-list' },
            { id: 'cust-mgmt', title: '고객정보 관리', path: '/cust/customer-management' },
            { id: 'edu-jubsu-mgmt', title: '실무교육접수관리', path: '/cust/edu-jubsu-management' },
            { id: 'cust-fee-mgmt', title: '회비/교육비 정보관리', path: '/cust/customer-fee-management' },
            { id: 'data-conn-mgmt', title: '데이터연계관리', path: '/cust/data-connection-management' },
        ]
    },
    {
        id: 'mem',
        title: '회원관리',
        icon: <MemIcon />,
        children: [
            { id: 'mem-mgmt', title: '회원 정보 관리', path: '/mem/management' }
        ]
    },
    {
        id: 'profes',
        title: '교수관리',
        icon: <ProfesIcon />,
        children: [
            { id: 'profes-mgmt', title: '교수 정보 관리', path: '/profes/management' }
        ]
    },
    {
        id: 'item',
        title: '품목관리',
        icon: <ItemIcon />,
        children: [
            { id: 'item-mgmt', title: '품목 관리', path: '/item/management' }
        ]
    },
    {
        id: 'env',
        title: '환경관리',
        icon: <EnvIcon />,
        children: [
            { id: 'env-mgmt', title: '환경 관리', path: '/env/management' }
        ]
    },
    {
        id: 'report',
        title: '리포트',
        icon: <ReportIcon />,
        children: [
            { id: 'report-mgmt', title: '리포트 목록', path: '/report/management' }
        ]
    },
    {
        id: 'appoint',
        title: '선임신고',
        icon: <AddIcon />,
        children: [
            { id: 'appoint-mgmt', title: '선임신고 관리', path: '/appoint/management' }
        ]
    },
    {
        id: 'posetc',
        title: 'POS/기타',
        icon: <EnvIcon />,
        children: [
            { id: 'posetc-mgmt', title: 'POS/기타 관리', path: '/posetc/management' }
        ]
    },
    {
        id: 'otherincome',
        title: '기타수입',
        icon: <EnvIcon />,
        children: [
            { id: 'otherincome-mgmt', title: '기타수입 관리', path: '/otherincome/management' }
        ]
    },
    {
        id: 'localsvc',
        title: '로컬서비스',
        icon: <SettingsIcon />,
        children: [
            { id: 'localsvc-mgmt', title: '로컬서비스 관리', path: '/localsvc/management' }
        ]
    },
    {
        id: 'training',
        title: '교육관리',
        icon: <ProfesIcon />,
        children: [
            { id: 'training-mgmt', title: '교육 관리', path: '/training/management' }
        ]
    },
    {
        id: 'spcledu',
        title: '특수교육',
        icon: <ProfesIcon />,
        children: [
            { id: 'spcledu-mgmt', title: '특수교육 관리', path: '/spcledu/management' }
        ]
    },
    {
        id: 'report30',
        title: '리포트3.0',
        icon: <ReportIcon />,
        children: [
            { id: 'report30-mgmt', title: '리포트3.0 관리', path: '/report30/management' }
        ]
    },
    {
        id: 'sys',
        title: '시스템관리',
        icon: <SettingsIcon />,
        children: [
            { id: 'sys-mgmt', title: '메뉴 관리', path: '/sys/management' },
            { id: 'sys-code', title: '공통코드 관리', path: '/sys/code' }
        ]
    }
];

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({
        'cust': true,
        'mem': false,
        'profes': false,
        'item': false,
        'env': false,
        'report': false,
        'appoint': false,
        'posetc': false,
        'otherincome': false,
        'localsvc': false,
        'training': false,
        'spcledu': false,
        'report30': false,
        'sys': false
    });

    const handleSubMenuClick = (id: string) => {
        setOpenSubMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleNavigate = (path?: string) => {
        if (path) navigate(path);
    };

    const renderMenu = (items: MenuItemData[], depth = 0) => {
        return items.map((item) => (
            <React.Fragment key={item.id}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 34,
                            py: 0.5,
                            justifyContent: 'initial',
                            px: 2.5,
                            pl: 2.5 + depth * 2,
                            backgroundColor: item.path === location.pathname ? 'rgba(0, 0, 0, 0.08)' : 'transparent'
                        }}
                        onClick={() => item.children ? handleSubMenuClick(item.id) : handleNavigate(item.path)}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 3,
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon || <Box sx={{ width: 24 }} />}
                        </ListItemIcon>
                        <ListItemText primary={item.title} primaryTypographyProps={{ fontSize: '13px' }} />
                        {item.children && (openSubMenus[item.id] ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                </ListItem>
                {item.children && (
                    <Collapse in={openSubMenus[item.id]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {renderMenu(item.children, depth + 1)}
                        </List>
                    </Collapse>
                )}
            </React.Fragment>
        ));
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar /> {/* Spacer for AppBar */}
            <Box sx={{ overflow: 'auto' }}>
                <Box sx={{ p: 2, textAlign: 'center', borderBottom: 1, borderColor: 'divider' }}>
                    <Typography variant="subtitle1" fontWeight="bold">관리자 님</Typography>
                    <Typography variant="caption" color="textSecondary">마지막 접속: 2024-12-24</Typography>
                </Box>
                <List>
                    {renderMenu(menuItems)}
                </List>
            </Box>
        </Drawer>
    );
}
