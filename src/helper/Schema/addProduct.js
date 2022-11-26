import * as Yub from 'yup';

export const addProductSchema = Yub.object().shape({
    name: Yub.string()
        .required('Not allow empty')
        .min(5, 'Name must be at least 3 characters')
        .max(255, 'Name must be less than 255 characters'),
    slug: Yub.string()
        .required('Not allow empty')
        .min(5, 'Slug must be at least 3 characters')
        .max(255, 'Name must be less than 255 characters')
        .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug name'),
    price: Yub.string()
        .required('Not allow empty'),
    category: Yub.number()
        .required('Not allow empty'),
    subCategory: Yub.number()
        .required('Not allow empty'),
    images: Yub.array()
        .min(1, 'Please select at least one image'),
    quantity: Yub.number()
        .required('Not allow empty'),
    suppliers: Yub.string()
        .required('Not allow empty'),
    formality: Yub.string()
        .required('Not allow empty'),
    publisher: Yub.string()
        .required('Not allow empty')
        .min(2, 'Invalid value'),
    author: Yub.string()
        .required('Not allow empty')
        .min(2, 'Invalid value'),
    language: Yub.string()
        .required('Not allow empty')
        .min(2, 'Invalid value'),
    publicDate: Yub.string()
        .required('Not allow empty'),






});