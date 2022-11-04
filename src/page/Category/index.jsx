import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { getBookData, getBookDataFillter } from '~/redux/Product/ProductRequest';
import Fillterbar from "~/components/Fillterbar/Fillterbar";
import Product from "~/components/Product/Product";
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
const Category = () => {
    const loading = useSelector((state) => state.bookdata.isFetching);
    const pagination = useSelector((state) => state.bookdata.pagination);
    const suppliers = useSelector((state) => state.bookdata.suppliers);
    const bookData = useSelector((state) => state.bookdata.data);
    const breadcrumbs = useSelector((state) => state.bookdata.breadcrumbs);
    const [fillter, setFillter] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCategoryToggle = (slug) => {
        navigate(`/${slug}.html`);
    }
    const handleSort = async (value) => {
        searchParams.set("sort", value.target.value);
        setSearchParams(searchParams, 'replaceIn');
    }
    const handleSelect = (value) => {
        searchParams.set(value.target.name, value.target.value);
        setSearchParams(searchParams);
        setFillter({ ...fillter, [value.target.name]: value.target.id });
    }
    const handleSelectPage = (value) => {
        searchParams.set("page", value);
        setSearchParams(searchParams);
    }
    const handleDeleteFilter = (key, value) => {
        searchParams.delete(key);
        setSearchParams(searchParams);
        delete fillter[key];
    }

    useEffect(() => {
        let params = location.pathname.split('.html')[0];
        if (params && !location.search) {
            getBookData(params, dispatch)
        }
        if (location.search) {
            getBookDataFillter(params, location.search, dispatch)
        }
    }, [location.pathname, dispatch, location, searchParams]);
    return (
        <>
            <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">
                <div className="my-2 w-full ">
                    {
                        !loading && breadcrumbs !== null ?
                            <Breadcrumb params={[{
                                name: 'Home',
                                slug: '/'
                            }, ...breadcrumbs]} />
                            : breadcrumbs === null ?
                                <Breadcrumb.Loading />
                                : <Breadcrumb params={[{
                                    name: 'Home',
                                    slug: '/'
                                }, ...breadcrumbs]} />
                    }
                </div>
                <section className="flex flex-col lg:flex-row md gap-5 ">
                    <Fillterbar fillter={fillter} handleSelect={handleSelect} loading={loading} suppliers={suppliers} handleCategoryToggle={handleCategoryToggle} locationname={location.pathname} />
                    <Product handleDeleteFilter={handleDeleteFilter} fillter={fillter} handleSelectPage={handleSelectPage} loading={loading} pagination={pagination} bookData={bookData} handleSort={handleSort} />
                </section >
            </div>
        </>
    );
}

export default Category;