import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import React, { useState, useEffect } from 'react';
import { CategoryListData, price } from '~/dummy';
import { useLocation, useNavigate } from 'react-router-dom';
import FillterLayout from './FillterLayout';
import CheckBoxGroup from './CheckBoxGroup';
import { getSuppliers } from '~/redux/Product/ProductRequest';
const Fillterbar = () => {
    const [subCategory, setSubCategory] = useState();
    const [loading, setLoading] = useState(false);
    const [suppliers, setSuppliers] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const handleCategoryClick = (slug) => {
        navigate(`/${slug}.html`);
    }
    const handleGetSupplier = async (params) => {
        const suppliers = await getSuppliers(params, setLoading);
        setSuppliers(suppliers.suppliers);
    }
    useEffect(() => {
        let params = location.pathname.split('/').at(-1).split('.')[0];
        setSubCategory(CategoryListData.find((item) => item.slug === location.pathname.split('/')[1])?.slug);
        if (params) {
            console.log(params);
            handleGetSupplier(params);
        }

    }, [location.pathname]);
    return (
        <>
            <div
                style={{ zIndex: 0 }}
                className="bg-white w-full lg:w-[290px] text-slate-700  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start gap-4">
                <FillterLayout name='category' >
                    {
                        <>
                            <div className="flex items-center">

                                <h1
                                    onClick={(e) => handleCategoryClick(`all-category`)}
                                    className={`mb-3 text-sm uppercase  cursor-pointer   ${location.pathname === `/all-category.html` ? 'text-orange-600 font-medium' : ' '} `}>All categories</h1>

                            </div>

                            <div className="flex flex-col gap-1.5">
                                {
                                    CategoryListData.map((item, index) => (
                                        <div key={index} className="">
                                            <div
                                                className="flex items-center gap-1.5">

                                                <h1
                                                    onClick={(e) => handleCategoryClick(item.slug)}
                                                    className={`text-sm  cursor-pointer  
                                ${location.pathname === `/` + item.slug + '.html' ? 'text-orange-600 font-medium' : ' '} `} > {item.title}</h1>
                                                <div
                                                    onClick={(e) => {

                                                        subCategory !== item.slug ?

                                                            setSubCategory(item.slug) : setSubCategory()
                                                    }}
                                                    className="">
                                                    {
                                                        item.title === subCategory ? <RiArrowDropUpLine className='cursor-pointer' /> : <RiArrowDropDownLine className='cursor-pointer' />
                                                    }
                                                </div>
                                            </div>
                                            <div className={` m-1  w-auto  `}>
                                                <div className={` flex flex-col animate-fade-down  ${item.slug !== subCategory ? ` hidden ` : ''}`}>
                                                    {
                                                        item.subCategory?.map((sub, index) => (
                                                            <div key={index} className="m-1 relative  max-w-sm  cursor-pointer  ">
                                                                <span
                                                                    onClick={(e) => handleCategoryClick(item.slug + '/' + sub.slug)}
                                                                    className={`py-1 link link-underline link-underline-black
                                              ${location.pathname === `/` + item.slug + `/` + sub.slug + '.html' ? 'text-orange-600 font-medium' : ''}
                                                `}>{sub.title}</span>
                                                            </div>

                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </>

                    }
                </FillterLayout>

                <FillterLayout name='price' >
                    {
                        price.map((item, index) => (
                            <CheckBoxGroup key={index} id={index} value={item.name} />
                        ))
                    }
                </FillterLayout>
                <FillterLayout name='suppliers ' >
                    {loading &&
                        suppliers?.map((item, index) => (
                            <CheckBoxGroup.Loading key={index} id={index} value={item.name} />
                        ))
                    }
                    {!loading &&
                        suppliers?.map((item, index) => (
                            <CheckBoxGroup key={index} id={index} value={item.name} />
                        ))
                    }
                </FillterLayout>
            </div >
        </>

    );
}

export default Fillterbar;