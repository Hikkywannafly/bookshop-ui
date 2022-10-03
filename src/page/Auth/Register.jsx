
import React, { useState } from 'react';
import AuthInput from '~/components/Input/AuthInput';
import AuthButton from '~/components/Input/AuthButton';
import Or from '~/components/Chore/Or';
import AuthHeader from '~/components/Header/AuthHeader';
import AuthSocial from '~/components/Input/AuthSocial';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { registerSchema } from '~/helper/Schema/register'
import { useFormik } from 'formik';
function Register() {
    const [visible, setVisible] = useState(false);
    const [visibleC, setVisibleC] = useState(false)
    const [error, setError] = useState(false)
    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            emailAddress: '',
            phoneNumber: '',
            fullName: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    const handleClick = (e) => {
        setVisible(!visible);
    }
    return (
        <>
            <AuthHeader content="ALREADY HAVE ACCOUNT?" link="/login" />
            <div className=' animate-fade-down p-4 items-center flex flex-col justify-center m-auto w-full gap-10 '>
                <div className="mt-10">
                    <h1 className='font-bold text-xl'> Register Into Hikky Books </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-5 min-w-[250px] w-full md:min-w-[400px] md:w-[800px] md:gap-9">
                    <form className="flex flex-col gap-7 w-full" autoComplete="off" onSubmit={handleSubmit}>
                        <AuthInput
                            handleChange={handleChange}
                            value={values.emailAddress}
                            type='text'
                            name='emailAddress'
                            id='floating_email'
                            content='Email address'
                            error={errors.emailAddress && touched.emailAddress ? errors.emailAddress : false}
                            handleBlur={handleBlur}
                        />
                        <AuthInput
                            handleChange={handleChange}
                            value={values.phoneNumber}
                            type='text'
                            name='phoneNumber'
                            id='floating_phone'
                            content='Phone number'
                            error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : false}
                            handleBlur={handleBlur}
                        />
                        <AuthInput
                            handleChange={handleChange}
                            value={values.fullName}
                            type='text'
                            name='fullName'
                            id='floating_name'
                            content='Your name'
                            error={errors.fullName && touched.fullName ? errors.fullName : false}
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
                        <AuthButton name='Register' />
                    </form>
                    <Or />
                    <div className=" flex flex-col gap-5 w-full justify-center">
                        <AuthSocial color="#4285F4" name="Sign Up With Google" icon="fa-google" />
                        <AuthSocial color="#3B5998" name="Sign Up With Facebook" icon="fa-facebook" />
                        <AuthSocial color="#1DA1F2" name="Sign Up With Twitter" icon="fa-twitter" />
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
                        <p>Secure Login with reCAPTCHA subject to Google</p>
                        <p>Terms & Privacy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register