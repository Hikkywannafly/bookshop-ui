
import React, { useState } from 'react';
import AuthInput from '~/components/Input/AuthInput';
import AuthButton from '~/components/Input/AuthButton';
import Or from '~/components/Chore/Or';
import AuthHeader from '~/components/Header/AuthHeader';
import AuthSocial from '~/components/Input/AuthSocial';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { registerSchema } from '~/helper/Schema/register'
import { useFormik } from 'formik';
import { registerUser } from '~/redux/Auth/apiRequest'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingCicle from '~/components/Loading/LoadingCicle';
import toast, { Toaster } from 'react-hot-toast';
import LoginSocial from './LoginSocial'
function Register() {
    const [visible, setVisible] = useState(false);
    const [visibleC, setVisibleC] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.register.isFetching);
    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            phone: '',
            name: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: registerSchema,
        onSubmit: async (values) => {
            const result = await registerUser(values, dispatch);
            if (result.status === `error`) {
                toast.error(`Register failed`, {
                    duration: 6000,
                });
                errors.email = result.email;
                errors.phone = result.phone;
            }
            if (result.status === `success`) {
                toast.success('Create account success ');

                navigate('/verify-email', { replace: true });

            }
        }
    })
    const handleClick = (e) => {
        setVisible(!visible);
    }
    return (
        <>
            <div><Toaster /></div>
            {loading && <LoadingCicle />}
            <AuthHeader content="ALREADY HAVE ACCOUNT?" link="/login" />
            <div className=' animate-fade-down p-4 items-center flex flex-col justify-center m-auto w-full gap-10 '>
                <div className="mt-10">
                    <h1 className='font-bold text-xl'> Register Into Hikky Books </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-5 min-w-[250px] w-full md:min-w-[400px] md:w-[800px] md:gap-9">
                    <form className="flex flex-col gap-7 w-full" autoComplete="off" onSubmit={handleSubmit}>
                        <AuthInput
                            handleChange={handleChange}
                            value={values.email}
                            type='text'
                            name='email'
                            id='floating_email'
                            content='Email address'
                            error={errors.email && touched.email ? errors.email : false}
                            handleBlur={handleBlur}
                        />
                        <AuthInput
                            handleChange={handleChange}
                            value={values.phone}
                            type='text'
                            name='phone'
                            id='floating_phone'
                            content='Phone number'
                            error={errors.phone && touched.phone ? errors.phone : false}
                            handleBlur={handleBlur}
                        />
                        <AuthInput
                            handleChange={handleChange}
                            value={values.name}
                            type='text'
                            name='name'
                            id='floating_name'
                            content='Your name'
                            error={errors.name && touched.name ? errors.name : false}
                            handleBlur={handleBlur}
                        />
                        <AuthInput
                            handleChange={handleChange}
                            value={values.password}
                            handleClick={handleClick}
                            type={visible ? "text" : "password"}
                            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                            name='password' id='floating_password' content='Password'
                            error={errors.password && touched.password ? errors.password : false}
                            handleBlur={handleBlur}
                        />

                        <AuthInput
                            handleChange={handleChange}
                            value={values.passwordConfirm}
                            handleClick={() => setVisibleC(!visibleC)}
                            type={visibleC ? "text" : "password"}
                            icon={visibleC ? <MdVisibility /> : <MdVisibilityOff />}
                            name='passwordConfirm' id='floating_password1' content='Password confirm '
                            error={errors.passwordConfirm && touched.passwordConfirm ? errors.passwordConfirm : false}
                            handleBlur={handleBlur}
                        />
                        <AuthButton name='Register' error={errors ? true : false} />
                    </form>
                    <Or />
                    <div className=" flex flex-col gap-5 w-full justify-center">
                        <LoginSocial />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-sm  ">
                    <div className="text-center mb-5">
                        <p href="#" className="group text-black transition duration-300 cursor-pointer">
                            Have problems ?
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                        </p>
                    </div>
                    <div className="text-gray-400 flex flex-col justify-center items-center">
                        <p>Secure Login with reCAPTCHA subject to Hikkywannafly</p>
                        <p>Terms & Privacy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register