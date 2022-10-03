import React, { useState } from 'react';
import AuthInput from '~/components/Input/AuthInput';
import AuthButton from '~/components/Input/AuthButton';
import Or from '~/components/Chore/Or';
import AuthHeader from '~/components/Header/AuthHeader';
import AuthSocial from '~/components/Input/AuthSocial';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
const inititalState = {
    emailAddress: '',
    password: '',
}
const Login = () => {
    const [data, setData] = useState(inititalState)
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        setVisible(!visible);
    }
    return (
        <>
            <AuthHeader content="CREATE ACCOUNT" link="/register" />

            <div className='animate-fade-down p-4 items-center flex flex-col justify-center m-auto w-full gap-10'>
                <div className="my-10">
                    <h1 className='font-bold text-xl'> Login Into Hikky Books </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-5 min-w-[250px] w-full md:min-w-[400px] md:w-[800px] md:gap-9">

                    <form className="flex flex-col gap-7 w-full  " autoComplete="off">
                        <AuthInput
                            handleChange={handleChange}
                            type='text'
                            name='emailAddress'
                            id='floating_email'
                            content='Email Address'
                        />
                        <AuthInput
                            handleChange={handleChange}
                            handleClick={handleClick}
                            type={visible ? "text" : "password"}
                            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                            name='password' id='floating_password' content='Password' />
                        <AuthButton name='Login' />
                    </form>
                    <Or />
                    <div className=" flex flex-col gap-4 w-full">
                        <AuthSocial color="#4285F4" name="Sign in with  Google" icon="fa-google" />
                        <AuthSocial color="#3B5998" name="Sign in with  Facebook" icon="fa-facebook" />
                        <AuthSocial color="#1DA1F2" name="Sign in with  Twitter" icon="fa-twitter" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-full text-sm  ">
                    <div className="text-center mb-5">
                        <Link to={'/forgot-password'}>
                            <p href="#" className="group text-black transition duration-300 cursor-pointer">
                                CAN'T LOG IN?
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                            </p>
                        </Link>
                    </div>
                    <div className="text-gray-400 flex flex-col justify-center items-center">
                        <p>Secure Login with reCAPTCHA subject to Google</p>
                        <p>Terms & Privacy</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
