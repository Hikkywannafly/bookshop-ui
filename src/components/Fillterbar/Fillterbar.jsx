import { IoIosArrowUp, IoIosArrowDown, IoMdArrowDropup } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { CategoryListData } from '~/dummy';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Fillterbar = () => {
    const [category, setCategory] = useState();
    const [subCategory, setSubCategory] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const handleCategoryClick = (slug) => {
        navigate(`/${slug}.html`);
    }
    useEffect(() => {

    }, [location])
    return (
        <>
            <div
                style={{ zIndex: 0 }}
                className="bg-white w-[300px]  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start">
                <div className="border-b">

                    <div className="flex justify-between mb-3">
                        <div className="flex gap-2 items-center">
                            <span className="w-1 h-3.5 bg-slate-800"></span>
                            <h1 className='font-bold uppercase'> category</h1>
                        </div>

                        <div
                            id="category"
                            onClick={(e) => {
                                category === 'category' ?
                                    setCategory() : setCategory('category')
                            }}
                            className=" px-3 cursor-pointer ">
                            {category === 'category' ? <IoIosArrowUp className="animate-fade-rotate-right " /> : <IoIosArrowDown className="animate-fade-rotate" />}
                        </div>
                    </div>
                    <div className={` animate-fade-down ${category === 'category' ? ` hidden ` : ''}`}>

                        <div className="flex items-center">

                            <h1 className=" ml-3 mb-3 text-sm uppercase font-medium cursor-pointer ">All categories</h1>

                        </div>

                        {
                            CategoryListData.map((item, index) => (
                                <div key={index} className="ml-3">
                                    <div
                                        className="flex items-center gap-3">

                                        <h1
                                            onClick={(e) => handleCategoryClick(item.slug)}
                                            className={`text-sm uppercase font-medium cursor-pointer 
                                        ${location.pathname === `/` + item.slug + '.html' ? 'text-yellow-600' : 'font-medium'} `} > {item.title}</h1>

                                        < IoMdArrowDropup className='cursor-pointer' />
                                    </div>
                                    <div className="m-2 flex flex-col w-auto ">
                                        {
                                            item.subCategory?.map((sub, index) => (
                                                <div key={index} className="m-1 relative  max-w-sm  cursor-pointer  ">
                                                    <span
                                                        onClick={(e) => handleCategoryClick(item.slug + '/' + sub.slug)}
                                                        className={`py-1 link link-underline link-underline-black
                                                      ${location.pathname === `/` + item.slug + `/` + sub.slug + '.html' ? 'text-yellow-600' : ''}
                                                        `}>{sub.title}</span>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>

            </div>

        </>

    );
}

export default Fillterbar;