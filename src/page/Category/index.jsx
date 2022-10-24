import React, { useState, useEffect } from "react";
import Fillterbar from "~/components/Fillterbar/Fillterbar";
import Product from "~/components/Product/Product";
const Category = () => {
    const [category, setCategory] = useState([]);
    
    return (
        <>

            <div className="container  items-center  w-full gap-2 lg:max-w-[1350px] text-sm overflow-hidden ">
                <div className="my-2 w-full ">
                    <h1 className='text-xs font-medium md:text-base uppercase'> Home </h1>
                </div>

                <div className="flex flex-col lg:flex-row md gap-5 ">
                    <Fillterbar />
                    <Product />
                </div>
            </div>

        </>
    );
}

export default Category;