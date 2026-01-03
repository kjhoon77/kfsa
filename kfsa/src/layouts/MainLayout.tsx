import React, { useState } from 'react';
import {
    Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Avatar,
    Menu, MenuItem, ListItemIcon
} from '@mui/material';
import {
    Business as BusinessIcon,
    Person as PersonIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';

import TopMenu from '../components/TopMenu';

interface Props {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    console.log('MainLayout rendering');
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <CssBaseline />

            {/* Top AppBar */}
            <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
                <Toolbar>
                    <BusinessIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 4 }}>
                        KFSI KEMS
                    </Typography>

                    {/* Top Menu Component */}
                    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <TopMenu />
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>

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

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    backgroundColor: '#f5f5f5',
                    p: 2
                }}
            >
                {children}
            </Box>


        </Box >
    );
}
