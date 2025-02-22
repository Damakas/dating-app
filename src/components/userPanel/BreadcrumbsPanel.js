import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icons/hamburger.svg'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const BreadCrumbLink = styled(Link)(({ theme, active }) => ({
    position: 'relative',
    textDecoration: 'none',
    marginLeft: '50px',
    color: active ? 'transparent' : 'white',
    background: active ? 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))' : 'none',
    WebkitBackgroundClip: active ? 'text' : 'none',
    WebkitTextFillColor: active ? 'transparent' : 'inherit',
    transition: 'color 0.7s ease, background 0.7s ease',
    cursor: 'pointer',
    '&:hover': {
        color: 'transparent',
        background: 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: 'none',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -40,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))',
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'left',
    },

}));

const BreadcrumbsPanel = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        navigate(href);
    }

    const breadcrumbs = [
        { label: 'Анкеты', href: '/datingProfiles' },
        { label: 'Сообщения', href: '/messages' },
        { label: 'Подписки', href: '/tariffs' },
    ];

    return (
        <Box>
            {/* BTN small screens*/}

            <Box sx={{ display: { xs: 'block', md: 'block', lg: 'none' }, }}>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                >
                    {/* <MenuIcon /> */}

                    <HamburgerIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    variant='temporary'
                    sx={{

                        '& .MuiDrawer-paper': {
                            width: '180px',
                            height: '170px',
                            backgroundColor: '#2D1436',
                            color: '#FFFFFF',
                            marginTop: '50px'
                        },
                    }}
                >
                    <Box
                        role="presentation"
                        onClick={handleDrawerToggle}
                        onKeyDown={handleDrawerToggle}
                    >
                        <List>
                            {breadcrumbs.map((item) => (
                                <ListItem key={item.label} disablePadding >
                                    <ListItemButton
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                        sx={{
                                            background: location.pathname === item.href ?
                                                'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))' :
                                                'none',
                                            WebkitBackgroundClip: location.pathname === item.href ? 'text' : 'none',
                                            WebkitTextFillColor: location.pathname === item.href ? 'transparent' : 'inherit',
                                        }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>

            {/* BreadCrumbs large screens */}
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Breadcrumbs aria-label="breadcrumb" separator="">
                    {breadcrumbs.map((item) => (
                        <BreadCrumbLink
                            key={item.label}
                            component='button'
                            onClick={(e) => handleLinkClick(e, item.href)}
                            active={location.pathname === item.href}
                        >
                            {item.label}
                        </BreadCrumbLink>
                    ))}
                </Breadcrumbs>
            </Box>
        </Box>
    );
};

export default BreadcrumbsPanel;
