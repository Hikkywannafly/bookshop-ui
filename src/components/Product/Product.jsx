import Book from './Book';
const Product = () => {
    return (<>
        <div
            style={{ zIndex: 0 }}
            className="bg-white w-full  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start ">
            <div className="m-2">
                <div className="border-b pb-3 flex flex-col gap-3 mb-4 ">
                    {/* <div className="">
                        <h1> Fillter by :</h1>
                    </div> */}
                    <div className="flex items-center gap-4">
                        <h1> Sort by :</h1>
                        <select

                            style={{ boxShadow: `rgb(0 0 0 / 5%) 0px 0px 1rem 0px` }}
                            className=" bg-white drop-shadow-xl  bg-opacity-60  w-36
                               text-gray-900  rounded-lg   p-1 outline-none">
                            <option>
                                Bán Chạy nhất
                            </option>
                            <option>
                                Giảm giá nhiều nhất
                            </option>
                            <option>

                            </option>
                        </select>

                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 lg:gap-8 w-full">
                    <Book />

                </div>
            </div>


        </div>
    </>);
}

export default Product;