import * as Yub from 'yup';

export const addressSchema = Yub.object().shape({
    name: Yub.string()
        .required('Không được để trống')
        .min(5, 'Tên người nhận phải lớn hơn 5 ký tự')
        .max(255, 'Tên người nhận phải nhỏ hơn 255 ký tự'),
    phone: Yub.string()
        .required('Không được để trống').nullable()
        .matches(/^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ')
        .min(10, 'Số điện thoại ít nhất 10 số')
        .max(11, ' Số điện thoại không được quá 11 số'),
    email: Yub.string()
        .required('Không được để trống')
        .email('Email không hợp lệ'),
    province: Yub.string()
        .required('Không được để trống'),
    district: Yub.string()
        .required('Không được để trống'),
    ward: Yub.string()
        .required('Không được để trống'),
    address: Yub.string()
        .required('Không được để trống')
        .min(5, 'Địa chỉ phải lớn hơn 5 ký tự')
        .max(255, 'Địa chỉ phải nhỏ hơn 255 ký tự'),
});