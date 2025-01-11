import React from "react";
import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg';
import BaseInput from "./BaseInput";

const UserInput = ({ name = 'name', placeholder = 'Ваше имя', errors, touched }) => {
    return (
        <>
            <BaseInput
                name={name}
                type='name'
                placeholder={placeholder}
                startIcon={<UserIcon />}
                errors={errors}
                touched={touched} />
        </>
    )
}

export default UserInput;
