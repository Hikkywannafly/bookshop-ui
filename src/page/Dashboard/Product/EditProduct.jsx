import React, { useState, useEffect } from 'react';
import DashboardPage from '~/components/Layout/Dashboard';
import { CategoryListData, from, suppliers, languages, publishers, authors } from '~/dummy';
import { useFormik } from 'formik';
import { addProductSchema } from '~/helper/Schema/addProduct';
import ImgUpload from '~/components/Dashboard/Upload/ImgUpload';
import { updateBookData, getBookDetail } from '~/redux/Admin/apiRequest';
import { useFetchData } from '~/hooks/useFetchData';
import { ButtonLoading, CustomizedSnackbars } from '~/components/Button';
import { SelectUI, TextFields, AutoCompelete, InputAdornments, CurrencyInput, RichText, InputBar, InputNumber } from '~/components/Input';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OldItem from '~/components/Dashboard/Upload/OldItem';
import toast from 'react-hot-toast';
const initialSelect = {
    category: '',
    subCategory: '',
    formality: '',
    language: '',
    publisher: '',
    author: '',
    publicDate: '',
    decription: '',
    suppliers: '',
}
const EditProduct = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const bookdata = useSelector((state) => state.admindata.bookDetail);
    const loadingB = useSelector((state) => state.admindata.isFetchingBookDetail);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: ''
    });
    const [selected, setSelected] = useState(initialSelect);
    const [selectedImages, setSelectedImages] = useState([]);
    const axios = useFetchData();

    const handleGetbookDetail = async (slug) => {
        const res = await getBookDetail(slug, dispatch);
        if (res.status !== 'success' || res.book === null) {
            navigate(' ');
        }
    }

    useEffect(() => {
        let params = location.pathname.split('/auth')[1];
        handleGetbookDetail(params)
    }, []);

    useEffect(() => {
        if (bookdata) {
            setValues({
                ...values,
                id: bookdata?.id,
                name: bookdata?.name,
                slug: bookdata?.slug,
                category: bookdata?.category_id,
                subCategory: bookdata?.sub_category_id,
                price: bookdata?.price,
                decription: bookdata?.book_detail?.description,
                quantity: bookdata?.quantity,
                formality: bookdata?.formality_id,
                suppliers: bookdata?.supplier_id,
                publisher: bookdata?.book_detail?.publisher,
                author: bookdata?.book_detail?.author,
                publicDate: bookdata?.book_detail?.publish_year,
                pages: bookdata?.book_detail?.page_number,
                language: bookdata?.book_detail?.language,
            })

            setSelected({
                ...selected,
                category: bookdata?.category_id,
                subCategory: bookdata?.sub_category_id,
                formality: bookdata?.formality_id,
                language: bookdata?.book_detail?.language,
                publisher: bookdata?.book_detail?.publisher,
                author: bookdata?.book_detail?.author,
                publicDate: bookdata?.book_detail?.publish_year,
                decription: bookdata?.book_detail?.description,
                suppliers: bookdata?.supplier_id,
            })
        }
    }, [bookdata])

    const handleChangeSlug = (e) => {
        let value = e.target.value;
        value = value.toLowerCase()
        const from = "àáầấạăắäâảậặậẩèéëêếềệẻễẽểìíỉïịîòọợớơờởổỏõóöôốộùữúüưủûửừứựñçýỵỳỷỹ·/_,:;";
        const to = "aaaaaaaaaaaaaaeeeeeeeeeeeiiiiiiooooooooooooooouuuuuuuuuuuncyyyyy------";
        for (let i = 0, l = from.length; i < l; i++) {
            value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        value = value.replace(/\W+/g, '-')
        values.slug = value;
    }
    const { values, errors, setValues, setErrors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            id: '',
            name: '',
            slug: '',
            category: '',
            subCategory: '',
            price: '',
            decription: '',
            quantity: '',
            formality: '',
            suppliers: '',
            publisher: '',
            author: '',
            publicDate: '',
            pages: '',
            language: '',
            images: '',
        },
        validationSchema: addProductSchema,
        onSubmit: async (values) => {
            setLoading(true);
            const formData = new FormData();
            formData.append('data', JSON.stringify(values));

            if (values.images.length > 0) {
                values.images.forEach((file, index) => {
                    formData.append(`images[]`, file);
                });
            }
            console.log(`test`, formData)
            toast.promise(
                updateBookData(axios, formData)
                , {
                    loading: 'Loading ...',
                    success: (data) => {
                        if (data.status !== 'success') throw new Error(data.message);
                        setSnackbar({
                            open: true,
                            message: 'Cập nhật thành công',
                            severity: 'success'
                        });
                        return 'Cập nhật thành công';
                    },
                    error: (err) => {
                        setSnackbar({
                            open: true,
                            message: err.message,
                            severity: 'error'
                        });
                        return err.message;
                    }
                });
            setLoading(false);
        }
    });
    useEffect(() => {
        values.images = selectedImages.map((item) => item.file)
        if (selectedImages.length > 0)
            setErrors({ ...errors, images: '' })
    }, [selectedImages, values, errors, setErrors]);

    useEffect(() => {
        Object.keys(selected).forEach((key) => {
            values[key] = selected[key];
            if (selected[key] !== '') {
                setErrors({ ...errors, [key]: '' })
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);
    useEffect(() => {
        if (snackbar.open) {
            setTimeout(() => {
                setSnackbar({ ...snackbar, open: false })
            }, [6000]);
        }
    }, [snackbar.open]);
    return (
        <>
            {!loadingB ?
                <DashboardPage title="Edit Product" category="Product" >
                    <CustomizedSnackbars message={snackbar.message} severity={snackbar.severity} opened={snackbar.open} />
                    <form className="flex flex-row gap-6" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="gap-4 flex flex-col w-3/5 border p-5 rounded-md">
                            <TextFields
                                label='Product Name'
                                onChange={handleChangeSlug}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                error={errors.name && touched.name ? errors.name : false}
                                value={values.name}
                                name="name"
                            />
                            <TextFields
                                label='Product Slug'
                                onChange={handleChangeSlug}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                error={errors.slug && touched.slug ? errors.slug : false}
                                value={values.slug}
                                name="slug"
                            />
                            <SelectUI
                                defaultValue={values.category}
                                label='Category' name='category' selected={selected} setSelected={setSelected}
                                error={errors.category && touched.category ? errors.category : false}
                                options={
                                    CategoryListData.map(item => ({ value: item.id, label: item.title, subCategory: item.subCategory }))
                                }
                            />
                            {
                                values.category !== '' &&
                                <SelectUI
                                    defaultValue={values.subCategory}
                                    label='Sub Category'
                                    name='subCategory'
                                    selected={selected}
                                    setSelected={setSelected}
                                    error={errors.subCategory && touched.subCategory ? errors.subCategory : false}
                                    options={
                                        CategoryListData?.find((item) => item.id === (selected?.category || values.category))?.subCategory?.map(
                                            (item) => ({ value: item.id, label: item.title })
                                        ) || []
                                    }
                                />
                            }
                            <SelectUI
                                defaultValue={values.suppliers}
                                label='Supplier' name='suppliers' selected={selected} setSelected={setSelected}
                                error={errors.suppliers && touched.suppliers ? errors.suppliers : false}
                                options={
                                    suppliers.map((item) => ({ value: item.id, label: item.name }))
                                }
                            />
                            <InputNumber
                                label='Product Quanlity' handleChange={handleChange} handleBlur={handleBlur} value={values.quantity}
                                error={errors.quantity && touched.quantity ? errors.quantity : false}
                                name="quantity"
                            />
                            <CurrencyInput
                                value={values.price}
                                error={errors.price && touched.price ? errors.price : false}
                                handleChange={handleChange}
                            />
                            <div className="">
                                <label htmlFor="description" className="block text-sm  capitalize font-medium text-gray-900 mb-1">Decription</label>
                                <RichText
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </div>
                        </div>
                        <div className="gap-4 flex flex-col w-2/5 border p-5 rounded-md items-center">
                            <div className="w-full gap-4 flex flex-col ">
                                <SelectUI
                                    defaultValue={values.formality}
                                    label='formality' name='formality' selected={selected} setSelected={setSelected}
                                    error={errors.formality && touched.formality ? errors.formality : false}
                                    options={
                                        from.map((item) => ({ value: item.value, label: item.name }))
                                    }
                                />
                                <AutoCompelete
                                    values={values.language}
                                    label='Language'
                                    name='language'
                                    selected={selected}
                                    setSelected={setSelected}
                                    error={errors.language && touched.language ? errors.language : false}
                                    options={languages}

                                />
                                <AutoCompelete
                                    values={values.publisher}
                                    label='Publisher'
                                    name='publisher'
                                    selected={selected}
                                    setSelected={setSelected}
                                    error={errors.publisher && touched.publisher ? errors.publisher : false}
                                    options={publishers}
                                />
                                <AutoCompelete
                                    values={values.author}
                                    label='Author'
                                    selected={selected}
                                    setSelected={setSelected}
                                    error={errors.author && touched.author ? errors.author : false}
                                    name='author'
                                    options={authors}
                                />
                                <div className="flex gap-4 w-full">
                                    <div className="w-full">
                                        <InputNumber
                                            label='Public year' handleChange={handleChange} handleBlur={handleBlur}
                                            value={values.publicDate}
                                            error={errors.publicDate && touched.publicDate ? errors.publicDate : false}
                                            name="publicDate"
                                        />
                                    </div>
                                    <InputAdornments
                                        value={values.pages}
                                        error={errors.pages && touched.pages ? errors.pages : false}
                                        handleChange={handleChange}
                                        name="pages"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor="description" className="block text-sm mb-2 capitalize font-medium text-gray-900 ">Add images</label>
                                <ImgUpload
                                    setSelectedImages={setSelectedImages}
                                    selectedImages={selectedImages}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                />
                                {
                                    bookdata.default_image && bookdata.images ?
                                    <OldItem
                                    value={
                                        [
                                            bookdata?.default_image,
                                            ...bookdata?.images?.map((item) => item.image_address)
                                        ]
                                    }
                                /> : null

                                    
                                }
                            

                            </div>
                            <div className="flex justify-end gap-3 w-full mt-3">
                                <ButtonLoading
                                    label='Save'
                                    type='submit'
                                    loading={loading}
                                />
                            </div>
                        </div>
                    </form>
                </DashboardPage> : null}
        </>
    );
}



export default EditProduct;