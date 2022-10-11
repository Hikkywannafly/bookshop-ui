import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';
const VerifycationEmail = () => {
    const [searchParams] = useSearchParams();
    const [time, setTime] = useState(6);
    const [data, setData] = useState(null)
    const apiverify = `${searchParams.get("urlVerify")}?signature=${searchParams.get("signature")}`;
    const accessToken = localStorage.getItem('tokenVerify');
    const navigate = useNavigate();
    const __check = () => {
        if (searchParams.get("urlVerify") == null) {
            navigate('*');
        }
    }
    const verifyAxios = axios.create({
        baseURL: apiverify,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }, [time, data])
    useEffect(() => {
        __check();
        const handleVerification = async () => {
            try {
                const res = await verifyAxios.get();
                setData(res.data.message);
                setTimeout(() => {
                    window.location.href = "/login";
                }, 6000);
            } catch (error) {
                console.log(error);
            }
        }
        handleVerification();
    }, [])

    return (
        <>

            <div className="flex justify-center flex-col items-center h-full w-full text-2xl">
                <div className="m-5 bg-gray-600 p-10 border-3 flex justify-center flex-col items-center ">


                    {data != null ? (
                        <>
                            <div className="text-white uppercase">   {data}</div>
                            <br></br>
                            <div className="text-green-400">  < h1 > Return To Login Page in ...{time}s or <a className='underline text-blue-400' href="/login"> Login</a></h1></div>
                        </>
                    ) : (<div className=" text uppercase text-white"><h1> Waitting for verification yor email</h1> </div>)
                    }
                </div>
            </div>
        </>
    );
}

export default VerifycationEmail;
