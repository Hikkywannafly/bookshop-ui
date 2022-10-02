import React, { useState } from 'react';
import AuthInput from '~/components/Input/AuthInput';
import AuthButton from '~/components/Input/AuthButton';
import Or from '~/components/Chore/Or';
import AuthHeader from '~/components/Header/AuthHeader';
import AuthSocial from '~/components/Input/AuthSocial';
import PropTypes from 'prop-types';


const Login = () => {
    const [data, setData] = useState('')
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(false)
    const { userName, password } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AuthHeader content="CREATE ACCOUNT" link="/register" />
            <div className='p-4 items-center flex flex-col justify-center m-auto w-full '>
                <div className="my-10">
                    <h1 className='font-bold'>  LOGIN HIKKY BOOKS </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-5 min-w-[250px] w-full md:min-w-[400px] md:w-[800px]">
                    <div className="flex flex-col gap-5 w-full  ">
                        <AuthInput
                            handleChange={handleChange}
                            type='text'
                            name='userName'
                            id='floating_email'
                            content='Email Address'
                        // error={error ? error : false}
                        />
                        <AuthInput
                            handleChange={handleChange}
                            type='text'
                            name='userName'
                            id='floating_email'
                            content='Email Address'
                        // error={error ? error : false}
                        />

                        <AuthButton />

                    </div>
                    <Or />
                    <div className=" flex flex-col gap-5 w-full">
                        <AuthSocial color="#4285F4" name="Google" icon="fa-google" />
                        <AuthSocial color="#3B5998" name="Facebook" icon="fa-facebook" />
                        <AuthSocial color="#1DA1F2" name="Twitter" icon="fa-twitter" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
