import LoadingSkeleton from "../Animation/LoadingSkeleton";
import AuthButton from "../Input/AuthButton";
import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react';
import { useEffect } from "react";
const BookDetail = ({ bookdata }) => {
    const [toggler, setToggler] = useState(false);
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
            setImages([bookdata.default_image, ...bookdata?.images.map(item => item.image_address)])

        }
    }, [bookdata])
    console.log(images)

    return (
        <>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={images}
                slide={lightboxController.slide}
            />
            <div className='flex flex-col items-center w-[484px] mx-3 mr-6'>
                <div className=" flex items-center">
                    <div className="w-[76px] flex flex-col gap-3">
                        {
                            images?.filter((item, index) => index < 4).map((item, index) => {
                                return (
                                    <img key={index}
                                        onClick={() => openLightboxOnSlide(index + 1)}
                                        className='w-[76px] h-[76px] hover:border rounded-lg border-orange-300 duration-200 '
                                        src={item} alt='test '></img>
                                )

                            })
                        }
                        {
                            images?.length > 4 && <div
                                onClick={() => openLightboxOnSlide(5)}
                                className='w-[76px] h-[76px] bg-gray-200 hover:border text-lg
                                        border-orange-300 duration-200  rounded-lg flex items-center justify-center'>
                                <p className='text-gray-400'>+{images.length - 4}</p>
                            </div>

                        }
                    </div>
                    <div className="h-[400px] w-[400px] flex justify-center items-center">
                        <img
                            onClick={() => openLightboxOnSlide(1)}
                            className='max-h-[392px] max-w-[100%] h-full w-full' src={`${bookdata.default_image}`} alt='test '></img>
                    </div>
                </div>
                <div className="">
                    <AuthButton name="Them" />
                </div>
            </div>
            <div className="w-full">
                <div className="text-lg font-normal tracking-wide ">
                    <h1>Spotify Và Những Chuyện Chưa Kể - Hành Trình Đánh Bại Apple, Google Và Amazon Trong Cuộc Đua Âm Thanh Số Của Nhà Sáng Lập Daniel Ek </h1>
                </div>
            </div>
        </>
    );
}
const Loading = () => {

}
BookDetail.Loading = Loading;

export default BookDetail;