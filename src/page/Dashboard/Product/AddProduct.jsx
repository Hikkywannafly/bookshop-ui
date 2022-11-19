import React, { useState, useMemo, useEffect } from 'react';
import DashboardPage from '~/components/Layout/Dashboard';
import InputBar from '~/components/Input/Input';
import SelectBar from '~/components/Input/SelectBar';
import { fillter, CategoryListData } from '~/dummy';
import CurrencyInput from '~/components/Input/CurrencyInput';
import RichText from '~/components/Input/RichText';
import Button from "~/components/Input/Button";
import { useFormik } from 'formik';
import { addProductSchema } from '~/helper/Schema/addProduct';
import ImgUpload from '~/components/Dashboard/Upload/ImgUpload';

const AddProduct = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [subCategory, setSubCategory] = useState([]);
    const [categoryValue, setCategoryValue] = useState("");
    const [subCategoryValue, setSubCategoryValue] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const handleChangeSlug = (e) => {
        let value = e.target.value;
        value = value.toLowerCase()
        const from = "àáầấạắäâảẩèéëêếệẻễẽểìíỉïịîòọợớờởổỏõóöôộùúüưủûửừứựñçýỵỳỷỹ·/_,:;";
        const to = "aaaaaaaaaaeeeeeeeeeeiiiiiiooooooooooooouuuuuuuuuuncyyyyy------";
        for (let i = 0, l = from.length; i < l; i++) {
            value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        value = value.replace(/\W+/g, '-')
        values.slug = value;
    }

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            slug: '',
            category: '',
            subcategory: '',
            price: '',
            description: '',
        },
        validationSchema: addProductSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    useEffect(() => {
        values.category = categoryValue
    }, [categoryValue]);
    useEffect(() => {
        values.subcategory = subCategoryValue
    }, [subCategoryValue]);
    useEffect(() => {
        values.description = description
    }, [description]);
    // console.log(`test`, selectedImages);
    return (
        <>
            <DashboardPage title="Add Product" category="Product" >
                <form className="flex flex-row gap-6" onSubmit={handleSubmit}>
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
                                    ...CategoryListData.map(item => ({ slug: item.slug, name: item.title, subCategory: item.subCategory }))
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
                                    ...subCategory?.map(item => ({ slug: item.slug, name: item.title })) || []
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
                        <label htmlFor="description" className="block text-sm  capitalize font-medium text-gray-900 mb-1">Add images</label>
                        <ImgUpload
                            setSelectedImages={setSelectedImages}
                            selectedImages={selectedImages}
                        />

                        <div className="flex gap-3 w-full">

                            <Button content={`Publish Product`} color='px-2 h-8 bg-slate-800 border-2 border-slate-800' />

                            <Button content={`View Demo`} color='px-2 h-8 bg-white text-black border-2 border-slate-800' />

                        </div>

                    </div>

                </form>
            </DashboardPage>
        </>
    );
}



export default AddProduct;