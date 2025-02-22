import * as Yup from 'yup';

const ValidationSchema = () => {
    return (
        Yup.object().shape({
            name: Yup.string()
                .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, 'Имя может содержать только буквы')
                .min(2, 'Имя должно содержать минимум 2 символа')
                .max(50, 'Имя не должно превышать 50 символов')
                .required('Имя обязательно для заполнения'),
            email: Yup.string()
                .email('Неверная электронная почта')
                .required('Укажите электронную почту'),
            password: Yup.string()
                .min(6, 'Пароль должен содержать не менее 6 символов')
                .required('Укажите пароль'),
            day: Yup.number()
                .required('Пожалуйста, заполните дату рождения полностью')
                .min(1, 'День должен быть от 1 до 31')
                .max(31, 'День должен быть от 1 до 31'),

            month: Yup.string()
                .required('Пожалуйста, заполните дату рождения полностью'),
            year: Yup.number()
                .required('Пожалуйста, заполните дату рождения полностью')
                .min(1900, 'Год должен быть не меньше 1900')
                .max(new Date().getFullYear(), 'Год не может быть больше текущего'),
            gender: Yup.string()
                .required('Пожалуйста, выберите пол')
                .oneOf(['male', 'female'], 'Выберите корректное значение пола'),
        })
    );
};

export default ValidationSchema;
