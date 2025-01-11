import React from "react";
import { Box, Link, Typography } from "@mui/material";
import LanguageSelector from "./LanguageSelector";

const links = [
    { href: '#', label: 'О нас' },
    { href: '#', label: 'Поддержка' },
    { href: '#', label: 'Советы' },
    { href: '#', label: 'Контакты' },
    { href: '#', label: 'Правила оплаты' },
];

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: '20px', sm: '20px', md: '30px', lg: '90px' },
                background: 'transparent',
                margin: { xs: '100px 0 0', sm: '150px 0 0' },
                width: '100%',
            }}
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: "20px", justifyContent: 'center' }}>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: { xs: '12px', sm: '14px' },
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#FF6A00',
                                textDecoration: 'none',
                            },
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </Box>
            <Box>
                <Link
                    sx={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: { xs: '12px', sm: '14px' },
                        transition: 'color 0.3s ease',
                        '&:hover': {
                            color: '#FF6A00',
                            textDecoration: 'none',
                        },
                    }}
                >
                    Политика обработки персональных данных
                </Link>
            </Box>
            <Box>
                <LanguageSelector />
            </Box>
            <Box>
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: { xs: '12px', sm: '14px' },
                        textAlign: 'center',
                    }}
                >
                    © Company 2021
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
