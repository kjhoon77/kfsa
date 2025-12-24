import React, { useState } from 'react';
import {
    Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Avatar,
    Menu, MenuItem, Drawer, ListItemIcon
} from '@mui/material';
import {
    Business as BusinessIcon,
    Menu as MenuIcon,
    Person as PersonIcon,
    Logout as LogoutIcon,
    PhoneInTalk as PhoneInTalkIcon
} from '@mui/icons-material';
import Softphone from '../modules/cti/components/Softphone';
import Sidebar from '../components/Sidebar';

interface Props {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({ 'ctiDrawer': false }); // Default closed
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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

            {/* Left Sidebar */}
            <Sidebar />

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
                variant="temporary"
                sx={{
                    '& .MuiDrawer-paper': { width: 340, boxSizing: 'border-box', mt: 8, height: 'calc(100% - 64px)' },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Softphone />
                </Box>
            </Drawer>
        </Box >
    );
}
