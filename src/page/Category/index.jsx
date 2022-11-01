import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { getBookData, getBookData3 } from '~/redux/Product/ProductRequest';
import Fillterbar from "~/components/Fillterbar/Fillterbar";
import Product from "~/components/Product/Product";
import { useStateContext } from '~/hooks/useStateContext';
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
        // setFillter({ ...fillter, [value]: "" });
        delete fillter[key];
        // console.log(value);
    }
    console.log(breadcrumbs);

    useEffect(() => {
        let params = location.pathname.split('.html')[0];
        if (params && !location.search) {
            getBookData(params, dispatch)

        }
        if (location.search) {
            getBookData3(params, location.search, dispatch)
            // console.log(`fillter test`, fillter);
            // setFillter({
            //     ...fillter,
            //     price: searchParams.get("price"),
            //     from: searchParams.get("from"),
            //     supplier: searchParams.get("supplier")
            // });
            // console.log(`test`, fillter);
            if (fillter.length === 0) {
                // setFillter({
                //     ...fillter,
                //     price: searchParams.get("price"),
                //     from: searchParams.get("from"),
                //     supplier: searchParams.get("supplier")
                // });
                // console.log(`test`, searchParams.get("price"));
            }
        }
    }, [location.pathname, dispatch, location, searchParams]);
    return (
        <>

            <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">
                <Breadcrumb params={[{
                    name: 'Home',
                    slug: '/'
                }, ...breadcrumbs]} />

                {/* <div className="my-2 w-full flex gap-1.5 items-center ">

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
                </div> */}

                <div className="flex flex-col lg:flex-row md gap-5 ">
                    <Fillterbar fillter={fillter} handleSelect={handleSelect} loading={loading} suppliers={suppliers} handleCategoryToggle={handleCategoryToggle} locationname={location.pathname} />
                    <Product handleDeleteFilter={handleDeleteFilter} fillter={fillter} handleSelectPage={handleSelectPage} loading={loading} pagination={pagination} bookData={bookData} handleSort={handleSort} />
                </div>
            </div>

        </>
    );
}

export default Category;