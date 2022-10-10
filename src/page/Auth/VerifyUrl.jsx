import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
const VerifycationEmail = () => {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null)
    const apiverify = `${searchParams.get("urlVerify")}?signature=${searchParams.get("signature")}`;
    const accessToken = localStorage.getItem("accessToken");
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
        __check();
        const handleVerification = async () => {
            try {
                const res = await verifyAxios.get();
                setData(res.data.message);
                setTimeout(() => {
                    window.location.href = "/login";
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        }
        handleVerification();
    }, [])

    return (
        <>

            <div className="flex justify-center flex-col items-center h-full w-full">
                {data != null ? (
                    <>
                        <div className="">   {data}</div>

                        <br></br>
                        <div className="">  < h1 > Return To Login Page in 3s</h1></div>
                    </>
                ) : (<div className=" text"><h1> Waitting for verification yor email</h1> </div>)
                }
            </div>
        </>
    );
}

export default VerifycationEmail;
