import { useStateContext } from '~/hook/useStateContext';
import React, { useState, useEffect } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import BookDetail from '~/components/Product/BookDetail';
const Product = () => {
    const { link } = useStateContext();
    return (

        <>
            <div className="container  items-center  w-full gap-2 lg:max-w-[1300px] text-sm  ">
                <div className="my-2 w-full ">
                    <div className="my-2 w-full flex gap-1.5 items-center ">

                        {
                            link?.map((item, index) => {
                                if (index === 0) return <React.Fragment key={index}>
                                    <h1 key={index} className='uppercase'> Home </h1>
                                </React.Fragment>
                                return (
                                    <React.Fragment key={index}>
                                        <RiArrowDropRightLine className='text-lg text-gray-600' />
                                        <h1 className=' uppercase'> {item} </h1>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex w-full bg-white rounded-lg p-4 relative ">
                    <BookDetail />
                </div>
            </div>
        </>
    );
}

export default Product;