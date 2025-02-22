import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container, Link, Select, MenuItem, useMediaQuery } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useDispatch } from "react-redux";
import { logout } from "../loginForm/authSlice";

const ProfileMenuLink = styled(Link)(({ theme, active }) => ({
    display: 'flex',
    gap: '20px',
    position: 'relative',
    textDecoration: 'none',
    color: active ? 'transparent' : 'white',
    background: active ? 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))' : 'none',
    WebkitBackgroundClip: active ? 'text' : 'none',
    WebkitTextFillColor: active ? 'transparent' : 'inherit',
    transition: 'color 0.7s ease, background 0.7s ease',
    cursor: 'pointer',
    padding: '0 20px',
    width: '100%',
    '&:hover': {
        background: 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: 'none',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-24px',
        width: '2px',
        height: '100%',
        background: 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))',
        transform: active ? 'scaleY(1)' : 'scaleY(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'top',
    },
}));

const UserProfileMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = (e, href) => {
        e.preventDefault();
        navigate(href);
    };

    const handleLogout = () => {
        dispatch(logout());
        setTimeout(() => {
            navigate('/');
        }, 0)
    };

    const profileLinks = [
        { label: 'Профиль', href: '/profileMenu', icon: <AccountCircleIcon sx={{ color: '#42204E' }} /> },
        { label: 'Избранное', href: '/favorite', icon: <BookmarkIcon sx={{ color: '#42204E' }} /> },
        { label: 'Личный счет', href: '/personalWallet', icon: <AccountBalanceWalletIcon sx={{ color: '#42204E' }} /> }
    ];

    return (
        <>

            {isMobile ? (
                <Select
                    fullWidth
                    displayEmpty
                    sx={{
                        color: 'white',
                        backgroundColor: 'transparent',
                        borderRadius: '30px',
                        padding: '0 20px',
                        position: 'relative',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '30px',
                            padding: '2px',
                            background: 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '& .MuiSvgIcon-root': { color: 'white', marginRight: '20px' },
                    }}
                    value={profileLinks.some(link => link.href === location.pathname) ? location.pathname : ""}
                    onChange={(e) => handleClick(e, e.target.value)}
                >
                    {profileLinks.map((item) => (
                        <MenuItem key={item.label} value={item.href}>
                            {item.label}
                        </MenuItem>
                    ))}
                    <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                </Select>


            ) : (
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '280px',
                        height: '250px',
                        borderRadius: '30px',
                        backgroundColor: '#1C0A22',
                        overflow: 'hidden',
                        padding: '20px'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        gap: '20px',
                        paddingBottom: '50px',
                    }}>
                        {profileLinks.map((item) => (
                            <ProfileMenuLink
                                key={item.label}
                                component='button'
                                active={location.pathname === item.href}
                                onClick={(e) => handleClick(e, item.href)}
                            >
                                {item.icon}
                                {item.label}
                            </ProfileMenuLink>
                        ))}
                    </Box>
                    <ProfileMenuLink onClick={handleLogout}>
                        <ExitToAppIcon sx={{ color: '#42204E' }} />
                        Выйти
                    </ProfileMenuLink>
                </Container>
            )}
        </>
    );
};

export default UserProfileMenu;
