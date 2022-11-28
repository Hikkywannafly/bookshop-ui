import React, { useState, useEffect } from 'react';
import DashboardPage from '~/components/Layout/Dashboard';
import { CategoryListData, from, suppliers, languages, publishers, authors } from '~/dummy';
import { useFormik } from 'formik';
import { addProductSchema } from '~/helper/Schema/addProduct';
import ImgUpload from '~/components/Dashboard/Upload/ImgUpload';
import { createBookData } from '~/redux/Admin/apiRequest';
import { useFetchData } from '~/hooks/useFetchData';
import { ButtonLoading, CustomizedSnackbars } from '~/components/Button';
import { SelectUI, TextFields, AutoCompelete, InputAdornments, CurrencyInput, RichText, InputBar, InputNumber } from '~/components/Input';
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
const AddProduct = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: ''
    });
    const [selected, setSelected] = useState(initialSelect);
    const [selectedImages, setSelectedImages] = useState([]);
    const axios = useFetchData();
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
    const { values, errors, setErrors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
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
            // size: '',
            // weight: '',
            pages: '',
            language: '',
            images: [null],
        },
        validationSchema: addProductSchema,
        onSubmit: async (values) => {
            setLoading(true);
            const formData = new FormData();
            formData.append('data', JSON.stringify(values));
            values.images.forEach((file, index) => {
                formData.append(`images[]`, file);
            });
            const result = await createBookData(axios, formData);
            if (result.status === `success`) {
                setSnackbar({
                    open: true,
                    message: 'Thêm sản phẩm thành công',
                    severity: 'success'
                });
            }
            if (result.status === `error`) {
                console.log(result);
                setSnackbar({
                    open: true,
                    message: result.message,
                    severity: 'error'
                });
            }
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
            <DashboardPage title="Add Product" category="Product" >
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
                            label='Category' name='category' selected={selected} setSelected={setSelected}
                            error={errors.category && touched.category ? errors.category : false}
                            options={
                                CategoryListData.map(item => ({ value: item.id, label: item.title, subCategory: item.subCategory }))
                            }
                        />
                        <SelectUI
                            label='Sub Category'
                            name='subCategory'
                            selected={selected}
                            setSelected={setSelected}
                            error={errors.subCategory && touched.subCategory ? errors.subCategory : false}
                            options={
                                CategoryListData?.find((item) => item.id === selected?.category)?.subCategory?.map(
                                    (item) => ({ value: item.id, label: item.title })
                                ) || []
                            }
                        />
                        <SelectUI
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

                        <InputBar
                            value={date}
                            onChange={(e) => { }}
                            type='date' placeholder='Enter date name' label='Product Date' />
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
                                label='formality' name='formality' selected={selected} setSelected={setSelected}
                                error={errors.formality && touched.formality ? errors.formality : false}
                                options={
                                    from.map((item) => ({ value: item.value, label: item.name }))
                                }
                            />


                            <AutoCompelete
                                label='Language'
                                name='language'
                                selected={selected}
                                setSelected={setSelected}
                                error={errors.language && touched.language ? errors.language : false}
                                options={languages}

                            />


                            <AutoCompelete
                                label='Publisher'
                                name='publisher'
                                selected={selected}
                                setSelected={setSelected}
                                error={errors.publisher && touched.publisher ? errors.publisher : false}
                                options={publishers}
                            />
                            <AutoCompelete
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
                                        label='Public year' handleChange={handleChange} handleBlur={handleBlur} value={values.publicDate}
                                        error={errors.publicDate && touched.publicDate ? errors.publicDate : false}
                                        name="publicDate"
                                    />
                                </div>

                                {/* <InputNumber
                                label='Page Number' handleChange={handleChange} handleBlur={handleBlur} value={values.quantity}
                                error={errors.quantity && touched.quantity ? errors.quantity : false}
                                name="pageNumber"
                            /> */}
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
                                error={errors.images && touched.images ? errors.images : false}
                            />
                        </div>


                        <div className="flex justify-end gap-3 w-full mt-3">

                            <ButtonLoading
                                label='Publish Product'
                                type='submit'
                                loading={loading}
                            />

                            {/* <Button content={`Publish Product`} color='px-2 h-8 bg-slate-800  border-2 border-slate-800' />

                            <Button content={`View Demo`} color='px-2 h-8 bg-white text-black border-2 border-slate-800' /> */}

                        </div>

                    </div>

                </form>
            </DashboardPage>
        </>
    );
}



export default AddProduct;