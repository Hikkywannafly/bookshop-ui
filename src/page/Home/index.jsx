import React from 'react';
import { useState, useEffect } from 'react';
import { CategoryListData } from '../../dummy';
import { BiCategoryAlt } from 'react-icons/bi'
import Book from '~/components/Product/Book';
import axios from 'axios';
const Home = () => {
    const [book, setBook] = useState([]);
    const handleGetBook = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/category/all-category?sort=best');
        setBook(res.data.books.data);
    }
    useEffect(() => {
        handleGetBook();

    }, [])
    return (
        <>
            <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">

                <div className='flex gap-4 mt-3 mb-5'>
                    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src="https://cdn0.fahasa.com/media/wysiwyg/Manga-comic/Trang_Manga-Comic_Mainbanner_1920x750.jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">Mua Ngay</h5>
                                    <p>Ngày hội giảm giá truyện tranh</p>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="https://theme.hstatic.net/200000512817/1000864488/14/slide_1_img.jpg?v=149"
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="https://cdn0.fahasa.com/media/wysiwyg/Manga-comic/Trang_Manga-Comic_Mainbanner_1920x750.jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev  absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden bg-white">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-md">
                    <label className="text-lg font-semibold mt-5 flex gap-4 items-center border-b p-4"><BiCategoryAlt /> Danh mục sản phẩm</label>
                    <div className="flex flex-wrap gap-2 mt-5 justify-between p-5 rounded-md">
                        {CategoryListData.map((item, index) => (
                            <div className="items-center flex flex-col justify-center gap-4  p-3 " key={index}>
                                <p className="text-sm font-medium">{item.title}</p>
                                <img src={item.image} alt={item.title} className='w-32' ></img>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-md">
                    <label className="text-lg bg-pink-100 font-semibold mt-5 flex gap-4 items-center border-b p-4"><img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_dealhot.png" alt='asd'></img> Sản phẩm nổi bật</label>
                    <div className="border-b p-2 ml-4">
                        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-home3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                                    aria-selected="true">Xu hướng theo ngày</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-profile3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                                    aria-controls="tabs-profile3" aria-selected="false">Sách HOT - giảm giá sốc</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-messages3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                                    aria-controls="tabs-messages3" aria-selected="false">Commic</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="tabs-tabContent3">
                            <div className="tab-pane fade show active 5" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                                <div className="flex flex-wrap gap-6 justify-between p-5">
                                    {
                                        book?.length !== 0 && book?.map((book, index) => {
                                            return <Book key={book?.name} name={book?.name} img={book?.default_image} price={book?.price} discount={book?.discount} slug={book?.slug} rating={
                                                Array.isArray(book?.rating) ? (book?.rating[0]?.rating || null) : book?.rating
                                            }></Book>
                                        })
                                    }
                                </div>

                            </div>
                            <div className="tab-pane fade items-center" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                                <div className="flex flex-wrap gap-6 justify-between p-5 ">
                                    {
                                        book?.length !== 0 && book?.map((book, index) => {
                                            return <Book key={book?.name} name={book?.name} img={book?.default_image} price={book?.price} discount={book?.discount} slug={book?.slug} rating={
                                                Array.isArray(book?.rating) ? (book?.rating[0]?.rating || null) : book?.rating
                                            }></Book>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                                Không tìm thấy sản phẩm
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;