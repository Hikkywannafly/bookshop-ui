import LoadingSkeleton from "../Animation/LoadingSkeleton";
import AuthButton from "../Input/AuthButton";
import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react';
const BookDetail = () => {
    const [toggler, setToggler] = useState(false);
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

    return (
        <>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    'https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg',
                    'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/spotify_va_nhung_chuyen_chua_ke___hanh_trinh_danh_bai_apple__google_va_amazon_trong_cuoc_dua_am_thanh_so_cua_nha_sang_lap_daniel_ek/2022_10_21_08_49_17_2-390x510.jpg',
                    'https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg',
                ]}
                slide={lightboxController.slide}
            />
            <div className='flex flex-col items-center w-[484px] mx-3 mr-6'>
                <div className=" flex items-center">
                    <div className="w-[76px] flex flex-col gap-3">
                        <img
                            onClick={() => openLightboxOnSlide(1)}
                            className='w-[76px] h-[76px] hover:border rounded-lg border-orange-300 duration-200 ' src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg' alt='test '></img>
                        <img
                            onClick={() => openLightboxOnSlide(2)}
                            className='w-[76px] h-[76px] hover:border rounded-lg border-orange-300 duration-200 ' src='https://cdn0.fahasa.com/media/flashmagazine/images/page_images/spotify_va_nhung_chuyen_chua_ke___hanh_trinh_danh_bai_apple__google_va_amazon_trong_cuoc_dua_am_thanh_so_cua_nha_sang_lap_daniel_ek/2022_10_21_08_49_17_2-390x510.jpg' alt='test '></img>
                        <img className='w-[76px] h-[76px] hover:border rounded-lg border-orange-300 duration-200 ' src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg' alt='test '></img>
                        <img className='w-[76px] h-[76px] hover:border rounded-lg border-orange-300 duration-200 ' src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg' alt='test '></img>
                        <div className=" flex items-center 
                    justify-center w-[76px] h-[76px] hover:border rounded-lg bg-gray-700 opacity-50 border-orange-300 duration-200">
                            <span className='text-white text-2xl font-medium'>+4</span>
                        </div>
                    </div>
                    <div className="h-[400px] w-[400px] flex justify-center items-center">
                        <img
                            onClick={() => setToggler(!toggler)}
                            className='max-h-[392px] max-w-[100%] h-full w-full' src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg' alt='test '></img>
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