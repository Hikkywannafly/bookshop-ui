import { useStateContext } from '~/hook/useStateContext';
import React, { useState, useEffect } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import BookDetail from '~/components/Product/BookDetail';
import { useSelector, useDispatch } from "react-redux";
import { getBookDetail } from '~/redux/Product/ProductRequest';
import { useLocation, useNavigate } from 'react-router-dom';
const Product = () => {
    const { link } = useStateContext();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookdata = useSelector((state) => state.bookdata.bookDetail);
    const loading = useSelector((state) => state.bookdata.isFetchingBookDetail);
    const handleGetbookDetail = async (slug) => {
        const res = await getBookDetail(slug, dispatch);
        if (res.status !== 'success' || res.book === null) {
            navigate('*');
        }

    }
    useEffect(() => {
        let params = location.pathname.split('.html')[0];
        if (params && !location.search) {
            handleGetbookDetail(params)
        }
    }, [location.pathname, location.search]);
    return (

        <>
            {!loading && <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">
                <div className="my-2 w-full ">
                    <div className="my-2 w-full flex gap-1.5 items-center ">

                        {
                            link?.map((item, index) => {
                                if (index === 0) return <React.Fragment key={index}>
                                    <h1 key={index} className='uppercase'> Home </h1>
                                </React.Fragment>
                                return (
                                    <React.Fragment key={index}>
                                        <RiArrowDropRightLine className='text-lg text-gray-600' />
                                        <h1 className=' uppercase'> {item} </h1>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex w-full bg-white rounded-lg p-4 relative ">
                    <BookDetail bookdata={bookdata} />
                </div>
            </div>}
        </>
    );
}

export default Product;