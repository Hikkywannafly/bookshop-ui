import { TbRotateClockwise2 } from 'react-icons/tb'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useEffect } from 'react';
import axios from 'axios';
const LiveSearch = ({ open, setOpen, search }) => {
    useEffect(() => {

    }, [open])
    console.log(search)
    return (
        <>
            {
                open && (
                    <div className="w-full mt-3 absolute ">

                        <div
                            onClick={() => setOpen(false)}
                            aria-hidden='true' className="
                            fixed 
                             inset-0 h-full w-full
                            bg-black opacity-50
                             mt-[67px] "
                            style={
                                {
                                    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                }}>
                        </div>
                        <div className="w-full relative bg-white rounded-md shadow-md z-20 text-sm">
                            {/* <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                                <div className="">
                                    <img src="https://cdn0.fahasa.com/media/catalog/product/c/h/chitose-trong-chai-ramune---tap-1---ban-gioi-han.jpg" alt=""
                                        className="w-12 h-12" />
                                </div>
                                <div className="flex-1 ml-4">
                                    <p className="text-gray-900 ">Chitose trong chai Ramune - Tập 1 - Bản giới hạn</p>
                                    <p className="text-gray-500">34.000 đ</p>
                                </div>
                            </div> */}
                            <div className="flex items-center justify-between px-4 py-3">
                                <p className="text-gray-900 ">Không tìm thấy sản phẩm nào</p>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-between px-4 py-1 ">
                                    <div className="font-medium flex gap-3 items-center">
                                        <TbRotateClockwise2 />
                                        Lịch sử tìm kiếm
                                    </div>
                                    <div className="text-rose-500 cursor-pointer">
                                        Xóa tất cả
                                    </div>
                                </div>

                                <div className="flex flex-wrap pb-2 px-3 gap-3 ">
                                    <div
                                        style={{ backgroundColor: ` rgba(247, 148, 30, 0.1)` }}
                                        className=" px-1 p-0.5 rounded-md text-orange-600 flex items-center gap-2 capitalize">
                                        heelo
                                        <AiFillCloseCircle
                                            className='cursor-pointer text-sm' />
                                    </div>



                                </div>
                            </div>


                        </div>

                    </div>
                )

            }



        </>
    );
}

export default LiveSearch;