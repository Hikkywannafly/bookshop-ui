
import axios from 'axios';
import { SlectProvinces, TextField2 } from '~/components/Input';
import { ButtonLoading } from '~/components/Button';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { addressSchema } from '~/helper/Schema/address';
import { getAccount } from '~/redux/Auth/apiRequest';
import { useFormik } from 'formik';
import { useFetchData } from '~/hooks/useFetchData';
const Address = ({ value }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({
        province: ``,
        district: ``,
        ward: ``,
    });
    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=3').then((res) => {
            setProvinces(res.data);
        });
    }, []);
    useEffect(() => {
        if (selected.province) {
            const province = provinces.find((item) => item.code === selected.province);
            setDistricts(province.districts);
            setWards([]);
        }
    }, [selected.province]);
    useEffect(() => {
        if (selected.district) {
            const district = districts.find((item) => item.code === selected.district);
            setWards(district.wards);
        }
    }, [selected.district]);

    const { values, errors, setErrors, setValues, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            province: '',
            district: '',
            ward: '',
            note: '',
        },
        validationSchema: addressSchema,
        onSubmit: async (values) => {
            console.log(values);
        }
    });
    useEffect(() => {
        setValues({
            ...values,
            province: selected.province,
            district: selected.district,
            ward: selected.ward,
        });
    }, [selected]);
    useEffect(() => {
        Object.keys(value).forEach((key) => {
            if (value[key]) {
                setValues({
                    ...values,
                    [key]: value[key],
                });
            }
        });
    }, [values]);
    return (
        <>
            <div className="my-3 rounded-lg w-full bg-white p-4">
                <div className="w-full border-b pb-2 mb-4">
                    <label className="uppercase font-medium">?????a ch??? giao h??ng</label>
                </div>
                <form className='flex gap-3 flex-col ' onSubmit={handleSubmit}>
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
                                options={
                                    provinces.map((item) => {
                                        return {
                                            value: item.code,
                                            label: item.name
                                        }
                                    })
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
                                options={
                                    [
                                        ...districts.map((item) => {
                                            return {
                                                value: item.code,
                                                label: item.name
                                            }
                                        })
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
                                options={
                                    [
                                        ...wards.map((item) => {
                                            return {
                                                value: item.code,
                                                label: item.name
                                            }
                                        })
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
                        <ButtonLoading
                            type='submit'
                            label={'L??u ?????a ch???'}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Address;