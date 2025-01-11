import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";
import { Formik, Form } from 'formik';
import ButtonBasic from "../ui/buttons/ButtonBasic";
import { closeModal } from "./passRecoverySlice";
import EmailInput from "../ui/inputs/EmailInput";
import ValidationSchema from "../../utils/ValidationSchema";


const PassRecoveryModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeModal())}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px'
            }}
        >
            <Box
                sx={{
                    maxWidth: '680px',
                    width: '100%',
                    height: '380px',
                    backgroundColor: '#1C0A22',
                    borderRadius: '50px',
                    padding: '20px',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: 24,
                }}
            >
                <Typography variant="h4">
                    Я не помню пароль
                </Typography>
                <Typography sx={{ color: '#6E447B', margin: '10px 0 20px' }}>
                    Введи свой email и мы вышлем вам инструкции по изменению пароля
                </Typography>

                <Formik
                    initialValues={{
                        email: ''
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <EmailInput />
                            {errors.email && touched.email && (
                                <Box
                                    sx={{
                                        color: 'red',
                                        fontSize: { xs: '10px', sm: '12px' },
                                        margin: '5px',
                                    }}
                                >
                                    {errors.email}
                                </Box>
                            )}
                            <ButtonBasic
                                type="submit"
                                name="Запросить новый пароль"
                            />
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
};

export default PassRecoveryModal;