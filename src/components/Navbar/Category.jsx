import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '~/hooks/useStateContext';
import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import { CategoryListData } from '~/dummy';
const Category = () => {
    const navigate = useNavigate();
    const { mobile, handleClick, isClicked } = useStateContext();
    const handleCategoryClick = (slug) => {
        navigate(`/${slug}.html`);
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div
                onClick={mobile ? () => handleClick(`navCategory`) : null}
                className="px-3 py-1 bg-gray-700 flex items-center cursor-pointer group rounded-lg" >
                <div className="bg-transparent group absolute top-[3px] left-4 h-full px-20 py-1">

                </div>
                <span className="text-white text-lg">

                    <div className="flex justify-center">
                        <button className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center  transform transition-all  duration-200 shadow-md">
                                <div className="flex flex-col  justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden">
                                    {
                                        !isClicked.navCategory ? (
                                            <div className="flex flex-col  justify-between w-[18px] h-[18px] transform transition-all duration-200 origin-center overflow-hidden">
                                                <div className={`bg-white h-[1.5px] w-5 transform transition-all duration-200 origin-left  ${isClicked.navCategory ? ' translate-x-10 ' : null}`}></div>
                                                <div className={`bg-white h-[1.5px] w-1/2 rounded transform transition-all duration-200  delay-75  ${isClicked.navCategory ? 'translate-x-10' : null}`}></div>
                                                <div className={`bg-white h-[2px] w-5 transform transition-all duration-300 origin-left delay-150  ${isClicked.navCategory ? 'translate-x-10 ' : null}`}></div>
                                            </div>
                                        ) : (
                                            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10
                                           flex w-0   ${isClicked.navCategory ? 'w-12 translate-x-0' : null}`}>
                                                <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-300 rotate-0 delay-200  ${isClicked.navCategory ? 'rotate-45' : null}`}></div>
                                                <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-300 -rotate-0 delay-200 ${isClicked.navCategory ? '-rotate-45' : null}`}></div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </button>
                    </div>
                </span>
                <span
                    className="capitalize ml-2 hover:block  text-white">All Categories</span>
                {
                    !mobile && (

                        <div
                            className={`absolute w-[100%] left-0 right-0 mx-auto top-[86%]  bg-white shadow-md py-3  rounded-xl drop-shadow-lg
                  transition  flex flex-row  my-2 invisible  group-hover:visible  opacity-0 group-hover:opacity-100 `}>
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
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Category;