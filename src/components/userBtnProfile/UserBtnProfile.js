import React from "react";
import { Box, Typography, Link } from "@mui/material";
import userAvatar from '../../assets/images/useravatar.png';

const UserBtnProfile = () => {

    return (
        <Link href='/profileMenu' sx={{ textDecoration: 'none' }}  >
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', }}>
                <img src={userAvatar} alt="avatar" />
                <Typography sx={{
                    color: 'white',
                    '@media (max-width: 600px)': {
                        display: 'none',
                        alignItems: 'center',
                        padding: '0 10px',
                    },
                    '&:hover': {
                        background: 'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textDecoration: 'none',
                    },
                }}>Иван Иванов</Typography>
            </Box>
        </Link>
    )
}

export default UserBtnProfile;