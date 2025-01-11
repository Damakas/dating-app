import React from "react";
import { Box, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const RegistrationPanel = () => {

    const navigate = useNavigate();

    const handlerRegister = () => {
        navigate('/register');
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
            },
        }}>
            <Link href='#' sx={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                    fontSize: '12px',
                    marginTop: '44px'
                },
            }}>
                Впервые здесь?
            </Link>

            <Button
                sx={{
                    position: 'relative',
                    padding: '11px 36px',
                    textTransform: 'none',
                    color: 'white',
                    borderRadius: '40px',
                    backgroundColor: 'transparent',
                    transition: 'background 0.3s ease',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '40px',
                        border: '1px solid transparent',
                        background: 'linear-gradient(90deg, #EE0979 0%, #FF6A00 100%)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, ' +
                            'linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    },
                    '&:hover': {
                        background: 'linear-gradient(45deg, #EE0979, #FF6A00)',
                    },
                    '@media (max-width: 600px)': {
                        padding: '10px 30px',
                        fontSize: '14px',
                    },
                }}
                onClick={handlerRegister}
            >
                Регистрация
            </Button>
        </Box>
    );
};

export default RegistrationPanel;
