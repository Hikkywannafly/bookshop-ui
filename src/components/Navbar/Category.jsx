import { BiCategory } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '~/hook/useStateContext';
import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import { CategoryListData } from '~/dummy';
const Category = () => {
    const navigate = useNavigate();
    const { mobile, screenSize, click, setClick } = useStateContext();
    const handleCategoryClick = (slug) => {
        navigate(`/${slug}.html`);
        window.scrollTo(0, 0);
    }
    const handleCategory = () => {
        setClick(!click);
    }
    useEffect(() => {
        if (!mobile) {
            setClick(false);
        }
        return () => {

        }
    }, [mobile])

    return (
        <>
            <div
                onClick={mobile ? handleCategory : null}
                className="px-3 py-1 bg-gray-700 flex items-center cursor-pointer group rounded-lg" >
                <div className="bg-transparent group absolute top-[7px] left-4 h-full px-20 py-1">

                </div>
                <span className="text-white text-lg">
                    {/* {click ? <FiX className=' animate-fade-rotate ' /> : <BiCategory className=' animate-fade-rotate-right ' />} */}
                    <div className="flex justify-center">
                        <button className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center  transform transition-all  duration-200 shadow-md">
                                <div className="flex flex-col  justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden">
                                    {
                                        !click ? (
                                            <div className="flex flex-col  justify-between w-[18px] h-[18px] transform transition-all duration-200 origin-center overflow-hidden">
                                                <div className={`bg-white h-[1.5px] w-5 transform transition-all duration-200 origin-left  ${click ? ' translate-x-10 ' : null}`}></div>
                                                <div className={`bg-white h-[1.5px] w-1/2 rounded transform transition-all duration-200  delay-75  ${click ? 'translate-x-10' : null}`}></div>
                                                <div className={`bg-white h-[2px] w-5 transform transition-all duration-300 origin-left delay-150  ${click ? 'translate-x-10 ' : null}`}></div>
                                            </div>
                                        ) : (
                                            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10
                                           flex w-0   ${click ? 'w-12 translate-x-0' : null}`}>
                                                <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-300 rotate-0 delay-200  ${click ? 'rotate-45' : null}`}></div>
                                                <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-300 -rotate-0 delay-200 ${click ? '-rotate-45' : null}`}></div>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        </button>
                    </div>


                </span >
                <span
                    className="capitalize ml-2  text-white">All Categories</span>


                {
                    !mobile && (

                        <div

                            className="absolute w-[100%] left-0 right-0 mx-auto top-full  bg-white shadow-md py-3  rounded-xl drop-shadow-lg
                  transition  flex flex-row  my-2 invisible group-hover:visible opacity-0 group-hover:opacity-100">
                            <div className=" border-r border-gray-300">
                                <div className="flex items-center mx-4 my-1 px-1 py-3  ">
                                    <span className="ml-6 text-gray-500  font-bold uppercase">Danh mục sản phẩm</span>
                                </div>

                                {
                                    CategoryListData.map((item, index) => (
                                        <CategoryList handleNavigate={() => handleCategoryClick(item.slug)} key={item.title} name={item.title} />
                                    ))
                                }
                            </div>

                            <div className="flex ">
                                <div className="">

                                </div>
                            </div>
                        </div>

                    )
                }

            </div >

        </>
    );
}

export default Category;