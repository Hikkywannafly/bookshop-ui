import React, { useState } from 'react'

import { useEffect } from "react";


const BookInfo = ({ bookdata }) => {

    console.log(bookdata)
    return (
        <>
            {bookdata &&

                <div className='flex flex-col  w-full mx-1 mr-2'>
                    <div className="border-b border-gray-300 pb-4">


                        <label className='text-lg font-medium mb-4'>Thông tin sản phẩm</label>
                        <div className="flex flex-col w-1/2 justify-start text-[15px]">
                            <table class=" ">
                                <tbody>
                                    {
                                        Object.keys(bookdata).map((key, index) => {
                                            if (key === `id` || key === `description` || key === `created_at` || key === `updated_at`)
                                                return <></>;
                                            return (
                                                <tr key={index} className='flex flex-row justify-between'>
                                                    <td className='w-1/2 capitalize pr-2 py-2 text-gray-500  '>{key.split('_').join(' ')}</td>
                                                    <td className='w-1/2 pr-2 py-2'>{bookdata[key]}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                        <p>Giá sản phẩm trên Hikky đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...</p>
                    </div>
                    <div className="my-3 ">
                        <label className='text-lg font-medium mb-4'>Mô tả sản phẩm</label>
                        <br />
                        <div className="flex flex-col mt-2 ">
                            <div dangerouslySetInnerHTML={{ __html: bookdata.description }} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
const Loading = () => {
    return (
        <></>
    );
}
BookInfo.Loading = Loading;

export default BookInfo;