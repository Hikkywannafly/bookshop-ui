import React, { useState } from 'react';
import DashboardPage from '~/components/Layout/Dashboard';
import InputBar from '~/components/Input/Input';
import SelectBar from '~/components/Input/SelectBar';
import { fillter, CategoryListData } from '~/dummy';
import CurrencyInput from '~/components/Input/CurrencyInput';
import RichText from '~/components/Input/RichText';
import Button from "~/components/Input/Button";
import { useFormik } from 'formik';
const AddProduct = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [subCategory, setSubCategory] = useState([{ title: 'Select sub category', slug: null }]);
    const [slug, setSlug] = useState("example-slug");
    const handleChangeSlug = (e) => {
        let value = e.target.value;
        value = value.toLowerCase().replace(/ /g, '-');
        const from = "àáäâèéëêễìíïîòóöôùúüûñç·/_,:;";
        const to = "aaaaeeeeeiiiioooouuuunc------";
        for (let i = 0, l = from.length; i < l; i++) {
            value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        value = value.replace(/[^a-z0-9 -]/g, '')
        setSlug(value);
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
        // validationSchema: addProduct;
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <>
            <DashboardPage title="Add Product" category="Product" >
                <form className="flex flex-row gap-4" onSubmit={handleSubmit}>
                    <div className="gap-4 flex flex-col w-1/2">
                        <InputBar placeholder='Enter product name' label='Product Name'
                            // onChange={handleChangeSlug}
                            // handleChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.first_name}
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

                        />
                        <SelectBar label='sub category'
                            options={subCategory?.map(item => ({ slug: item.slug, name: item.title })) || [{ name: 'Select sub category', slug: null }]}
                        />
                        <InputBar
                            onChange={(e) => { }}
                            value={slug}
                            placeholder='Enter slug name' label='Product Slug' />

                        <CurrencyInput
                            placeholder='Enter price' label='Product Price' />

                        <InputBar
                            value={date}
                            onChange={(e) => { }}
                            type='date' placeholder='Enter date name' label='Product Date' />

                        <div className="">
                            <label htmlFor="first_name" className="block text-sm  capitalize font-medium text-gray-900 mb-1">Decription</label>
                            <RichText label='Description' />
                        </div>

                    </div>
                    <div className="">
                        <Button content={`Mua ngay `} color=' bg-slate-800 border-2 border-slate-800' />
                    </div>

                </form>

            </DashboardPage>
        </>
    );
}



export default AddProduct;