import React, { useState } from 'react';
import {
    Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText, Collapse, IconButton, Avatar,
    Menu, MenuItem
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Business as BusinessIcon,
    ExpandLess,
    ExpandMore,
    Menu as MenuIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
    People as PeopleIcon,
    PhoneInTalk as PhoneInTalkIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import Softphone from '../modules/cti/components/Softphone';

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
            { id: 'cust-mgmt', title: '고객정보 관리', path: '/cust/customer-management' }, // New Core Feature
        ]
    },
    {
        id: 'sys',
        title: '시스템관리',
        icon: <SettingsIcon />,
        children: [
            { id: 'sys-code', title: '공통코드 관리', path: '/sys/code' }
        ]
    }
];

interface Props {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({ 'cust': true, 'ctiDrawer': false }); // Default closed
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleSubMenuClick = (id: string) => {
        setOpenSubMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleNavigate = (path?: string) => {
        if (path) navigate(path);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const renderMenu = (items: MenuItemData[], depth = 0) => {
        return items.map((item) => (
            <React.Fragment key={item.id}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
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
                        <ListItemText primary={item.title} />
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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Top AppBar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#1976d2' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <BusinessIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        KFSI KEMS (교육종합관리시스템)
                    </Typography>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" onClick={() => setOpenSubMenus(prev => ({ ...prev, 'ctiDrawer': !prev['ctiDrawer'] }))}>
                            <PhoneInTalkIcon />
                        </IconButton>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                            <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Left Drawer */}
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

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                    minWidth: 0, // Prevent flex item from overflowing
                }}
            >
                <Toolbar /> {/* Spacer for AppBar */}
                <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {children}
                </Box>
            </Box>

            {/* Right CTI Drawer */}
            <Drawer
                anchor="right"
                open={openSubMenus['ctiDrawer']}
                onClose={() => setOpenSubMenus(prev => ({ ...prev, 'ctiDrawer': false }))}
                variant="persistent"
                sx={{
                    width: 340,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 340, boxSizing: 'border-box', mt: 8, height: 'calc(100% - 64px)' },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Softphone />
                </Box>
            </Drawer>
        </Box >
    );
}
