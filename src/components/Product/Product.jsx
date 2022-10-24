import Book from './Book';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import { getBookData } from '~/redux/Product/ProductRequest';
const Product = () => {
    const loading = useSelector((state) => state.bookdata.isFetching);
    const bookData = useSelector((state) => state.bookdata.data);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        let params = location.pathname.split('.html')[0];
        if (params) {
            getBookData(params, dispatch)
        }
    }, [location.pathname, dispatch]);
    return (<>
        <div
            style={{ zIndex: 0 }}
            className="bg-white w-full  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start ">
            <div className="m-2">
                <div className="border-b pb-3 flex flex-col gap-3 mb-4 ">
                    {/* <div className="">
                        <h1> Fillter by :</h1>
                    </div> */}
                    <div className="flex items-center gap-4">
                        <h1> Sort by :</h1>
                        <select

                            style={{ boxShadow: `rgb(0 0 0 / 5%) 0px 0px 1rem 0px` }}
                            className=" bg-white drop-shadow-xl  bg-opacity-60  w-36
                               text-gray-900  rounded-lg   p-1 outline-none">
                            <option>
                                Bán Chạy nhất
                            </option>
                            <option>
                                Giảm giá nhiều nhất
                            </option>
                            <option>
                                Bán chạy
                            </option>
                        </select>

                    </div>
                </div>



                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 lg:gap-8 w-full">
                    {
                        loading &&
                        (<Book.Loading ></Book.Loading>)
                    }
                    {
                        !loading && bookData?.map((book, inddex) => {
                            return <Book key={book.name} name={book.name} img={book.default_image} price={book.price} discount={book.discount}></Book>
                        })
                    }


                </div>
            </div>


        </div>
    </>);
}

export default Product;