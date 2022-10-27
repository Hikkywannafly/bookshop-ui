import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { getBookData, getBookData3 } from '~/redux/Product/ProductRequest';
import Fillterbar from "~/components/Fillterbar/Fillterbar";
import Product from "~/components/Product/Product";
import { useSearchParams } from 'react-router-dom';
const Category = () => {
    const loading = useSelector((state) => state.bookdata.isFetching);
    const pagination = useSelector((state) => state.bookdata.pagination);
    const suppliers = useSelector((state) => state.bookdata.suppliers);
    const bookData = useSelector((state) => state.bookdata.data);
    let [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCategoryToggle = (slug) => {
        navigate(`/${slug}.html`);
    }
    const handleSort = async (value) => {

        searchParams.set("type", value.target.value);
        setSearchParams(searchParams, 'replaceIn');
    }
    const handleSelectPrice = (value) => {
        searchParams.set("price", value.target.value);
        setSearchParams(searchParams);
    }
    const handleSelectFrom = (value) => {
        searchParams.set("from", value.target.value);
        setSearchParams(searchParams);
    }
    const handleSelectSupplier = (value) => {
        searchParams.set("supplier", value.target.value);
        setSearchParams(searchParams);
    }
    useEffect(() => {
        let params = location.pathname.split('.html')[0];
        if (params && !location.search) {
            getBookData(params, dispatch)
            console.log(`test`, params);
        }

        if (location.search) {
            // const data = []
            // const test = location.search.split('?')[1].split('&').map((item) => {
            //     return data.push({ [item.split('=')[0]]: item.split('=')[1] })
            // });
            console.log(`test`, location.search);
            getBookData3(params, location.search, dispatch)
        }
    }, [location.pathname, dispatch, location]);
    return (
        <>

            <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">
                <div className="my-2 w-full ">
                    <h1 className='text-xs font-medium md:text-base uppercase'> Home </h1>
                </div>

                <div className="flex flex-col lg:flex-row md gap-5 ">
                    <Fillterbar loading={loading} suppliers={suppliers} handleSelectSupplier={handleSelectSupplier} handleSelectFrom={handleSelectFrom} handleSelectPrice={handleSelectPrice} handleCategoryToggle={handleCategoryToggle} locationname={location.pathname} />
                    <Product loading={loading} pagination={pagination} bookData={bookData} handleSort={handleSort} />
                </div>
            </div>

        </>
    );
}

export default Category;