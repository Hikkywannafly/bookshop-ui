import { BiSearch } from 'react-icons/bi';
import { TbRotateClockwise2 } from 'react-icons/tb'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RiLoader2Fill } from 'react-icons/ri'
import { useEffect, useState } from 'react';
import BASE_URL from "~/config/index";
import { Link, useNavigate } from 'react-router-dom'
import { getAxios } from "~/utils/getAxios";
import { BiCategoryAlt } from 'react-icons/bi'
const SearchBar = ({ className }) => {
    const [liveSearch, setLiveSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        if (search.length > 2
        ) {
            getAxios.post(`${BASE_URL}/search`, { search })
                .then(res => {
                    setData(res.data.books)

                    setLoading(false);
                })
                .catch(err => {
                    console.log(err.response.data);
                    setLoading(false);
                })
        }
        else {
            setData('');
            setLoading(false);
        }
    }, [search])
    useEffect(() => {
        liveSearch ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
    }, [liveSearch])
    const handleSearch = (value) => {
        let searchHistory = localStorage.getItem('searchHistory');
        if (searchHistory) {
            searchHistory = JSON.parse(searchHistory);
            if (searchHistory.includes(value.toLowerCase()) === false) {
                searchHistory.push(value.toLowerCase());
            }
            setHistory(searchHistory);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
        else {
            localStorage.setItem('searchHistory', JSON.stringify([value.toLowerCase()]));
        }
    }
    useEffect(() => {
        let searchHistory = localStorage.getItem('searchHistory');
        if (searchHistory) {
            searchHistory = JSON.parse(searchHistory);
            setHistory(searchHistory);
        }
    }, [])

    const handleSearchNavigate = (search) => {
        navigate(`/all-category.html?search=${search}`);
        handleSearch(search);
        setLiveSearch(false);
    }
    return (
        < >
            <div className="w-full">
                <div className="relative">
                    <input
                        onFocus={() => {
                            setLiveSearch(true)
                        }}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchNavigate(e.target.value)
                            }
                        }}
                        type="search" id="search-dropdown" className={` border pl-5 focus:outline-none p-2 block  w-full z-20 text-sm text-gray-900  rounded-lg  duration-150  ${className}`
                        } placeholder="Search your book" required>
                    </input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-[7px] lg:bottom-[7px] text-sm font-medium  bg-[#2e2d2d]
                    rounded-lg px-3 py-1.5  focus:shadow-outline-blue focus:outline-none">
                        {
                            loading ? <RiLoader2Fill className="animate-spin" /> : <BiSearch
                                onClick={(e) => {
                                    if (search.length > 2) {
                                        handleSearchNavigate(search)
                                    }
                                }}

                            />
                        }
                    </button>
                </div>

                {
                    liveSearch && (
                        <div className="w-full mt-3 absolute ">
                            <div
                                onClick={() => {
                                    setLiveSearch(false);
                                    setLoading(false);
                                }
                                }
                                aria-hidden='true' className="fixed inset-0 h-full w-full bg-black opacity-50 mt-[67px] "
                                style={{ transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
                            </div>
                            <div className="w-full relative bg-white rounded-md shadow-md z-20 text-sm   ">
                                <div className=" max-h-[500px] overflow-auto">
                                    {data?.length > 0 && Array.isArray(data) ? data?.map((item, index) =>
                                    (
                                        <div key={index} >
                                            <Link
                                                onClick={() => {
                                                    setLiveSearch(false);

                                                }
                                                }
                                                to={`/product/${item.slug}.html`} className="flex items-center justify-between px-4 py-3 cursor-pointer">
                                                <div className="">
                                                    <img src={item.default_image} alt=""
                                                        className="w-12 h-12" />
                                                </div>
                                                <div className="flex-1 ml-4">
                                                    <p className="text-gray-900 text-ellipsis ">{item.name}</p>
                                                    <span className=" text-rose-600 ">{Math.ceil(item.price - (item.price * item.discount) / 100).toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}</span>
                                                </div>
                                            </Link>
                                            {index > 5 ? (
                                                <div
                                                    onClick={() => {
                                                        handleSearchNavigate(search)
                                                    }}
                                                    className="text-blue-600 w-full flex cursor-pointer justify-center items-center"> Xem th??m</div>

                                            ) : null}
                                        </div>

                                    )
                                    ) : null}
                                    {
                                        data?.length > 0 && (typeof data === "string") && (
                                            <div className="flex items-center justify-between px-4 py-3">
                                                <p className="text-gray-900 ">{data}</p>
                                            </div>

                                        )
                                    }

                                </div>

                                <div className=" border-b">
                                    <div className="flex items-center justify-between px-4 py-2 ">
                                        <div className="font-medium flex gap-3 items-center">
                                            <TbRotateClockwise2 />
                                            L???ch s??? t??m ki???m
                                        </div>
                                        <div
                                            onClick={() => {
                                                localStorage.removeItem('searchHistory');
                                                setHistory([]);
                                            }}
                                            className="text-rose-500 cursor-pointer">
                                            X??a t???t c???
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap pb-2 px-3 gap-3 ">

                                        {
                                            history?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    style={{ backgroundColor: ` rgba(247, 148, 20, 0.1)` }}
                                                    className=" px-1 p-0.5 rounded-md text-orange-500 flex items-center gap-2 ">
                                                    {item}
                                                    <AiFillCloseCircle
                                                        onClick={() => {
                                                            let searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
                                                            searchHistory = searchHistory.filter((i) => i !== item);
                                                            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                                                            setHistory(searchHistory);
                                                        }}
                                                        className='cursor-pointer text-sm' />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-center justify-between px-4 py-2 ">
                                        <div className="font-medium flex gap-3 items-center">
                                            <BiCategoryAlt />
                                            Danh m???c n???i b???t
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-between pb-2 px-3 gap-3 ">

                                        <div className="w-28 hover:shadow-md rounded-md p-1 items-center">
                                            <div className="h-28 w-max flex-shrink-0 overflow-hidden   ">
                                                <img src='https://cdn0.fahasa.com/media/catalog/product/8/9/8936186545627_2.jpg' alt="" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <h1> Light Novel n???i nh???t</h1>
                                        </div>

                                        <div className="w-28 hover:shadow-md rounded-md p-1">
                                            <div className="h-28 w-max flex-shrink-0 overflow-hidden   ">
                                                <img src='https://cdn0.fahasa.com/media/catalog/product/8/9/8936186545627_2.jpg' alt="" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <h1> Light Novel n???i nh???t</h1>
                                        </div>

                                        <div className="w-28 hover:shadow-md rounded-md p-1">
                                            <div className="h-28 w-max flex-shrink-0 overflow-hidden   ">
                                                <img src='https://cdn0.fahasa.com/media/catalog/product/8/9/8936186545627_2.jpg' alt="" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <h1> Light Novel n???i nh???t</h1>
                                        </div>

                                        <div className="w-28 hover:shadow-md rounded-md p-1">
                                            <div className="h-28 w-max flex-shrink-0 overflow-hidden   ">
                                                <img src='https://cdn0.fahasa.com/media/catalog/product/8/9/8936186545627_2.jpg' alt="" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <h1> Light Novel n???i nh???t</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default SearchBar;