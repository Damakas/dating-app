import React from "react";
import { Box, Typography } from "@mui/material";

const ProfilesUsersInfoField = ({ user, label }) => {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            width: { xs: '280px', sm: '450px', md: '550px' },
            justifyContent: 'center',
            textWrap: { xs: 'balance', sm: 'nowrap' }
        }}>
            <Box>
                <Typography sx={{
                    // fontSize: { xs: '12px' },
                    fontSize: '18px',
                    color: 'white',

                }}>
                    {label}
                </Typography>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    borderBottom: '2px dashed #4A2956',
                    width: '100%',
                    textWrap: 'wrap',
                    // fontSize: { xs: '12px' },
                    fontSize: '18px',
                }}
            />
            <Typography>{user}</Typography>
        </Box>
    );
};

export default ProfilesUsersInfoField;