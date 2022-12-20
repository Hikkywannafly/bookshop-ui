import { InputCounter } from '~/components/Input';
import { IoClose } from 'react-icons/io5';
import { useFetchData } from '~/hooks/useFetchData';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, addToCart, updateItems } from '~/redux/Cart/apiRequest';
import toast, { Toaster } from 'react-hot-toast';
import LoadingSkeleton from "../Animation/LoadingSkeleton";
import { useEffect, useState } from 'react';
const CartItem = ({ id, name, price, image, quantity, discount, error }) => {
    const dispatch = useDispatch();
    const axios = useFetchData();
    const [value, setValue] = useState(quantity);
    const handleRemoveItem = async (id) => {
        toast.promise(
            deleteCartItem(axios, { book_id: id }, dispatch)
            , {
                loading: 'Loading ...',
                success: (data) => {
                    if (data.status !== 'success') throw new Error(data.message);
                    return 'Xóa thành công';
                },
                error: (err) => {
                    console.log(err);
                    return err.message;
                }
            });
    }
    const handleChangeCartItem = async (value) => {
        toast.promise(
            addToCart(axios, { book_id: id, quantity: value }, dispatch)
            , {
                loading: 'Loading ...',
                success: (data) => {
                    if (data.status !== 'success') throw new Error(data.message);
                    updateItems(dispatch, value, id);
                    return 'Cập nhật thành công';
                },
                error: (err) => {
                    console.log(err);
                    setValue(quantity);
                    return err.message;
                }
            });
    }
    useEffect(() => {
        setValue(quantity);
    }, [quantity]);
    return (
        <>
            <div className="flex py-6 border-b last:border-none">
                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md  ">
                    <img src={image} alt={name} className="h-full w-full object-cover object-center" />
                </div>

                <div className="ml-4 flex flex-1  flex-col">
                    <div>
                        <div className="flex justify-between  text-gray-900">

                            <div className=''>{name}</div>

                            <div className="flex w-20  justify-end">
                                <IoClose
                                    onClick={() => handleRemoveItem(id)}
                                    className="cursor-pointer text-xl" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center mt-2">
                            <span className="font-medium text-blue-700 ">{Math.ceil(price - (price * discount) / 100).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                            {
                                discount > 0 && (<p className="text-sm text-gray-500 line-through ">{price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>)
                            }
                        </div>
                        {
                            error && <div className="text-sm text-red-600 font-medium">* {error}</div>
                        }

                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <InputCounter
                            height="h-7"
                            width="w-24"
                            value={value}
                            setValue={setValue}
                            handleChange={handleChangeCartItem}
                        />

                        <p className="ml-4 text-base font-medium text-rose-600">{(Math.ceil(price - (price * discount) / 100) * quantity).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                </div>
            </div>
        </>);
}
const Loading = () => {
    return (
        <>
            {
                Array(3).fill(0).map((item, index) => (
                    <div key={index} className="flex py-6 border-b last:border-none">
                        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md  ">
                            <LoadingSkeleton height="" width="" className='h-28 w-25' />
                        </div>

                        <div className="ml-4 flex flex-1  flex-col">
                            <div>
                                <div className="flex justify-between  text-gray-900">

                                    <div className=''><LoadingSkeleton height="" width="" className='h-5 w-40' /> </div>

                                    <div className="flex w-20  justify-end">
                                        <LoadingSkeleton className='h-5 w-5' />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3 items-center mt-2">
                                    <LoadingSkeleton className='h-5 w-20' />

                                </div>

                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <LoadingSkeleton className='h-5 w-20' />

                                <LoadingSkeleton className='h-5 w-20' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

CartItem.Loading = Loading;
export default CartItem;