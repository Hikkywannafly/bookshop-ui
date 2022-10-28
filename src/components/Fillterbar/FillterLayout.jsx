import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import React from 'react';
import LoadingSkeleton from '~/components/Animation/LoadingSkeleton'
import { useStateContext } from '~/hook/useStateContext';
const FillterLayout = (props) => {
    const { name, children } = props;
    const { category, setCategory } = useStateContext();
    return (
        <>
            <div className="border-b pb-3 ">
                <div className="flex justify-between mb-1.5 ">
                    <div className="flex gap-1.5 items-center ">
                        <span className="w-[2.5px] h-3 bg-slate-800"></span>
                        <h1 className='font-medium uppercase  '> {name}</h1>
                    </div>
                    <div
                        id="category"
                        onClick={(e) => {
                            category === name ?
                                setCategory() : setCategory(name)

                        }}
                        className=" px-3 cursor-pointer ">
                        {category === name ? <IoIosArrowUp className="animate-fade-rotate-right " /> : <IoIosArrowDown className="animate-fade-rotate" />}
                    </div>
                </div>
                <div className={` ml-3 mb-1.5 animate-fade-down ${category === name ? ` hidden ` : null}`}>

                    {
                        children
                    }

                </div>
            </div>



        </>
    );
}
const Loading = () => {

    return (
        <div className="border-b pb-3 ">
            <LoadingSkeleton className="h-5 mb-1.5 w-full">
            </LoadingSkeleton >
        </div>
    )




}

FillterLayout.Loading = Loading

export default FillterLayout;