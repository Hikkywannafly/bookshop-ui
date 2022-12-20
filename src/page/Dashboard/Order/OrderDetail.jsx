import DashboardPage from '~/components/Layout/Dashboard';
import react, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useFetchData } from '~/hooks/useFetchData';
import Pagination from '~/components/Pagination';
import { getOrderDetail } from '~/redux/Admin/apiRequest';
import { FaFileExport } from 'react-icons/fa';
import { status } from '~/dummy';
import axios1 from 'axios';
const OrderDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const axios = useFetchData();
    const [address, setAddress] = useState({
        user: {
            w: '',
            d: '',
            p: '',
        },
        recipent: {
            w: '',
            d: '',
            p: '',
        }
    });
    const [money, setMoney] = useState({
        total: 0,
        shipping: 0,
        save: 0
    });
    const data = useSelector((state) => state.admindata.orderDetailData);
    const dispatch = useDispatch();
    useEffect(() => {
        let params = location.pathname.split('/auth/orders/')[1];
        getOrderDetail(axios, dispatch, params);
    }, []);
    const getNameAddress = async (symp, code) => {
        const res = await axios1.get(`https://provinces.open-api.vn/api/${symp}/${code}`);
        return res.data.name;
    }
    useEffect(() => {
        if (data) {
            setNameAddress(data);
        }
    }, [data]);
    const setNameAddress = async (data) => {
        let user = {
            w: await getNameAddress('w', data?.user?.user_detail?.ward),
            d: await getNameAddress('d', data?.user?.user_detail?.district),
            p: await getNameAddress('p', data?.user?.user_detail?.province),
        }
        let recipent = {
            w: await getNameAddress('w', data?.ward),
            d: await getNameAddress('d', data?.district),
            p: await getNameAddress('p', data?.province),
        }
        setAddress({
            user: user,
            recipent: recipent
        })
    }

    useEffect(() => {
        if (data.order_items) {
            let total = 0;
            let save = 0;
            data?.order_items?.forEach((item) => {
                total += (item.book.price - item.book.price * (item.book.discount / 100)) * item.quantity;
                save += item.book.price * item.quantity * (item.book.discount / 100);
            });
            setMoney({
                total,
                shipping: 0,
                save
            });
        }
    }, [data]);
    console.log(data);
    return (
        <DashboardPage title="Order Detail" category="Order">

            <div className="flex gap-4 mb-4">
                {/* accpect cancel */}
                <button type="button" className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Duyệt đơn</button>
                {/* <button type="button" className="inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Vận chuyển </button> */}
                <button type="button" className="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Hủy đơn</button>

                <button type="button" class="inline-block px-4 py-1.5 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex">
                    <FaFileExport className="mr-2 items-center mt-0.5" />
                    Xuất hóa đơn
                </button>


            </div>
            <div className="">
                <div className="my-3 rounded-lg w-full bg-white p-4">
                    <div className="w-full border-b pb-2 mb-4">
                        <label className="uppercase font-medium">Trạng thái đơn hàng</label>

                    </div>
                    {
                        status.map((e, i) => (
                            e.id === data?.status ?
                                (
                                    <div key={i} className="flex gap-5">
                                        <span className={`px-2  items-center justify-center text-base  inline-flex  leading-5 font-semibold rounded-md ${e.color} ${e.text} `}>
                                            {e.name}
                                        </span>
                                        <p className="text-sm italic text-slate-900">{data?.updated_at.split('T')[0]} | {data?.updated_at.split('T')[1].split('.')[0]}</p>
                                    </div>
                                ) : null
                        ))
                    }
                </div>

            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-4 w-3/4">
                    <div className="gap-4 flex flex-col  border p-5 rounded-md">
                        <label className="text-sm font-medium text-blue-600">Thông tin người đặt hàng</label>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <label className="text-sm  text-gray-600 w-36">Họ và tên (User Name) </label>
                                <p className="text-sm font-medium">{data?.user?.name}</p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Địa chỉ </label>
                                <p className="text-sm">
                                    {data?.user?.user_detail?.address} <span className='text-gray-500 '> / </span>  {address?.user?.w}<span className='text-gray-500 '> / </span>{address?.user?.d} <span className='text-gray-500 '> / </span>{address?.user?.p}

                                </p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Số điện thoại</label>
                                <p className="text-sm">{data?.user?.phone} </p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Email </label>
                                <p className="text-sm">{data?.user?.email}</p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Đặt hàng vào lúc </label>
                                <p className="text-sm italic text-slate-900">{data?.created_at.split('T')[0]} | {data?.created_at.split('T')[1].split('.')[0]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 flex flex-col  border p-5 rounded-md">
                        <label className="text-sm font-medium text-blue-600">Thông tin người nhận hàng</label>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Họ và tên </label>
                                <p className="text-sm font-medium">{data?.recipient}</p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Địa chỉ </label>
                                <p className="text-sm">

                                    {data?.address} <span className='text-gray-500 '> / </span>  {address?.recipent?.w}<span className='text-gray-500 '> / </span>{address?.recipent?.d} <span className='text-gray-500 '> / </span>{address?.recipent?.p}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Số điện thoại </label>
                                <p className="text-sm">{data?.phone}</p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Email </label>
                                <p className="text-sm">{data?.email}</p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Ghi chú </label>
                                <p className="text-sm">{data?.note}</p>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-sm text-gray-600 w-36">Đã nhận vào lúc </label>
                                <p className="text-sm"></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-1/4 h-full ">
                    <div className="gap-4 flex flex-col  border p-5 rounded-md">
                        <label className="text-sm font-medium text-orange-400">Thông tin Vận chuyển</label>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">Giao hàng tiêu chuẩn (18.000 đ)</p>
                            </div>
                        </div>
                        <label className="text-sm font-medium text-green-600">Phương thức thanh toán</label>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">

                                <p className="text-sm font-medium"> {data?.payment?.name}</p>
                            </div>
                        </div>
                        {/* <label className="text-sm font-medium text-red-600">Tổng tiền</label> */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between pb-3 border-b my-2">
                                    <p>Thành tiền</p>
                                    <span className=" ">{money.total.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>

                                </div>
                                <div className="flex justify-between pb-3 border-b my-2 text-sm">
                                    <p>Phí vận chuyển </p>
                                    <span className=" ">{(18000).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                                <div className="flex items-center justify-between border-b ">
                                    <p >Tổng số tiền </p>
                                    <span className=" text-rose-600 ">{(money.total + 18000).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                                <div className="flex text-base font-medium items-center justify-between ">
                                    <p >Tổng số tiền phải trả (VAT)</p>
                                    <span className=" text-rose-600 ">{(money.total + 18000).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                                <div className="flex justify-end text-sm mb-1">
                                    Tiết kiệm được &nbsp; <span className="font-medium text-green-600">{money.save.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })} </span>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br>
                    </div>

                </div>

            </div>
            <div>
                <div className="w-full">
                    <div className="my-3 rounded-lg w-full bg-white p-4">
                        <div className="w-full  pb-2">
                            <label className="uppercase font-medium">Xác nhận lại đơn hàng</label>
                        </div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto  py-2 inline-block overflow-hidden ">
                                <table className="">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                #Mã
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Tên sản phẩm
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Số lượng
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data?.order_items?.map((item, index) => {
                                                if (item.error != null) return null;
                                                return (
                                                    <tr key={index} className=" border-b items-center last:border-none text-sm ">
                                                        <td className='text-center'>#{item.book_id}</td>
                                                        <td className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md  ">
                                                            <img src={item.book.default_image} alt={item.book.name} className="h-full w-full object-cover p-3 object-center" />
                                                        </td>
                                                        <td className="ml-4 flex flex-col mt-4">
                                                            <p>{item.book.name} </p>
                                                            <div className="flex flex-row gap-3 items-center mt-2">
                                                                <span className="font-medium text-blue-700 ">{Math.ceil(item.book.price - (item.book.price * item.book.discount) / 100).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                                                {
                                                                    item.book.discount > 0 && (<p className="text-sm text-gray-500 line-through ">{item.book.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>)
                                                                }
                                                            </div>
                                                        </td>
                                                        <td className='text-center'>
                                                            <span className="font-bold text-gray-900 text-base">  {item.quantity}</span>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </DashboardPage>

    );
}

export default OrderDetail;