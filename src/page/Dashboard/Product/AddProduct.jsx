import React, { useState, useMemo, useEffect } from 'react';
import DashboardPage from '~/components/Layout/Dashboard';
import InputBar from '~/components/Input/Input';
import SelectBar from '~/components/Input/SelectBar';
import { fillter, CategoryListData, from } from '~/dummy';
import CurrencyInput from '~/components/Input/CurrencyInput';
import RichText from '~/components/Input/RichText';
import Button from "~/components/Input/Button";
import { useFormik } from 'formik';
import { addProductSchema } from '~/helper/Schema/addProduct';
import ImgUpload from '~/components/Dashboard/Upload/ImgUpload';
import { createBookData } from '~/redux/Admin/apiRequest';
import { useFetchData } from '~/hooks/useFetchData';
const AddProduct = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [subCategory, setSubCategory] = useState([]);
    const [categoryValue, setCategoryValue] = useState("");
    const [subCategoryValue, setSubCategoryValue] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const axios = useFetchData();
    const handleChangeSlug = (e) => {
        let value = e.target.value;
        value = value.toLowerCase()
        const from = "àáầấạăắäâảậậẩèéëêếệẻễẽểìíỉïịîòọợớờởổỏõóöôộùúüưủûửừứựñçýỵỳỷỹ·/_,:;";
        const to = "aaaaaaaaaaaaaeeeeeeeeeeiiiiiiooooooooooooouuuuuuuuuuncyyyyy------";
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
            subcategory: '',
            price: '',
            description: '',
            quantity: '',
            formality: '',
            images: [null],
        },
        validationSchema: addProductSchema,
        onSubmit: async (values) => {
            const formData = new FormData();
            const data = {
                name: values.name,
                slug: values.slug,
                category: values.category,
                subcategory: values.subcategory,
                price: values.price,
                description: description,
            }
            formData.append('data', JSON.stringify(data));
            values.images.forEach((file, index) => {
                formData.append(`images[]`, file);

            });
            const result = await createBookData(axios, formData);
            console.log(`result`, result);
        }
    });
    useEffect(() => {
        values.category = categoryValue
        values.subcategory = subCategoryValue
        values.description = description
        values.images = selectedImages.map((item) => item.file)
        if (selectedImages.length > 0)
            setErrors({ ...errors, images: '' })
    }, [categoryValue, subCategoryValue, description, selectedImages, values, errors, setErrors]);

    return (
        <>
            <DashboardPage title="Add Product" category="Product" >
                <form className="flex flex-row gap-6" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="gap-4 flex flex-col w-3/5 border p-5 rounded-md">
                        <InputBar
                            placeholder='Enter product name'
                            label='Product Name'
                            onChange={handleChangeSlug}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={errors.name && touched.name ? errors.name : false}
                            value={values.name}
                            name="name"
                        />

                        <SelectBar label='category'
                            options={
                                [
                                    { slug: null, name: 'Select category' },
                                    ...CategoryListData.map(item => ({ slug: item.id, name: item.title, subCategory: item.subCategory }))
                                ]
                            }
                            setSubCategory={setSubCategory}
                            setValue={setCategoryValue}
                            error={errors.category && touched.category ? errors.category : false}

                        />
                        <SelectBar label='sub category'
                            options={
                                [
                                    { slug: null, name: 'Select sub category' },
                                    ...subCategory?.map(item => ({ slug: item.id, name: item.title })) || []
                                ]
                            }
                            setValue={setSubCategoryValue}
                            error={errors.subcategory && touched.subcategory ? errors.subcategory : false}
                        />
                        <InputBar
                            onChange={(e) => { }}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={errors.slug && touched.slug ? errors.slug : false}
                            value={values.slug}
                            name="slug"
                            placeholder='Enter slug name' label='Product Slug' />

                        <CurrencyInput
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            error={errors.price && touched.price ? errors.price : false}
                            value={values.price}
                            name="price"
                            placeholder='Enter price' label='Product Price (VNĐ)' />

                        <InputBar
                            value={date}
                            onChange={(e) => { }}
                            type='date' placeholder='Enter date name' label='Product Date' />

                        <div className="">
                            <label htmlFor="description" className="block text-sm  capitalize font-medium text-gray-900 mb-1">Decription</label>
                            <RichText
                                value={description} setValue={setDescription}
                            />
                        </div>

                    </div>
                    <div className="gap-4 flex flex-col w-2/5 border p-5 rounded-md items-center">
                        {/* <div className="w-full gap-4 flex flex-col">
                            <SelectBar label='Formality'
                                options={
                                    [
                                        { slug: null, name: 'Select formality' },
                                        ...from.map(item => ({ slug: item.value, name: item.name }))
                                    ]
                                }
                            />
                            <InputBar
                                placeholder='Enter product name'
                                label='Product Quantity'
                                onChange={handleChangeSlug}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                error={errors.name && touched.name ? errors.name : false}
                                value={values.name}
                                name="name"
                            />
                            <div className="flex gap-4 w-full">
                                <InputBar
                                    placeholder='Enter product name'
                                    label='Publisher'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                                <InputBar
                                    placeholder='Enter product name'
                                    label='Publishing Year'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                            </div>
                            <div className="flex gap-4">
                                <InputBar
                                    placeholder='Enter product name'
                                    label='Author'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                                <InputBar
                                    placeholder='Enter product name'
                                    label='Language'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                            </div>

                            <div className="flex gap-4">
                                <InputBar

                                    label='Size'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                                <InputBar

                                    label='Weight'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                                <InputBar

                                    label='Number of pages'
                                    onChange={handleChangeSlug}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name ? errors.name : false}
                                    value={values.name}
                                    name="name"
                                />
                            </div>
                            <SelectBar label='Supplier'
                                options={
                                    [
                                        { slug: null, name: 'Select formality' },
                                        ...from.map(item => ({ slug: item.value, name: item.name }))
                                    ]
                                }
                            />
                        </div> */}
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


                        <div className="flex gap-3 w-full">
                            <Button content={`Publish Product`} color='px-2 h-8 bg-slate-800  border-2 border-slate-800' />

                            <Button content={`View Demo`} color='px-2 h-8 bg-white text-black border-2 border-slate-800' />

                        </div>

                    </div>

                </form>
            </DashboardPage>
        </>
    );
}



export default AddProduct;