import React from 'react';
import Flag from 'react-world-flags';
import { Box, Typography } from '@mui/material';

const countryCodesMap = {
    'Россия': 'RU',
    'Украина': 'UA',
    'Беларусь': 'BY',
    'США': 'US',
    'Канада': 'CA',
};

const CountryWithFlag = ({ country }) => {
    const countryCode = countryCodesMap[country];

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {countryCode && <Flag code={countryCode} width={20} />}
            <Typography sx={{ fontSize: '12px' }}>{country}</Typography>
        </Box>
    );
};

export default CountryWithFlag;