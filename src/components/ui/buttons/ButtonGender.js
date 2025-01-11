import React from 'react';
import { Button } from '@mui/material';

const ButtonGender = ({ icon, isActive, onClick, bgGender, name = 'gender' }) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                padding: { xs: '10px 70px', sm: '14px 75px' },
                textTransform: 'none',
                color: 'white',
                borderRadius: '40px',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                ...(isActive ? {
                    background: bgGender,
                    '&::before': {
                        display: 'none'
                    }
                } : {
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '40px',
                        border: '1px solid transparent',
                        background: bgGender,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    },
                    '&:hover': {
                        background: bgGender,
                        '&::before': {
                            display: 'none'
                        }
                    }
                })
            }}
            name={name}
        >
            {icon}
        </Button>

    );
};

export default ButtonGender;
