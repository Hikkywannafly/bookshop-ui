import * as Yub from 'yup';

export const registerSchema = Yub.object().shape({
    emailAddress: Yub.string()
        .required('Không được để trống')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Email không hợp lệ'),
    phoneNumber: Yub.string()
        .required('Không được để trống')
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
    fullName: Yub.string()
        .required('Không được để trống')
        .min(5, 'Tên phải có ít nhất 5 ký tự'),
    password: Yub.string()
        .required('Không được để trống')
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .matches(/(?=.*[0-9])/, 'Mật khẩu phải có ít nhất 1 số')
        .matches(/(?=.*[a-z])/, 'Mật khẩu phải có ít nhất 1 chữ thường'),
    passwordConfirm: Yub.string()
        .required('Không được để trống')
        .oneOf([Yub.ref('password'), null], 'Mật khẩu không khớp'),
});