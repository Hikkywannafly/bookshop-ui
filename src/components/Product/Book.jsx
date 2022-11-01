import { useNavigate } from 'react-router-dom';
import LoadingSkeleton from "../Animation/LoadingSkeleton";

const Book = (props) => {
    const navigate = useNavigate();
    const { name, discount, price, img, rating, slug } = props;
    const handleClick = () => {
        navigate(`/product/${slug}.html`);
    }
    return (<>

        <div
            onClick={handleClick}
            className="w-full md:max-w-[245px] bg-white rounded-lg hover:shadow-md border inline-block md:flex items-center justify-start flex-col relative ">
            {
                discount !== 0 && (
                    <div className="absolute font-bold right-3 pt-0.5 top-2 w-8 h-5 rounded-lg flex items-center justify-center bg-primary text-white text-xs">
                        {discount}%
                    </div>

                )
            }
            <img className="p-3 rounded-t-lg max-h-[166px] xl:max-h-[210px] md:max-w-[210px]  2xl:max-w-[235px] inline-block" src={img} alt="Product" />
            <div className="px-4 pb-2">
                <div className=" max-h-[38px] min-h-[38px] lg:min-w-[181px] lg:max-w-[182px]  w-full h-full font-medium tracking-tight text-gray-900 text-ellipsis overflow-hidden">
                    <h5 className="h-full">
                        {name}
                    </h5>

                </div>
                <div className="flex w-full justify-start items-center mt-2.5 mb-2">
                    {
                        Array(Math.ceil(rating))
                            .fill(0)
                            .map((item, index) => (
                                <svg key={`ds` + index} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))
                    }

                    {
                        Array(Math.ceil(5 - rating))
                            .fill(0)
                            .map((item, index) => (
                                <svg key={`dgf` + index} aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))
                    }


                    < span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 pt-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 items-center">{Math.ceil(rating)}.0</span>
                </div>
                <div className="flex flex-col md:flex-row justify-start md:justify-between md:text-base">
                    <span className=" font-medium text-rose-600 ">{Math.ceil(price - (price * discount) / 100).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                    {discount !== 0 &&
                        <span className="  text-gray-600  line-through "> {price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                    }
                </div>
            </div>

        </div>


    </>);
}
const Loading = () => {
    return (
        <>
            {
                Array(12).fill(0)
                    .map((item, index) => (
                        < div key={index} className="w-full  md:max-w-[245px] bg-white rounded-lg hover:shadow-md border flex-col flex justify-center relative  " >

                            <div className=" mb-3 min-h-[150px] xl:min-h-[200px] w-[93%] m-2 h-full  items-center  ">
                                <LoadingSkeleton className=" w-full h-full mb-2 rounded-t-lg  " />
                            </div>

                            <div className="px-4 pb-2">
                                <div className=" max-h-[38px] w-full h-full ">
                                    <LoadingSkeleton className=" p-2 h-[63%] mb-2 rounded-t-lg " />
                                </div>
                                <div className="flex items-center mb-2">
                                    <LoadingSkeleton className=" p-2 w-[70%]  mb-2 rounded-t-lg " />

                                </div>
                                <div className="flex flex-col md:flex-row justify-start md:justify-between md:text-base mb-1">
                                    <LoadingSkeleton className=" p-2 w-[40%]  mb-2 rounded-t-lg " />
                                    <LoadingSkeleton className=" p-2 w-[40%]  mb-2 rounded-t-lg " />
                                </div>
                            </div>

                        </div >

                    ))
            }
        </>
    );

}
Book.Loading = Loading;
export default Book;