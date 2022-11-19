import { useStateContext } from '~/hooks/useStateContext';
import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumb from '~/components/Breadcrumb';
import BookDetail from '~/components/Product/BookDetail';
import { useSelector, useDispatch } from "react-redux";
import { getBookDetail } from '~/redux/Product/ProductRequest';
import { useLocation, useNavigate, } from 'react-router-dom';

const Product = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookdata = useSelector((state) => state.bookdata.bookDetail);
    const loading = useSelector((state) => state.bookdata.isFetchingBookDetail);
    const handleGetbookDetail = async (slug) => {
        const res = await getBookDetail(slug, dispatch);
        if (res.status !== 'success' || res.book === null) {
            navigate(' ');
        }

    }

    useEffect(() => {
        let params = location.pathname.split('.html')[0];
        if (params && !location.search) {
            handleGetbookDetail(params)
        }
    }, [location.pathname, location.search,]);


    return (

        <>
            <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">
                <div className="my-2 w-full ">

                    {!loading && bookdata ?
                        <Breadcrumb params={[{
                            name: 'Home',
                            slug: '/'
                        }, {
                            name: bookdata?.category?.name,
                            slug: bookdata?.category.slug
                        },
                        {
                            name: bookdata?.sub_category?.name,
                            slug: `${bookdata?.category.slug}/${bookdata?.sub_category?.slug}`,
                        },
                        {
                            name: bookdata?.name,
                            slug: bookdata?.slug,
                        }]} /> : <Breadcrumb.Loading />
                    }
                </div>

                <div className="flex justify-center items-center flex-col lg:flex-row lg:items-start w-full bg-white rounded-lg p-4 relative ">
                    {
                        loading ? (

                            <BookDetail.Loading />

                        ) : (
                            <BookDetail bookdata={bookdata} />
                        )
                    }

                </div>
            </div>

        </>
    );
}

export default Product;