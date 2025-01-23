import { Box, Typography, Link, Container } from "@mui/material";
import React from "react";
import RegionSelect from "../regionSelect/RegionSelect";
import RegistrationPanel from "./RegistrationPanel";
import logo from '../../assets/images/logo.png';
import UserPanel from "../userPanel/UserPanel";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../loginForm/authSlice";

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box component="header">
            {/* Top Bar */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50px',
                backgroundColor: '#1B0522',
                marginBottom: isLoggedIn ? '0' : '30px',
                '@media (max-width: 600px)': {
                    display: 'none',
                    flexDirection: 'column',
                    height: 'auto',
                    gap: '10px',
                    padding: '0 5px',
                },
            }}>
                <Typography
                    sx={{
                        fontSize: '16px',
                        textTransform: "uppercase",
                        color: "white",
                    }}
                >
                    Знакомства по всему миру
                </Typography>
                <RegionSelect />
            </Box>

            {/* Main Bar */}

            <Box sx={{ backgroundColor: isLoggedIn ? '#2D1436' : 'transparent', }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '1200px',
                    alignItems: 'center',
                    padding: '20px 10px',
                    margin: '0 auto',
                    '@media (max-width: 700px)': {
                        flexDirection: 'column',
                    },
                    '@media (max-width: 320px)': {
                        flexDirection: isLoggedIn ? 'row' : 'column',
                        alignItems: 'center',
                        padding: '0 10px',
                    },
                }}>
                    {/* Logo */}
                    <Link href="/" sx={{ textDecoration: 'none', }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                        }}>
                            <img src={logo} alt="love birds" style={{ width: 'auto', height: '40px' }} />
                            <Typography sx={{
                                color: 'white',

                                fontSize: '22px',
                                '@media (max-width: 320px)': {
                                    display: isLoggedIn ? 'none' : 'block',
                                },
                            }}>
                                Znakomstva.com
                            </Typography>
                        </Box>
                    </Link>
                    {isLoggedIn ? (
                        <UserPanel />
                    ) : (
                        <RegistrationPanel />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
