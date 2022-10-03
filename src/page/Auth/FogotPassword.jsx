import React, { useState } from 'react';
import AuthInput from '~/components/Input/AuthInput';
import AuthButton from '~/components/Input/AuthButton';
import AuthHeader from '~/components/Header/AuthHeader';
import { registerSchema } from '~/helper/Schema/register';
import { useFormik } from 'formik';
const FogotPassword = () => {
    const [data, setData] = useState()
    const [visible, setVisible] = useState(false)

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
    return (
        <>
            <AuthHeader content="ALREADY HAVE ACCOUNT ?" link="/login" />
            <div className='animate-fade-down p-4 items-center flex flex-col justify-center m-auto w-full gap-12'>
                <div className="mt-10">
                    <h1 className='font-bold text-xl'> Forgot Password </h1>
                </div>
                <div className="min-w-[125px] md:w-[400px] ">
                    <h1 className='text-center text-gray-400 '> Enter your account’s email and we’ll send you an email to reset the password. </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-5 min-w-[125px] w-full md:min-w-[200px] md:w-[400px] md:gap-9">

                    <form className="flex flex-col gap-7 w-full  " autoComplete="off" onSubmit={handleSubmit}>
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
                        <AuthButton name='SEND EMAIL' />
                    </form>


                </div>
                <div className="flex flex-col justify-center items-center h-full text-sm  ">
                    <div className="text-center mb-5">
                        <p href="#" className="group text-black transition duration-300 cursor-pointer">
                            Forgot email address?
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
    );
}

export default FogotPassword;