import React, { useEffect } from 'react';
import AuthHeader from '~/components/Header/AuthHeader';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const VerifycationEmail = () => {
    const check = useSelector((state) => state.register.currentUser);
    const accessToken = useSelector((state) => state.register.accessToken);
    const navigate = useNavigate();
    const __check = () => {
        if (check === null) {
            navigate('*');
        }
    }
    // protedcted link 
    const verifyAxios = axios.create({
        baseURL: `http://127.0.0.1:8000/api/auth/email/verification-notification`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const handleVerification = async () => {
        try {
            const res = await verifyAxios.post();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    const handleclick = () => {
        toast.promise(
            handleVerification()
            , {
                loading: 'Sending...',
                success: 'Check your email to verify',
                error: 'Cannot send',
            })
    }
    useEffect(() => {
        __check();
    }, [check])
    return (
        <>
            <div><Toaster /></div>
            <AuthHeader content="ALREADY HAVE ACCOUNT ?" link="/login" />
            <div className='animate-fade-down p-4 items-center flex flex-col justify-center m-auto w-full gap-12'>
                <div className="mt-10">
                    <h1 className='font-bold text-xl'> Thank you for register Hikky Book</h1>
                </div>
                <div className="min-w-[125px] md:w-[400px] ">
                    <h1 className='text-center text-gray-400 '> Please check your email address was registered before login. If you did not create an account, no further action is required.</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-8 min-w-[125px] w-full md:min-w-[200px] md:w-[400px] md:gap-9">
                    <div className="flex flex-col gap-7 w-full  " autoComplete="off">
                        <button
                            type="submit"
                            onClick={handleclick}
                            className=" mt-2 rounded-lg bg-black px-12 py-2 w-full text-sm border-black 
                    
                    outline-black border-2 text-white hover:text-black hover:shadow-[inset_25rem_0_0_0]
                    hover:shadow-gray-50  duration-[400ms,700ms] transition-[color,box-shadow]">
                            Resend Email
                        </button>
                    </div>
                    <div className="flex justify-start text-sm items-center ">
                        Click the button to resend the email.
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifycationEmail;