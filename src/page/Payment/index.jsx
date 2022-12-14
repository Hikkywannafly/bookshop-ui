import 'tw-elements';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { useFetchData } from '~/hooks/useFetchData';
import { getAccount, fetchOrder } from '~/redux/Auth/apiRequest';
import axios from 'axios';
import { SlectProvinces, TextField2 } from '~/components/Input';
import { ButtonLoading } from '~/components/Button';
import { addressSchema } from '~/helper/Schema/address';
import { useFormik } from 'formik';
import { ModelDialog } from '~/components/Button';
import toast from 'react-hot-toast';
const Payment = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [payment, setPayment] = useState(null);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({
        province: ``,
        district: ``,
        ward: ``,
    });
    const [money, setMoney] = useState({
        total: 0,
        shipping: 0,
        save: 0
    });
    const cartItems = useSelector((state) => state.cartdata.cartItems);
    const axiosJWT = useFetchData();

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=3').then((res) => {
            setProvinces(res.data);
        });
        const getInfomation = async () => {
            const res = await getAccount(axiosJWT);
            setPayment(res?.payment);
            setValues({
                ...values,
                name: res?.user?.name,
                phone: res?.user?.phone,
                email: res?.user?.email,
                address: res?.userDetail?.address,
                province: res?.userDetail?.province,
                district: res?.userDetail?.district,
                ward: res?.userDetail?.ward,
            })
        };

        getInfomation();
    }, []);

    const { values, errors, setValues, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            province: '',
            district: '',
            ward: '',
            note: '',
            payment: 4,
            cartItems:
                cartItems.map((item) => {
                    if (item.error != null) return null;
                    return {
                        id: item.book_id,
                        discount: item.book.discount,
                        price: item.book.price,
                        quantity: item.quantity
                    }
                })
        },
        validationSchema: addressSchema,
        onSubmit: async (values) => {
            toast.promise(
                fetchOrder(axiosJWT, values)
                , {
                    loading: 'Xin ch???...',
                    success: (data) => {
                        setOpen(true);
                        if (data.status !== 'success') throw new Error(data.message);
                        return '?????t h??ng th??nh c??ng';
                    },
                    error: (err) => {
                        return err.message;
                    }
                });

        }
    });

    useEffect(() => {
        if (cartItems) {
            let total = 0;
            let save = 0;
            cartItems.forEach((item) => {
                if (item.error != null) return null;
                total += (item.book.price - item.book.price * (item.book.discount / 100)) * item.quantity; save += item.book.price * item.quantity * (item.book.discount / 100);
            });
            setMoney({
                total,
                shipping: 0,
                save
            });
        }
    }, [cartItems]);
    useEffect(() => {
        setValues({
            ...values,
            province: selected.province,
            district: selected.district,
            ward: selected.ward,
        });

    }, [selected]);
    useEffect(() => {
        if (selected.province || values.province) {
            const province = provinces.find((item) => item.code === (selected.province || values.province));
            setDistricts(province?.districts);
            setWards([]);
        }
    }, [selected.province, values.province]);
    useEffect(() => {
        if (selected.district || values.district) {
            const district = districts.find((item) => item.code === (selected.district || values.district));
            setWards(district?.wards);
        }
    }, [selected.district, values.district, setDistricts, districts]);

    return (
        <form className="container items-center w-full gap-2 lg:max-w-[1300px] text-sm" onSubmit={handleSubmit}>
            <ModelDialog open={open} setOpen={setOpen}
                content={`????n h??ng c???a b???n ???? ???????c ?????t th??nh c??ng. Ch??ng t??i s??? li??n h??? v???i b???n trong th???i gian s???m nh???t. C???m ??n b???n ???? mua h??ng t???i Hikky Bookstore.`}
                returnButton={`Ti???p t???c mua h??ng`}
                button={`Chi ti???t ????n h??ng`}
            />
            <div className="flex flex-col w-full">
                <div className="w-full">
                    <div className="my-3 rounded-lg w-full bg-white p-4">
                        <div className="w-full border-b pb-2 mb-4">
                            <label className="uppercase font-medium">?????a ch??? giao h??ng</label>
                        </div>
                        <div className='flex gap-3 flex-col '>
                            <TextField2
                                label='T??n ng?????i nh???n'
                                placeholder='T??n ng?????i nh???n h??ng'
                                handleBlur={handleBlur}
                                error={errors.name && touched.name ? errors.name : false}
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                            />
                            <div className="flex gap-4 w-full">
                                <div className="w-full">
                                    <TextField2
                                        label='S??? ??i???n tho???i'
                                        handleBlur={handleBlur}
                                        error={errors.phone && touched.phone ? errors.phone : false}
                                        value={values.phone}
                                        onChange={handleChange}
                                        placeholder='S??? ??i???n tho???i ng?????i nh???n'
                                        name="phone"
                                    />

                                </div>
                                <div className="w-full">
                                    <TextField2
                                        label='Email'
                                        handleBlur={handleBlur}
                                        error={errors.email && touched.email ? errors.email : false}
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder='Email ng?????i nh???n'
                                        name="email"
                                    />

                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className="w-full">
                                    <SlectProvinces
                                        label={'T???nh/Th??nh ph???'}
                                        selected={selected}
                                        name="province"
                                        setSelected={setSelected}
                                        defaultOption={values.province}
                                        options={
                                            [
                                                {
                                                    value: '',
                                                    label: 'Ch???n T???nh/ Th??nh ph???',

                                                },
                                                ...provinces.map((item) => {
                                                    return {
                                                        value: item.code,
                                                        label: item.name
                                                    }
                                                })

                                            ]
                                        }
                                        error={errors.province && touched.province ? errors.province : false}
                                    />
                                </div>
                                <div className="w-full">
                                    <SlectProvinces
                                        label={'Qu???n/Huy???n'}
                                        name="district"
                                        selected={selected}
                                        setSelected={setSelected}
                                        defaultOption={values.district}
                                        options={
                                            districts?.length > 0 ? districts?.map((item) => {
                                                return {
                                                    value: item.code,
                                                    label: item.name
                                                }
                                            }) : [
                                                {
                                                    value: '',
                                                    label: 'Ch???n Qu???n/Huy???n'
                                                }
                                            ]
                                        }
                                        error={errors.district && touched.district ? errors.district : false}
                                    />
                                </div>
                                <div className="w-full">
                                    <SlectProvinces
                                        label={'Ph?????ng/X??'}
                                        name="ward"
                                        selected={selected}
                                        setSelected={setSelected}
                                        defaultOption={values.ward}
                                        options={
                                            wards?.length > 0 ? wards?.map((item) => {
                                                return {
                                                    value: item.code,
                                                    label: item.name
                                                }
                                            }) : [
                                                {
                                                    value: '',
                                                    label: 'Ch???n Ph?????ng/X??'
                                                }
                                            ]
                                        }
                                        error={errors.ward && touched.ward ? errors.ward : false}
                                    />
                                </div>
                            </div>



                            <TextField2
                                placeholder='S??? nh??, t??n ???????ng ...v.v'
                                label='?????a ch??? nh???n'
                                name="address"
                                handleBlur={handleBlur}
                                error={errors.address && touched.address ? errors.address : false}
                                value={values.address}
                                onChange={handleChange}

                            />
                            <TextField2
                                label='Ghi ch?? (tu??? ch???n)'
                                name="note"
                                handleBlur={handleBlur}
                                error={errors.note && touched.note ? errors.note : false}
                                value={values.note}
                                onChange={handleChange}
                                placeholder='Ghi ch?? ????n h??ng'
                            />
                            <div className="w-full flex justify-end">

                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full">
                    <div className="my-3 rounded-lg w-full bg-white p-4">
                        <div className="w-full border-b pb-2">
                            <label className="uppercase font-medium">Ph????ng th???c v???n chuy???n</label>
                        </div>
                        <div className="flex  py-6">
                            <div className="form-check items-center">
                                <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" readOnly checked />
                                <label className="form-check-label mt-0.5 font-medium inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                    Giao h??ng ti??u chu???n: 18.000??
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="my-3 rounded-lg w-full bg-white p-4">
                        <div className="w-full border-b pb-2">
                            <label className="uppercase font-medium">Ph????ng th???c thanh to??n </label>
                        </div>
                        <div className="flex flex-col gap-7 py-6">
                            {
                                payment?.map((item, index) => (
                                    <div key={index} className="form-check items-center">
                                        <input
                                            onChange={() => setValues({ ...values, payment: item.id })}
                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            checked={values.payment === item.id}
                                            type="radio" name="flexRadioDefault1" id="flexRadioDefault1" readOnly />
                                        <label className="form-check-label mt-0.5  text-gray-800 flex gap-3" htmlFor="flexRadioDefault1">
                                            <img src={item.slug} alt='g'></img>
                                            {item.name}
                                            <p className='text-yellow-600  font-medium'>{item.description} </p>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <div className="my-3 rounded-lg w-full bg-white p-4">
                        <div className="w-full border-b pb-2">
                            <label className="uppercase font-medium">M?? KHUY???N M??I/M?? QU?? T???NG</label>

                        </div>
                        <TextField2
                            placeholder='M?? khuy???n m??i'
                            handleBlur={handleBlur}
                            name="name"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="my-3 rounded-lg w-full bg-white p-4">
                        <div className="w-full border-b pb-2">
                            <label className="uppercase font-medium">X??c nh???n l???i ????n h??ng</label>
                        </div>
                        {
                            cartItems?.map((item, index) => {
                                if (item.error != null) return null;
                                return (
                                    <div key={index} className="flex py-6 border-b last:border-none">
                                        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md  ">
                                            <img src={item.book.default_image} alt={item.book.name} className="h-full w-full object-cover object-center" />
                                        </div>
                                        <div className="ml-4 flex flex-1  flex-col">
                                            <p>{item.book.name} | <span className="font-bold text-gray-900 text-base"> x {item.quantity}</span></p>
                                            <div className="flex flex-row gap-3 items-center mt-2">
                                                <span className="font-medium text-blue-700 ">{Math.ceil(item.book.price - (item.book.price * item.book.discount) / 100).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                                {
                                                    item.book.discount > 0 && (<p className="text-sm text-gray-500 line-through ">{item.book.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>

            </div>
            <div className=" z-[999] border-t shadow-2xl drop-shadow-xl w-full inset-x-0 bottom-0 bg-white p-4 fixed">
                <div className="container items-center w-full gap-2 lg:max-w-[1300px]">
                    <div className="flex justify-between pb-3 my-2 font-medium">
                        <p className='italic'>T???m t??nh</p>
                        <span className="font-bold ">{money.total.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className="flex justify-between pb-3  my-2 text-gray-500 font-bold ">
                        <p>Ph?? v???n chuy???n (Giao h??ng ti??u chu???n)</p>
                        <span className=" ">{(18000).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className="flex text-lg font-medium items-center  justify-between ">
                        <p>T???ng S??? Ti???n (g???m VAT)</p>
                        <span className=" text-rose-600 ">{(money.total + 18000).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className="flex justify-end border-b pb-2">
                        <div className="">
                            Ti???t ki???m ???????c &nbsp; <span className="font-medium text-green-600">{money.save.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })} </span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex cursor-pointer items-center text-base"> <IoIosArrowBack /> Quay v??? gi??? h??ng</div>
                        <ButtonLoading
                            type='submit'
                            label={'X??c nh???n thanh to??n'}
                        />
                    </div>
                </div>
            </div>
        </form>


    );
}

export default Payment;