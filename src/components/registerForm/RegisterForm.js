import React, { useState } from "react";
import ValidationSchema from "../../utils/ValidationSchema";
import UserInput from "../ui/inputs/UserInput";
import BirthDayInput from "../ui/inputs/BirthDayInput";
import ButtonGender from "../ui/buttons/ButtonGender";
import EmailInput from "../ui/inputs/EmailInput";
import PasswordInput from "../ui/inputs/PasswordInput";
import ButtonBasic from "../ui/buttons/ButtonBasic";
import { ReactComponent as MaleIcon } from './../../assets/images/icons/male.svg'
import { ReactComponent as FemaleIcon } from './../../assets/images/icons/female.svg'

import { Formik, Form } from "formik";


import { Box, Typography } from "@mui/material";

const RegisterForm = () => {

    return (
        <Box sx={{ width: '100%', margin: '0 auto', }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: '10px',
                margin: '65px 0 30px',

            }}>
                <Typography variant="h4" sx={{ color: 'white', fontSize: '36px', fontWeight: '500' }}>
                    Создай новый аккаунт
                </Typography>
                <Typography sx={{ color: '#6E447B' }}>
                    Присоединяйся к сообществу из 518 млн человек!
                </Typography>
            </Box>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    day: '',
                    month: '',
                    year: '',
                    gender: '',
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => console.log(values)}>
                {({ errors, touched, setFieldValue, values, handleBlur, handleChange }) => (
                    <Form>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '0 10px'
                        }}>
                            <UserInput errors={errors.name} touched={touched.name} />

                            <BirthDayInput
                                day={values.day}
                                month={values.month}
                                year={values.year}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                touchedDay={touched.day}
                                touchedMonth={touched.month}
                                touchedYear={touched.year}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', }}>
                                <ButtonGender
                                    icon={<MaleIcon />}
                                    isActive={values.gender === 'male'}
                                    onClick={() => setFieldValue('gender', 'male')}
                                    bgGender={'linear-gradient(45deg, rgb(5, 117, 230), rgb(2, 27, 121))'}
                                />
                                <ButtonGender
                                    icon={<FemaleIcon />}
                                    isActive={values.gender === 'female'}
                                    errors={errors.gender}
                                    touched={touched.gender}
                                    onClick={() => setFieldValue('gender', 'female')}
                                    bgGender={'linear-gradient(45deg, rgb(238, 9, 121), rgb(255, 106, 0))'}
                                />
                            </Box>
                            {errors.gender && touched.gender && (
                                <Box
                                    sx={{
                                        color: 'red',
                                        fontSize: { xs: '10px', sm: '12px' },
                                        margin: '0 auto',
                                        padding: '0'
                                    }}
                                >
                                    {errors.gender}
                                </Box>
                            )}
                            <EmailInput
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <PasswordInput
                                errors={errors.password}
                                touched={touched.password} />
                            <ButtonBasic
                                type={'submit'}
                                name={'Создать аккаунт'}
                            />
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default RegisterForm;    