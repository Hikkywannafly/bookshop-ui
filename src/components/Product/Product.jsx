import Book from './Book';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { sort } from '~/dummy';
import Pagination from '../Pagination';
import { SelectUI, SelectBar } from '../Input';
const Product = (props) => {
    const { loading, bookData, pagination, handleSort, handleSelectPage, fillter, handleDeleteFilter, search } = props;
    return (<>
        <div
            style={{ zIndex: 0 }}
            className="bg-white w-full  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start ">
            <div className="m-2">
                <div className="border-b pb-3 flex flex-col gap-4 mb-4 ">
                    {search.length > 0 ? <div className="flex gap-3 items-center">
                        <h1 className="font-medium"> Kết quả tìm kiếm cho :</h1>
                        <div className="flex gap-2 items-center">
                            <h1 className="font-medium"> {search} </h1>
                        </div>
                    </div> : null}

                    {Object.keys(fillter).length !== 0 &&
                        <div className="flex gap-3 items-center">
                            <h1> Fillter by :</h1>
                            {
                                Object.entries(fillter).map(([key, value]) => {
                                    if (key === 'search') {
                                        return null;

                                    };
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
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <div className="">
                                <h1 className="mt-2"> Sort by :</h1>
                            </div>
                            <SelectBar
                                options={sort.map((item, index) => { return { value: item.value, name: item.name } })}
                                handleSort={handleSort}
                            />
                        </div>
                        <div className="mt-2">
                            Hiển thị {pagination?.count} của {pagination?.total} kết quả
                        </div>
                    </div>

                </div>
                {

                    !loading && (bookData?.length === 0 || bookData === null) && (

                        <div className="flex flex-col items-center justify-center w-full">
                            <img className="w-20" src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png' alt='Not Found'></img>

                            <h1 className="font-medium "> Không tìm thấy sản phẩm nào cả</h1>
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
                            return <Book key={book?.name} name={book?.name} img={book?.default_image} price={book?.price} discount={book?.discount} slug={book?.slug} rating={
                                Array.isArray(book?.rating) ? (book?.rating[0]?.rating || null) : book?.rating
                            }></Book>
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