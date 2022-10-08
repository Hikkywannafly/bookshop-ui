import * as Yub from 'yup';

export const loginSchema = Yub.object().shape({
    email: Yub.string()
        .required('Not allow empty')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
    password: Yub.string()
        .required('Not allow empty')
});