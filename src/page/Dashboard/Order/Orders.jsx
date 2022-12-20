import react, { useEffect, useState } from 'react';
import Title from '~/components/Dashboard/Title';
import OrderTableTitle from '~/components/Chore/OrderTableTitle';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import SearchSuggestion from '~/components/Search';
import { useFetchData } from '~/hooks/useFetchData';
import Pagination from '~/components/Pagination';
import { getOrderData, getOrderData2 } from '~/redux/Admin/apiRequest';
import { statusOrder, status } from '~/dummy';
const Orders = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const axios = useFetchData();
    const navigate = useNavigate();
    const orderData = useSelector((state) => state.admindata.orderData);
    const loading = useSelector((state) => state.admindata.isFetchingOrder);
    let [searchParams, setSearchParams] = useSearchParams();
    const pagination = useSelector((state) => state.admindata.orderPagination);
    const handleGetOrderData = async () => {
        await getOrderData(axios, dispatch);
    }
    const handleGetOrderData2 = async () => {
        await getOrderData2(axios, dispatch);
    }
    const handleSelectPage = (value) => {
        searchParams.set("page", value);
        setSearchParams(searchParams);
    }
    const handleNavigate = (e) => {
        navigate(`/auth/orders/${e}`)
    }
    useEffect(() => {
        const params = location.pathname;
        if (params === `/auth/orders` && !location.search) {
            handleGetOrderData();
        }
        if (location.search) {
            // getBookDataFillter(axios, dispatch, location.search)
        }
        //    call api when database update

    }, [location.pathname]);

    return (
        <>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Title category="Page" title="Orders" />
                <div className="flex items-center justify-between m-2 h-7 text-sm mb-5 ">
                    <SearchSuggestion />
                    <div className="flex items-center gap-3">

                    </div>
                </div>
                <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                    role="tablist">
                    {
                        statusOrder.map((item, index) => (
                            <li
                                key={index}
                                className="nav-item flex-auto text-center" role="presentation">
                                <a href="#tabs-homeFill" className={`nav-link w-full block font-medium text-xs leading-tight
                        uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${index === 0 ? "active" : null}`}
                                    id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab" aria-controls="tabs-homeFill" aria-selected="true">
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex flex-col">
                    <div className="overflow-hidden sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b ">
                                    <OrderTableTitle />
                                </thead>
                                <tbody>
                                    {
                                        orderData?.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-400">#{item.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700">{item.recipient}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                                                    {Number(item.total_price.split('.')[0]).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })
                                                    }</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">{
                                                    item.created_at.split('T')[0]} | {item.created_at.split('T')[1].split('.')[0]}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 truncate w-40">{item.payment.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {
                                                        status.map((e, i) => (
                                                            e.id === item.status ?
                                                                (
                                                                    <div key={index} className="">
                                                                        <span className={`px-2 w-20 items-center justify-center  inline-flex text-xs leading-5 font-semibold rounded-md ${e.color} ${e.text} `}>
                                                                            {e.name}
                                                                        </span>
                                                                    </div>
                                                                ) : null
                                                        ))
                                                    }
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <FaExternalLinkAlt className='cursor-pointer text-blue-500 hover:text-blue-700'
                                                        onClick={() => handleNavigate(item.id)}
                                                    />
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className="w-full flex items-center justify-center p-3 mt-3">
                                <div className="w-full flex items-center justify-center p-3 mt-3 relative ">


                                    {
                                        !loading &&
                                        orderData?.length > 0 &&
                                        <Pagination handleSelectPage={handleSelectPage} totalCount={pagination?.total} totalPageCount={pagination?.totalPages} currentPage={pagination?.currentPage} previous={pagination.links?.previous} next={pagination.links?.next} ></Pagination>
                                    }
                                    <div className="justify-start text-sm absolute left-0 text-slate-800  ">
                                        Hiển thị {pagination?.count} của {pagination?.total} kết quả
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Orders;