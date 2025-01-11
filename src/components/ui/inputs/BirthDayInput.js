import React from 'react';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field } from 'formik';


const months = [
    { value: '01', label: 'Январь' },
    { value: '02', label: 'Февраль' },
    { value: '03', label: 'Март' },
    { value: '04', label: 'Апрель' },
    { value: '05', label: 'Май' },
    { value: '06', label: 'Июнь' },
    { value: '07', label: 'Июль' },
    { value: '08', label: 'Август' },
    { value: '09', label: 'Сентябрь' },
    { value: '10', label: 'Октябрь' },
    { value: '11', label: 'Ноябрь' },
    { value: '12', label: 'Декабрь' },
];

const BirthDayInput = ({ values, handleChange, handleBlur, touchedDay, touchedMonth, touchedYear, day, month, year }) => {
    const isFormIncomplete = () => {
        return !day || !month || !year;
    };

    return (

        <Box sx={{ maxWidth: '380px', width: '100%' }}>
            <Typography sx={{ marginBottom: '10px', color: '#6E447B' }}>
                Дата рождения
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>

                {/* Day Field */}
                <Field
                    name="day"
                    as={Select}
                    variant="outlined"
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: '#230E2B',
                                '& .MuiMenuItem-root': {
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }
                            }
                        }
                    }}
                    value={day}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    displayEmpty
                    sx={{
                        backgroundColor: '#42204E',
                        maxWidth: '170px',
                        width: '100%',
                        borderRadius: '50px',
                        textAlign: 'center',
                        color: '#8B5D9A',
                        '& .MuiSelect-icon': { color: 'white' },
                    }}
                    inputLabelProps={{
                        style: { textAlign: 'center', width: '100%', color: '#8B5D9A' },
                    }}
                >
                    <MenuItem value="" disabled>
                        День
                    </MenuItem>
                    {Array.from({ length: 31 }, (_, i) => (
                        <MenuItem key={i + 1} value={String(i + 1).padStart(2, '0')}>
                            {String(i + 1).padStart(2, '0')}
                        </MenuItem>
                    ))}
                </Field>

                {/* Month Field */}
                <Field
                    name="month"
                    as={Select}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: '#230E2B',
                                '& .MuiMenuItem-root': {
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }
                            }
                        }
                    }}
                    value={month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    displayEmpty
                    sx={{
                        backgroundColor: '#42204E',
                        maxWidth: '170px',
                        width: '100%',
                        borderRadius: '50px',
                        textAlign: 'center',
                        color: '#8B5D9A',
                        '& .MuiSelect-icon': { color: 'white' },
                    }}
                >
                    <MenuItem value="" disabled>
                        Месяц
                    </MenuItem>
                    {months.map((month) => (
                        <MenuItem key={month.value} value={month.value}>
                            {month.label}
                        </MenuItem>
                    ))}
                </Field>

                {/* Year Field */}
                <Field
                    name="year"
                    as={Select}
                    variant="outlined"
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: '#230E2B',
                                '& .MuiMenuItem-root': {
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }
                            }
                        }
                    }}
                    value={year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    displayEmpty
                    sx={{
                        backgroundColor: '#42204E',
                        maxWidth: '170px',
                        width: '100%',
                        borderRadius: '50px',
                        textAlign: 'center',
                        color: '#8B5D9A',
                        '& .MuiSelect-icon': { color: 'white' },
                    }}
                    inputLabelProps={{
                        style: { textAlign: 'center', width: '100%', color: '#8B5D9A' },
                    }}
                >
                    <MenuItem value="" disabled>
                        Год
                    </MenuItem>
                    {Array.from({ length: 100 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                            <MenuItem key={year} value={year}>
                                {year}
                            </MenuItem>
                        );
                    })}
                </Field>
            </Box>

            {/* Error Message */}
            {(touchedDay || touchedMonth || touchedYear) && (
                <Box
                    sx={{
                        mt: 2,
                        textAlign: 'center',
                        fontSize: { xs: '10px', sm: '12px' },
                        color: 'red'
                    }}
                >
                    Пожалуйста, заполните дату рождения полностью
                </Box>
            )}
        </Box>

    );
};

export default BirthDayInput;