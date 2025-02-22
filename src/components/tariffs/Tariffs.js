import React from "react";
import { Box, Typography, Container } from "@mui/material";

import firstTariff from '../../assets/images/firstTariff.png';
import monthTariff from '../../assets/images/monthTariff.png';
import yearTariff from '../../assets/images/yearTariff.png';

import TarrifCard from "./TariffCard";

const Tariffs = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <Typography padding={'30px 0 20px'} color="white" fontWeight={500} variant="h4">
                Тарифы
            </Typography>
            <Box sx={{
                display: 'grid',
                justifyContent: 'center',
                gridTemplateColumns: {
                    lg: 'repeat(3, 1fr)'
                },
                gap: '20px',
                '& > *:last-child': {
                    gridColumn: {
                        xs: 'auto',
                        md: '1 / span 2',
                        lg: 'auto'
                    },
                    justifySelf: {
                        xs: 'center',
                        md: 'center',
                        lg: 'auto'
                    },
                }
            }}>
                <TarrifCard
                    imgTariff={firstTariff}
                    durationTarrif={'1 день'}
                    priceTarrif={500}
                />
                <TarrifCard
                    imgTariff={monthTariff}
                    durationTarrif={'30 дней'}
                    priceTarrif={500}
                    isDisabled={true}
                />
                <TarrifCard
                    imgTariff={yearTariff}
                    durationTarrif={'1 год'}
                    priceTarrif={500}
                    isDisabled={true}
                />
            </Box>
        </Container>
    )
}

export default Tariffs;