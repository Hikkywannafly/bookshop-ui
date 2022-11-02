import Book from './Book';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { sort } from '~/dummy';
import Pagination from '../Pagination';
const Product = (props) => {
    const { loading, bookData, pagination, handleSort, handleSelectPage, fillter, handleDeleteFilter, } = props;
    console.log(`redender`);
    return (<>
        <div
            style={{ zIndex: 0 }}
            className="bg-white w-full  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start ">
            <div className="m-2">
                <div className="border-b pb-3 flex flex-col gap-4 mb-4 ">
                    {Object.keys(fillter).length !== 0 &&
                        < div className="flex gap-3 items-center">
                            <h1> Fillter by :</h1>

                            {
                                Object.entries(fillter).map(([key, value]) => {
                                    return (
                                        <div
                                            key={key}
                                            style={{ backgroundColor: ` rgba(247, 148, 30, 0.1)` }}
                                            className=" px-4 p-2 rounded-lg text-orange-600 flex items-center gap-2 capitalize">
                                            {key} : {value}
                                            <AiFillCloseCircle
                                                onClick={() => { handleDeleteFilter(key, value) }}
                                                className='cursor-pointer text-base' />
                                        </div>
                                    )
                                })
                            }
                        </div>}
                    <div className="flex items-center gap-4 mb-2">
                        <h1> Sort by :</h1>
                        <select
                            onChange={handleSort}
                            style={{ boxShadow: `rgb(0 0 0 / 5%) 0px 0px 1rem 0px` }}
                            className=" bg-white drop-shadow-xl  bg-opacity-60  w-40
                               text-gray-900  rounded-lg   p-1 outline-none">
                            {sort.map((item, index) => {
                                return <option key={index} value={item.value}>{item.name}</option>
                            })}
                        </select>

                    </div>
                </div>
                {

                    !loading && (bookData?.length === 0 || bookData === null) && (

                        <div className="flex flex-col items-center justify-center w-full">
                            <img className="w-20" src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png' alt='Not Found'></img>

                            <h1 className="font-medium ">  Không tìm thấy sản phẩm nào cả</h1>
                            <h1 className="text-gray-400 ">  Vui lòng thử lại !!</h1>
                        </div>
                    )
                }
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5  w-full relative">
                    {
                        loading &&
                        (<Book.Loading ></Book.Loading>)
                    }
                    {
                        !loading && bookData?.length !== 0 && bookData?.map((book, index) => {
                            return <Book key={book?.name} name={book?.name} img={book?.default_image} price={book?.price} discount={book?.discount} slug={book?.slug} rating={book?.rating}></Book>
                        })
                    }

                </div>
                {
                    !loading && bookData?.length !== 0 && bookData?.length > 0 && (
                        <div className="w-full flex items-center justify-center p-3 mt-3">
                            <Pagination handleSelectPage={handleSelectPage} totalCount={pagination.total} totalPageCount={pagination.totalPages} currentPage={pagination.currentPage} previous={pagination.links?.previous} next={pagination.links?.next} ></Pagination>
                        </div>
                    )
                }

            </div>


        </div>
    </>);
}

export default Product;