import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { ReactComponent as LoupeIcon } from '../../../assets/images/icons/loupe.svg';

const SearchBar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearchClick = () => {
        setIsSearchActive((prev) => !prev);
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = () => {
        console.log(`Ищем: ${searchText}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0',
                position: 'relative',
            }}
        >
            <IconButton
                onClick={handleSearchClick}
                aria-label="search"
                sx={{
                    backgroundColor: 'transparent',
                    color: '#6E447B',
                    border: 'none',
                    '&:hover': {
                        backgroundColor: '#6E447B',
                        color: 'white',
                    },
                    transition: 'background-color 0.3s, color 0.3s',
                }}
            >
                <LoupeIcon />
            </IconButton>

            <TextField
                variant="outlined"
                placeholder="Введите для поиска..."
                value={searchText}
                onChange={handleInputChange}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleSearchSubmit();
                    }
                }}
                sx={{
                    width: isSearchActive ? { xs: '300px', sm: '360px' } : '0px',
                    opacity: isSearchActive ? 1 : 0,
                    transition: 'width 0.3s ease, opacity 0.3s ease',
                    backgroundColor: '#1B0522',
                    borderRadius: '30px',
                    position: 'absolute',
                    left: { xs: '-145px', sm: '-190px', md: '-200px', lg: '0' },
                    zIndex: 1,
                    top: "70px",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                        '&:hover fieldset': {
                            borderColor: 'transparent',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent',
                        },
                    },
                }}
            />
        </Box>
    );
};

export default SearchBar;
