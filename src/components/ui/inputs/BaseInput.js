import React from 'react';
import { Field } from 'formik';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledField = styled(Field)(({ theme }) => ({
    width: '100%',
    maxWidth: '380px',
    padding: '23px 50px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#42204E',
    color: '#8B5D9A',
    fontSize: '16px',
    '&::placeholder': {
        color: '#8B5D9A',
        opacity: 1,
    },
    [theme.breakpoints.down('sm')]: {
        padding: '18px 40px',
        fontSize: '14px',
    },
}));


const BaseInput = ({ name, type, placeholder, startIcon, endIcon, onEndIconClick, errors, touched }) => {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '380px',
                    minWidth: '200px',
                    margin: { xs: '5px', sm: '5px auto', },
                }}
            >
                {startIcon && (
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            left: { xs: '15px', sm: '30px' },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#8B5D9A',
                            zIndex: 1,
                        }}
                    >
                        {startIcon}
                    </Box>
                )}
                <StyledField
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="off"
                    sx={{
                        paddingLeft: startIcon ? '65px' : '23px',
                        paddingRight: endIcon ? '50px' : '23px',
                    }}
                />
                {endIcon && (
                    <IconButton
                        onClick={onEndIconClick}
                        sx={{
                            position: 'absolute',
                            right: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#8B5D9A',
                            zIndex: 1,
                        }}
                    >
                        {endIcon}
                    </IconButton>
                )}
            </Box>
            {errors && touched && (
                <Box
                    sx={{
                        color: 'red',
                        fontSize: { xs: '10px', sm: '12px' },
                        margin: '0 auto',
                        padding: '0'
                    }}
                >
                    {errors}
                </Box>
            )}
        </>
    );
};

export default BaseInput;
