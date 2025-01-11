import React from "react";
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/email.svg';
import BaseInput from "./BaseInput";

const EmailInput = ({ name = 'email', placeholder = 'Введите электронную почту', errors, touched }) => {
    return (
        <>
            <BaseInput
                name={name}
                type='email'
                placeholder={placeholder}
                startIcon={<EmailIcon />}
                errors={errors}
                touched={touched} />
        </>
    )

}

export default EmailInput;
