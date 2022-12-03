import DashboardPage from '~/components/Layout/Dashboard';
import Button from '~/components/Dashboard/Button';
import { RiAddCircleFill } from 'react-icons/ri';
import { getBookDataAuth, getBookDataFillter, deleteBookData } from '~/redux/Admin/apiRequest';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useStateContext } from '~/hooks/useStateContext';
import { BiExport } from 'react-icons/bi';
import { BasicMenu } from '~/components/Button';
import Pagination from '~/components/Pagination';
import toast from 'react-hot-toast';
import AdminTableTitle from '~/components/Chore/AdminTableTitle';
import LoadingSkeleton from '~/components/Animation/LoadingSkeleton';
import Search from '~/components/Input/Search';
import { fillter, CategoryListData } from '~/dummy';
import Select from '~/components/Input/Select';
import { useFetchData } from '~/hooks/useFetchData';
import { ModelDialog2 } from '~/components/Button';
const Product = () => {
    const { currentColor } = useStateContext();
    let [searchParams, setSearchParams] = useSearchParams();
    const loading = useSelector((state) => state.admindata.isFetching);
    const pagination = useSelector((state) => state.admindata.pagination);
    const bookData = useSelector((state) => state.admindata.data);
    const statistics = useSelector((state) => state.admindata.statistics);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({
        name: '',
        id: ''
    });
    const location = useLocation();
    const dispatch = useDispatch();
    const axios = useFetchData();
    const handleSelectPage = (value) => {
        searchParams.set("page", value);
        setSearchParams(searchParams);
    }
    const handleGetBook = async () => {
        await getBookDataAuth(axios, dispatch);
    }
    const handleDeleteBook = async (id) => {
        toast.promise(
            deleteBookData(axios, id, dispatch)
            , {
                loading: 'Loading ...',
                success: (data) => {
                    if (data.status !== 'success') throw new Error(data.message);
                    return 'Xóa thành công';
                },
                error: (err) => {
                    return err.message;
                }
            });
        console.log(id)
    }
    const handleDelete = async (id, name) => {
        setValue({
            name: name,
            id: id
        });
        setOpen(true);
    }
    useEffect(() => {
        const params = location.pathname;
        if (params === `/auth/product` && !location.search) {
            handleGetBook();
        }
        if (location.search) {
            getBookDataFillter(axios, dispatch, location.search)
        }
    }, [location.pathname, searchParams]);

    return (
        <>
            <DashboardPage title="Product List" category="Product">
                <ModelDialog2 open={open} setOpen={setOpen} value={value} handleDelete={handleDeleteBook} />
                <div className="flex gap-3">
                    <Button
                        bgColor='white'
                        icon={<BiExport />}
                        text="Xuất File"
                        size='sm'
                    />
                    <Button
                        bgColor={currentColor}
                        color='white'
                        icon={<RiAddCircleFill />}
                        text="Thêm Mới"
                        size='sm'
                        link='/auth/product/add-product'
                    />
                </div>
                <div className="flex items-center justify-between m-6 h-7 text-sm">
                    <div className="h-3 max-w-[400px] w-full">
                        <Search />
                    </div>
                    <div className="flex items-center gap-3">
                        <Select options={fillter} title='Show:' />
                        <Select options={
                            [
                                { slug: 'all-category', title: 'All category' },
                                ...CategoryListData.map(item => ({ slug: item.slug, title: item.title }))
                            ]
                        }
                            title='Category:' />
                        <Select options={
                            CategoryListData.map((item) => {
                                return { title: item.title, slug: item.slug }
                            })
                        }
                            title='Sub Category:' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-hidden sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b ">
                                    <AdminTableTitle />
                                </thead>
                                <tbody>
                                    {
                                        !loading ? bookData?.map((item, index) => (
                                            < tr
                                                key={index}
                                                className="border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">#{item.id}</td>

                                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap overflow-x-hidden   ">
                                                    <Link
                                                        to={`/auth/product/${item.slug}`}
                                                        className="flex items-center gap-4 ">
                                                        <img src={item.default_image} alt="" className="w-40 h-40 object-cover" />
                                                        <div className="flex flex-col gap-2 w-60  ">
                                                            <span className="text-sm font-medium">{item.name.length > 50 ? item.name.slice(0, 50) + "..." : item.name}</span>
                                                            <span className="text-sm">Current discount:&nbsp; <span className="text-blue-600 font-medium"> {item.discount}%</span></span>
                                                            <span className="text-sm">Price:&nbsp;
                                                                <span className=" font-medium text-rose-600 ">{item.price.toLocaleString('vi-VI',
                                                                    { style: 'currency', currency: 'VND' })}</span></span>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
                                                    <div className="flex flex-col justify-start gap-2 items-end">
                                                        {item.quantity}
                                                        <span className="text-sm  text-gray-500">{((item.quantity / statistics[0].total_quantity) * 100).toFixed(2)} % off all</span>
                                                    </div>

                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                    <div className="flex flex-col justify-start gap-2 items-end">
                                                        {item.sold}
                                                        <span className="text-sm  text-gray-500">{(Math.ceil(item.sold / statistics[0].total_sold) * 100).toFixed(2)} % off all</span>
                                                    </div>

                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td className="px-6 w-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <BasicMenu handleDelete={handleDelete} id={item.id} name={item.name} />
                                                </td>
                                            </tr>

                                        )) : <TableSkeleton />
                                    }
                                </tbody>
                            </table>
                            <div className="w-full flex items-center justify-center p-3 mt-3">
                                {
                                    !loading && <Pagination handleSelectPage={handleSelectPage} totalCount={pagination?.total} totalPageCount={pagination?.totalPages} currentPage={pagination?.currentPage} previous={pagination.links?.previous} next={pagination.links?.next} ></Pagination>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </DashboardPage>
        </>
    );
}

const TableSkeleton = () => {
    return (
        Array(5).fill(0).map((item, index) => (
            < tr
                key={index}
                className="border-b">
                <td className="px-6 py-4 ">
                    <LoadingSkeleton width="100%" height="20px" className='w-2 h-5 ' />
                </td>

                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap overflow-x-hidden   ">
                    <div className="flex items-center gap-4 ">
                        <LoadingSkeleton className='w-40 h-40 ' width="100px" height="100px" />
                        <div className="flex flex-col gap-2 w-60 ">
                            <LoadingSkeleton className='w-80 h-5 ' width="100%" height="20px" />
                            <LoadingSkeleton className='w-40 h-5 ' width="100%" height="20px" />
                            <LoadingSkeleton className='w-40 h-5 ' width="100%" height="20px" />
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
                    <div className="flex flex-col justify-start gap-2 items-end">
                        <LoadingSkeleton className='w-24 h-5 ' width="100%" height="20px" />
                    </div>

                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex flex-col justify-start gap-2 items-end">
                        <LoadingSkeleton className='w-24 h-5 ' width="100%" height="20px" />
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td className="px-6 w-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
            </tr>
        ))
    );
}


export default Product;