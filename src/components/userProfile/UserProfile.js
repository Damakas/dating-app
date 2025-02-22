import React from 'react';
import { Box, Container } from '@mui/material';
import UserProfileMenu from './UserProfileMenu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Container maxWidth="lg" sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '20px',
            padding: '20px '
        }}>
            <UserProfileMenu />
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>
        </Container>
    );
};

export default Layout;