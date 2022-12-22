import { fetchRating, handleRatingApi } from '~/redux/Auth/apiRequest';
import { useFetchData } from '~/hooks/useFetchData';
import { useSelector } from 'react-redux';
import RatingS from './RatingS';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
const BookRating = ({ book_id }) => {
    const axios = useFetchData();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState({
        rating: 5,
        comment: '',
    });
    const [avg, setAvg] = useState({
        avg: 0,
    });
    const [start, setStart] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    });

    useEffect(() => {
        const fetchRatingData = async () => {
            const res = await fetchRating(axios, book_id);
            if (res.status === 'success') {
                setRating(res?.rating);
                console.log(res.rating);

            }
        }
        fetchRatingData();

    }, [book_id]);
    const startAvg = (rating) => {
        if (rating) {
            let avgN = 0;
            rating?.forEach((item) => {
                avgN += item.rating;

                setStart({ ...start, [item.rating]: start[item.rating] + 1 });
            });
            setAvg({
                avg: avgN / rating.length
            });
        }


    }
    const handleRating = () => {
        toast.promise(
            handleRatingApi(axios, { book_id: book_id, rating: review.rating, comment: review.comment })
            , {
                loading: 'Đang chạy ...',
                success: (data) => {
                    if (data.status !== 'success') throw new Error(data.message);

                    return 'Cảm ơn bạn đã đánh giá sản phẩm';
                },
                error: (err) => {

                    return err.message;
                }
            });
    }

    useEffect(() => {
        if (rating)
            startAvg(rating);
    }, [rating]);

    return (
        <>
            <div className='flex flex-col  w-full mx-1 mr-2'>
                <div className="">
                    <label className="text-lg font-medium  py-2">Đánh giá sản phẩm</label>
                    <div className="flex gap-5 items-center w-full">

                        <div className="">

                            <p className=" ml-4 items-center text-base  font-medium "><span className='text-3xl'>{avg?.avg || 0}</span>/5</p>
                            <div className="flex items-center mb-3">
                                {
                                    Array(Math.ceil(avg?.avg || 0))
                                        .fill(0)
                                        .map((item, index) => (
                                            <svg key={`ds` + index} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        ))
                                }

                                {
                                    Array(Math.floor(5 - avg?.avg || 0))
                                        .fill(0)
                                        .map((item, index) => (
                                            <svg key={`dgf` + index} aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        ))
                                }

                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{rating?.length} lượt đánh giá</p>
                        </div>

                        <div className="w-[400px]">
                            <div className="flex items-center mt-2">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div
                                        style={{ width: `${(start[5] / rating?.length) * 100}%` }}
                                        className={`h-2 bg-yellow-400 rounded `} ></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{(start[5] / rating?.length) * 100 || 0} %</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
                                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div
                                        style={{ width: `${(start[4] / rating?.length) * 100}%` }}
                                        className="h-2 bg-yellow-400 rounded" ></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{(start[4] / rating?.length) * 100 || 0} %</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
                                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div
                                        style={{ width: `${(start[3] / rating?.length) * 100}%` }}
                                        className="h-2 bg-yellow-400 rounded" ></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{(start[3] / rating?.length) * 100 || 0} %</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
                                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div
                                        style={{ width: `${(start[2] / rating?.length) * 100}%` }}
                                        className="h-2 bg-yellow-400 rounded" ></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{(start[2] / rating?.length) * 100 || 0} %</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
                                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div
                                        style={{ width: `${(start[1] / rating?.length) * 100}%` }}
                                        className="h-2 bg-yellow-400 rounded" ></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{(start[1] / rating?.length) * 100 || 0} %</span>
                            </div>

                        </div>

                        <div className="ml-44">
                            <button type="button" className="inline-block px-6 py-1.5 rounded-xl bg-blue-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                Viết đánh giá sản phẩm
                            </button>
                            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">

                                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                                Viết đánh giá của bạn ở đây
                                            </h5>
                                            <button type="button"
                                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body relative p-4">
                                            <div className="mb-4">
                                                <RatingS review={review} setReview={setReview} />
                                            </div>

                                            <textarea
                                                onChange={(e) => setReview({ ...review, comment: e.target.value })}
                                                className="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Viết đánh giá của bạn ở đây">


                                            </textarea>
                                        </div>
                                        <div
                                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                            <button type="button"
                                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-bs-dismiss="modal">
                                                Đóng
                                            </button>
                                            <button
                                                onClick={() => { handleRating() }}
                                                type="button"
                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                                Lưu đánh giá
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="">
                        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-home3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                                    aria-selected="true">Tất cả</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-profile3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                                    aria-controls="tabs-profile3" aria-selected="false">Mới nhất</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-messages3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                                    aria-controls="tabs-messages3" aria-selected="false">Tốt nhất</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-messages3" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                                    aria-controls="tabs-messages3" aria-selected="false">Tệ nhất</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="tabs-tabContent3">
                            <div className="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                                {
                                    rating.length > 0 && rating?.map((item, index) => (
                                        <div key={index} className="flex gap-10 mb-4 last:mb-0">
                                            <div className="">
                                                <p className="font-medium text-base w-40">{item?.user?.name}</p>
                                                <p className="text-gray-600">{item?.created_at?.split('T')[0]}</p>

                                            </div>
                                            <div className="">
                                                <div className="flex items-center mb-3">
                                                    {
                                                        Array(Math.ceil(item?.rating))
                                                            .fill(0)
                                                            .map((item, index) => (
                                                                <svg key={`ds` + index} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                            ))
                                                    }

                                                    {
                                                        Array(Math.ceil(5 - item?.rating))
                                                            .fill(0)
                                                            .map((item, index) => (
                                                                <svg key={`dgf` + index} aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                            ))
                                                    }
                                                </div>
                                                <div className="">
                                                    <p>{item.comment}</p>

                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
const Loading = () => {
    return (
        <>
            <div className='flex flex-col  w-full mx-1 mr-2 h-[400px]'>
                {/* loading */}
                <div className="animate-pulse flex flex-col w-full h-full bg-white dark:bg-gray-100 rounded-lg shadow-md">
                </div>

            </div>

        </>
    );
}
BookRating.Loading = Loading;


export default BookRating;