import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { menuData } from '../modules/menuData';

export default function TopMenu() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentMenu, setCurrentMenu] = useState<any[]>([]);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement> | null, children: any[]) => {
        console.log('handleMenuClick called', { eventExists: !!event, childrenCount: children?.length });
        if (children && children.length > 0) {
            if (event) {
                console.log('Opening menu anchor');
                setAnchorEl(event.currentTarget);
            }
            setCurrentMenu(children);
        } else {
            console.warn('handleMenuClick called with no children', children);
        }
    };

    const handleClose = () => {
        console.log('Closing menu');
        setAnchorEl(null);
        setCurrentMenu([]);
    };

    const handleNavigate = (path: string) => {
        console.log('Navigating to:', path);
        navigate(path);
        handleClose();
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', alignItems: 'center' }}>
            {menuData.map((item, index) => (
                <Button
                    key={index}
                    color="inherit"
                    onClick={(e) => handleMenuClick(e, item.children)}
                    sx={{ whiteSpace: 'nowrap' }}
                >
                    {item.title}
                </Button>
            ))}

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {currentMenu.map((child, idx) => (
                    <MenuItem
                        key={idx}
                        onClick={() => child.children ? handleMenuClick(null as any, child.children) : handleNavigate(child.path)}
                    >
                        {child.title}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
