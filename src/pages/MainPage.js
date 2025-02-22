import React from "react";
import { Box } from "@mui/system";
import LoginForm from "../components/loginForm/LoginForm";
import PassRecoveryModal from "../components/passRecoveryModal/PassRecoveryModal";
import bgRight from '../assets/images/bgRightMain.png';
import bgLeft from '../assets/images/bgLeftMain.png';

const MainPage = () => {

    return (
        <Box>
            <Box
                sx={{

                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    '&::before, &::after': {
                        content: '""',
                        position: 'absolute',
                        backgroundRepeat: 'no-repeat',
                    },
                    '&::before': { // Left image
                        backgroundImage: `url(${bgLeft})`,
                        left: {
                            xs: '-50%',
                            sm: '-25%',
                            md: '-15%',
                            lg: 0,
                        },
                        bottom: { sm: '200px', md: 0 },
                        width: '100%',
                        height: '85vh',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left top',
                    },
                    '&::after': { // Right image
                        backgroundImage: `url(${bgRight})`,
                        bottom: 0,
                        right: {
                            xs: '-55%',
                            sm: '-30%',
                            md: '-10%',
                            lg: '0',
                        },
                        width: '100%',
                        height: '70vh',
                        backgroundSize: 'contain',
                        backgroundPosition: 'right top',
                    },
                }}
            />

            <Box sx={{ flex: 1, position: 'relative', zIndex: 1, }}>
                <LoginForm />
                <PassRecoveryModal />
            </Box>
        </Box>
    )
};

export default MainPage;