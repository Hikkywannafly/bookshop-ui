import * as Yub from 'yup';

export const registerSchema = Yub.object().shape({
    email: Yub.string()
        .required('Not allow empty')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
    phone: Yub.string()
        .required('Not allow empty')
        .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Invalid phone number'),
    name: Yub.string()
        .required('Not allow empty')
        .min(5, 'At least 5 characters'),
    password: Yub.string()
        .required('Not allow empty')
        .min(8, 'Password must be at least 8 characters')
        .matches(/(?=.*[0-9])/, 'Password must contain a number')
        .matches(/(?=.*[a-z])/, 'Password must contain a lowercase letter'),
    passwordConfirm: Yub.string()
        .required('Not allow empty')
        .oneOf([Yub.ref('password'), null], 'Passwords must match'),
});