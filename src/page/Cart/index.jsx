import Breadcrumb from '~/components/Breadcrumb';
import CartItem from '~/components/Product/CartItem';
import { useFetchData } from '~/hooks/useFetchData';
import { getCartData } from '~/redux/Cart/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/Input';
import React from 'react';
const Cart = () => {
    const cartItems = useSelector((state) => state.cartdata.cartItems);
    const total = useSelector((state) => state.cartdata.total);
    const loading = useSelector((state) => state.cartdata.isFetching)
    const [money, setMoney] = useState({
        total: 0,
        shipping: 0,
        save: 0
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const axios = useFetchData();
    const isAuthenticated = useSelector((state) => state.login.currentUser);
    useEffect(() => {
        if (isAuthenticated) {
            getCartData(axios, dispatch);
        }
        else {
            navigate('/login');
        }
    }, []);
    useEffect(() => {
        if (cartItems) {
            let total = 0;
            let save = 0;
            cartItems.forEach((item) => {
                total += item.book.price * item.quantity;
                save += item.book.price * item.quantity * (item.book.discount / 100);
            });
            setMoney({
                total,
                shipping: 0,
                save
            });
        }
    }, [cartItems]);
    return (
        <>
            <div className="container items-center w-full gap-2 lg:max-w-[1300px] text-sm">

                <div className="my-3 rounded-lg w-full">
                    <div className="flex flex-col w-full justify-center p-2 rounded-lg ">
                        <div className="text-lg font-medium">
                            Giỏ hàng của bạn <span className='text-gray-500'> (<span className='text-base '> {total}</span> sản phẩm )</span>
                        </div>
                    </div>
                    {
                        total > 0 ? (
                            <div className="gap-5 flex w-full ">
                                <div className="w-full">
                                    <div className="bg-white p-2 rounded-lg mt-3 font-medium">
                                        <div className="flex ">
                                            <div className="ml-4 w-28 flex-shrink-0 overflow-hidden rounded-md  ">
                                                Sản phẩm
                                            </div>
                                            <div className=" flex flex-1 flex-col">
                                                Thông tin
                                            </div>
                                            <div className="flex flex-1 items-end justify-end text-sm">
                                                <p className="mx-4">Tạm tính</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="items" className="bg-white p-3 rounded-lg my-4">
                                        {
                                            !loading && cartItems ? (
                                                cartItems?.map((item, index) => (
                                                    <CartItem key={index} id={item.book_id} name={item.book.name} discount={item.book.discount} quantity={item.quantity} price={item.book.price} image={item.book.default_image} />
                                                ))
                                            ) : (
                                                < CartItem.Loading />
                                            )
                                        }

                                    </div>
                                </div>
                                <div className="h-full mt-3 w-[330px]">
                                    <div className={` top-0  w-[330px] bg-white flex  flex-col gap-4 rounded-lg p-4`}>

                                        <div className="flex justify-between pb-3 border-b my-2">
                                            <p>Thành tiền</p>
                                            <span className=" ">{money.total.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                        </div>

                                        <div className="flex text-lg font-medium items-center justify-between ">
                                            <p >Tổng số tiền (VAT)</p>
                                            <span className=" text-rose-600 ">{money.total.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                        </div>
                                        <div className="flex justify-end">
                                            Tiết kiệm được &nbsp; <span className="font-medium text-green-600">{money.save.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })} </span>
                                        </div>
                                        <Button content={`Thanh toán ngay `} color=' bg-slate-800 border-2 border-slate-800' />
                                        <Button content={`Tiếp tục mua sắm `}

                                            color='bg-gray-200 text-black border-slate-800 border-2  '
                                        />

                                    </div>
                                </div>
                            </div>
                        )
                            : (
                                <div className="bg-white  rounded-lg mt-3 font-medium flex justify-center items-center flex-col gap-4 p-10" >
                                    <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg" className="w-60 h-60" alt="" />
                                    <div className="w-[280px]">
                                        <Button content={`Tiếp tục mua sắm `} color=' bg-slate-800 border-2 border-slate-800' />
                                    </div>
                                </div>
                            )
                    }

                </div>


            </div>
        </>
    );
}

export default Cart;