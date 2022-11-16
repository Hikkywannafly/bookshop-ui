import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react';
import { useEffect } from "react";
import Button from "../Input/Button";
import { FiShoppingCart } from 'react-icons/fi'
import BookDetailSkeleton from './BookDetailSkeleton';
const BookDetail = ({ bookdata }) => {
    const [images, setImages] = useState([]);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }
    useEffect(() => {
        if (bookdata) {
            setImages([bookdata?.default_image, ...bookdata?.images.map(item => item.image_address)])

        }
    }, [bookdata])
    return (
        <>
            {bookdata &&
                <>
                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={images}
                        slide={lightboxController.slide}
                        className='w-full h-full absolute z-[1000]'


                    />
                    <div className='flex flex-col items-center w-[484px] mx-3 mr-8'>
                        <div className=" flex items-center">
                            <div className="w-[76px] hidden lg:block lg:flex flex-col gap-3 ">
                                {
                                    images?.filter((item, index) => index < 4).map((item, index) => {
                                        return (
                                            <img key={index}
                                                onClick={() => openLightboxOnSlide(index + 1)}
                                                className='w-[76px] h-[76px] hover:border hover:animate-pulse cursor-pointer rounded-lg border-orange-300 duration-200 '
                                                src={item} alt='test '></img>
                                        )

                                    })
                                }
                                {
                                    images?.length > 4 && <div
                                        onClick={() => openLightboxOnSlide(5)}
                                        className='w-[76px] h-[76px] bg-gray-200 hover:border text-lg
                                        border-orange-300 duration-200  rounded-lg flex items-center cursor-pointer justify-center'>
                                        <p className='text-gray-400'>+{images.length - 4}</p>
                                    </div>

                                }
                            </div>
                            <div className="h-[400px] w-[400px] flex justify-center items-center">
                                <img
                                    onClick={() => openLightboxOnSlide(1)}
                                    className=' cursor-pointer  max-h-[392px] max-w-[100%] h-full w-full' src={`${bookdata?.default_image}`} alt='test '></img>
                            </div>
                        </div>
                        <br />
                        <div className="hidden lg:block lg:flex lg:flex-row gap-3 w-full">
                            <Button content={`Thêm vào giỏ `} icon={<FiShoppingCart className="text-lg" />} color='bg-gray-200 text-black border-slate-800 border-2  ' />
                            <Button content={`Mua ngay `} color=' bg-slate-800 border-2 border-slate-800' />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-lg tracking-wide font-medium border-b border-gray-100 py-4 pr-4">
                            <h1>{bookdata?.name} </h1>
                        </div>
                        <div className=" border-b border-gray-100 py-4 pr-4 flex justify-between  ">
                            <div className="">
                                <h1 className="mb-3">Nhà xuất bản: <span className="font-medium ">{bookdata?.book_detail?.publisher} </span> </h1>

                                <h1>Nhà cung cấp: <span className="font-medium ">{bookdata?.supplier?.name} </span> </h1>
                            </div>
                            <div className="">
                                <h1 className="mb-3">Tác giả: <span className="font-medium"> {bookdata?.book_detail?.author} </span></h1>

                                <h1>Hình thức bìa: <span className="font-medium">{bookdata?.formality?.name} </span></h1>
                            </div>


                        </div>

                        <div className=" border-b border-gray-100 py-4 pr-4  flex w-full justify-start items-center mt-2.5 mb-2">
                            {
                                Array(Math.ceil(bookdata.rating.rating || 0))
                                    .fill(0)
                                    .map((item, index) => (
                                        <svg key={`ds` + index} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    ))
                            }

                            {
                                Array(Math.ceil(5 - (bookdata.rating.rating || 0)))
                                    .fill(0)
                                    .map((item, index) => (
                                        <svg key={`dgf` + index} aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    ))
                            }


                            < span className="bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 items-center">{Math.ceil(bookdata?.rating?.rating || 0)}.0</span>
                        </div>
                        <div className=" border-b border-gray-100  py-4 pr-4  flex w-full justify-start items-center mt-2.5 mb-2 gap-5 ">
                            <span className=" font-medium text-3xl text-rose-600 ">{Math.ceil(bookdata.price - (bookdata.price * bookdata.discount) / 100).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                            {bookdata.discount !== 0 &&
                                <span className="  text-xl text-gray-600  line-through "> {bookdata.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                            }
                            {
                                bookdata.discount !== 0 && (
                                    <div className=" font-bold  pt-0.5 text-base w-10 h-7 rounded-lg flex items-center justify-center bg-rose-600 text-white ">
                                        {bookdata.discount}%
                                    </div>

                                )
                            }
                        </div>
                        <div className="font-medium border-b border-gray-100 py-4 pr-4 flex items-center gap-3">
                            <h1>Số lượng sản phẩm: </h1>
                            <div className="custom-number-input h-10 w-32">
                                <div className="flex flex-row h-10 w-full rounded-lg  bg-transparent mt-1">
                                    <button className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" value="0"></input>
                                    <button className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            }
        </>
    );
}
const Loading = () => {
    return (
        <BookDetailSkeleton />
    );
}
BookDetail.Loading = Loading;

export default BookDetail;