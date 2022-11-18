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
    category: Yub.string()
        .required('Not allow empty'),
    subcategory: Yub.string()
        .required('Not allow empty'),
});