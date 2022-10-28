
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import React, { useState, useEffect } from 'react';
import { CategoryListData, price, from } from '~/dummy';
import { useLocation } from 'react-router-dom';
import FillterLayout from './FillterLayout';
import CheckBoxGroup from './CheckBoxGroup';
const Fillterbar = (props) => {
    const { fillter, suppliers, locationname, handleCategoryToggle, handleSelect } = props;
    const [subCategory, setSubCategory] = useState();
    const location = useLocation();
    useEffect(() => {
        setSubCategory(CategoryListData.find((item) => item.slug === location.pathname.split('/')[1])?.slug);
    }, [location.pathname]);
    return (
        <>
            <div
                style={{ zIndex: 0 }}
                className="bg-white w-full lg:w-[290px] h-screen text-slate-700  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start gap-4">

                <FillterLayout name='category' >
                    {
                        <>
                            <div className="flex items-center">

                                <h1
                                    onClick={(e) => handleCategoryToggle(`all-category`)}
                                    className={`mb-3 text-sm uppercase  cursor-pointer   ${locationname === `/all-category.html` ? 'text-orange-600 font-medium' : ' '} `}>All categories</h1>

                            </div>

                            <div className="flex flex-col gap-1.5">
                                {
                                    CategoryListData.map((item, index) => (
                                        <div key={index} className="">
                                            <div
                                                className="flex items-center gap-1.5">

                                                <h1
                                                    onClick={(e) => handleCategoryToggle(item.slug)}
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
                                                                    onClick={(e) => handleCategoryToggle(item.slug + '/' + sub.slug)}
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

                <FillterLayout name='suppliers ' >
                    {
                        suppliers?.map((item, index) => (
                            <CheckBoxGroup title={`supplier`} fillter={fillter} handleSelect={handleSelect} key={index} id={`er` + index} value={item.id} name={item.name} />
                        ))
                    }
                </FillterLayout>
                <FillterLayout name='price' >
                    {
                        price.map((item, index) => (
                            <CheckBoxGroup

                                key={index} id={`rr` + index} fillter={fillter} value={item.value} title={`price`} handleSelect={handleSelect} name={item.name}
                            />
                        ))
                    }
                </FillterLayout>
                <FillterLayout name='from' >
                    {
                        from.map((item, index) => (
                            <CheckBoxGroup
                                key={index} title={`from`} fillter={fillter} handleSelect={handleSelect} id={index} value={item.value} name={item.name}
                            />
                        ))
                    }
                </FillterLayout>
            </div >
        </>

    );
}

export default Fillterbar;