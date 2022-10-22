import React, { useState, useEffect } from "react";
import Fillterbar from "~/components/Fillterbar/Fillterbar";
const Category = () => {
    const [category, setCategory] = useState([]);
    return (
        <>

            <div className="container  items-center  w-full gap-2 lg:max-w-[1450px] text-sm ">
                <div className="my-1 w-full ">
                    <h1 className='  text-xs md:text-base'> {`Home`}</h1>
                </div>

                <div className="flex flex-row h-screen">
                    <Fillterbar />
                </div>
            </div>

        </>
    );
}

export default Category;