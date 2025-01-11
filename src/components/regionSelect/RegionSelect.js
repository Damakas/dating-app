import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, MenuItem, Select, Box } from "@mui/material";
import { setRegion } from "../regionSelect/regionSlice";
import ruFlag from '../../assets/flags/ru.png';
import usaFlag from '../../assets/flags/usa.png';
import uaFlag from '../../assets/flags/ua.png';

const regions = [
    { value: 'RU', label: 'Россия', flag: ruFlag },
    { value: 'EN', label: 'Америка', flag: usaFlag },
    { value: 'UA', label: 'Украина', flag: uaFlag },
];

const RegionSelect = () => {
    const dispatch = useDispatch();
    const selectedRegion = useSelector(state => state.region.selectedRegion)

    const handleChange = (event) => {
        const region = event.target.value;
        dispatch(setRegion({ region }))
    }

    return (
        <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Select
                    id="region-select"
                    value={selectedRegion}
                    onChange={handleChange}
                    displayEmpty
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: '#1B0522',
                                '& .MuiMenuItem-root': {
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }
                            }
                        }
                    }}
                    sx={{
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiSelect-select': {
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiSelect-icon': {
                            color: 'white',
                        },
                    }}
                >
                    {regions.map((region) => (
                        <MenuItem key={region.value} value={region.value}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                    component="img"
                                    src={region.flag}
                                    alt={region.label}
                                    sx={{
                                        width: 26,
                                        height: 26,
                                        marginRight: 1,
                                        borderRadius: '2px',
                                    }}
                                />
                                {region.label}
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        </FormControl>
    )
};

export default RegionSelect;