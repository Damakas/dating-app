import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { Button, Box, Typography } from '@mui/material';

import { openModal } from '../passRecoveryModal/passRecoverySlice';
import { login } from './authSlice';
import ButtonBasic from '../ui/buttons/ButtonBasic';

import EmailInput from '../ui/inputs/EmailInput';
import PasswordInput from '../ui/inputs/PasswordInput';
import ValidationSchema from '../../utils/ValidationSchema';

const LoginForm = () => {

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login(''));
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: { xs: '50px', sm: '130px', md: '170px' },
                color: 'white',
                textAlign: 'center',
                padding: { xs: '20px', md: '0' }
            }}>
                <Typography
                    sx={{
                        textWrap: 'wrap',
                        fontSize: { xs: '36px', md: '60px' },
                        fontWeight: '500',
                        lineHeight: '1.2',
                    }}
                >
                    Знакомства без преград
                </Typography>
                <Typography
                    sx={{
                        maxWidth: { xs: '350px', sm: '600px', md: '850px' },
                        margin: '10px auto',
                        fontSize: { xs: '14px', md: '16px' },
                        lineHeight: '1.5',
                    }}
                >
                    Для современного мира сплочённость команды профессионалов однозначно фиксирует
                    необходимость системы обучения кадров, соответствующей насущным потребностям.
                </Typography>
            </Box>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({ errors, touched }) => (
                    <Form>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                                width: { xs: '100%', sm: '400px' },
                                margin: { xs: '30px auto', },
                                padding: { xs: '0 120px', sm: '0' },
                            }}
                        >

                            {/* Email Field */}

                            <EmailInput
                                errors={errors.email}
                                touched={touched.email} />


                            {/* Password Field */}

                            <PasswordInput
                                errors={errors.password}
                                touched={touched.password} />

                            {/* Submit Button */}

                            <ButtonBasic
                                type={'submit'}
                                name={'Войти'}
                                onClick={handleLogin} />

                            {/* Recovery password Button */}

                            <Button sx={{
                                position: 'absolute',
                                textTransform: 'none',
                                color: '#925FA4',
                                margin: '0',
                                bottom: '-40px',
                                '&:hover': {
                                    background: 'none',
                                    transform: 'scale(1.05)'
                                }
                            }}
                                onClick={() => dispatch(openModal())}>Я не помню пароль
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>

    );
};

export default LoginForm;
