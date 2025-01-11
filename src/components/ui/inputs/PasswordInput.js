import React, { useState } from 'react';
import { ReactComponent as LockIcon } from '../../../assets/images/icons/lock.svg';

import { Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import BaseInput from './BaseInput';

const PasswordInput = ({ name = 'password', placeholder = 'Введите пароль', errors, touched }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <BaseInput
                name={name}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                startIcon={<LockIcon />}
                endIcon={showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                onEndIconClick={togglePasswordVisibility}
                errors={errors}
                touched={touched} />
        </>
    );
};

export default PasswordInput;