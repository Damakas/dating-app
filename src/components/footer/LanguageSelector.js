import React from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '../regionSelect/regionSlice';

const languages = [
    { code: 'RU', label: 'Русский' },
    { code: 'EN', label: 'English' },
    { code: 'UA', label: 'Українська' },
];

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const selectedRegion = useSelector(state => state.region.selectedRegion);

    const handleChange = (event) => {
        dispatch(setRegion({ region: event.target.value }));
    };

    return (
        <Select
            value={selectedRegion}
            onChange={handleChange}
            sx={{
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '& .MuiSelect-icon': {
                    color: 'white',
                },
                '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 32px 8px 16px',
                },
            }}
            MenuProps={{
                PaperProps: {
                    sx: {
                        bgcolor: '#42204E',
                        '& .MuiMenuItem-root': {
                            color: 'white',
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                            },
                        },
                    },
                },
            }}
        >
            {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: '14px'
                    }}>
                        {lang.code}
                    </Box>
                </MenuItem>
            ))}
        </Select>
    );
};

export default LanguageSelector;