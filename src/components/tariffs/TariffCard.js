import React from "react";
import { Box, Typography } from "@mui/material";
import ButtonBasic from "../ui/buttons/ButtonBasic";

const TarrifCard = ({ imgTariff, durationTarrif, priceTarrif, isDisabled }) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            maxWidth: '380px',
            width: '100%',
            height: '325px',
            borderRadius: '50px',
            padding: { xs: '50px', sm: '100px' },
            position: 'relative',
            backgroundColor: '#1C0A22',
            zIndex: 1,
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50px',
                border: '1px solid transparent',
                background: 'linear-gradient(#1C0A22, #1C0A22) padding-box, linear-gradient(to right, #EE0979, #FF6A00) border-box',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: -1,
            },
            '&:hover': {
                cursor: 'pointer',
                '&:before': {
                    opacity: 1,
                }
            },
        }}>
            <Box component={'img'} src={imgTariff} alt="tariff img" />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                gap: '5px',
            }}>
                <Typography >
                    {durationTarrif}
                </Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>
                    {priceTarrif} евро
                </Typography>
            </Box>
            <ButtonBasic
                name={'Провести оплату'}
                isDisabled={isDisabled} />
        </Box>
    )
}

export default TarrifCard;