import React, { memo } from 'react';
import Search from './Search';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Account from './Account';
import Wishlist from './WishList';
import Cart from './Cart';
const Header = ({ userInfo }) => {
    return (
        <>
            <header
                style={{ zIndex: 20 }}
                className="py-2 border-b bg-white  flex justify-center">
                <div className="container flex items-center justify-between w-full gap-2 lg:max-w-[1300px]">

                    <div className="">
                        <h1 className=' font-bold text-xs md:text-base
                             uppercase rounded-full flex items-center
                              text-gray-900 text-opacity-60'>
                            HIKKY BOOKS
                        </h1>
                    </div>
                    <div className="w-full max-w-xl relative flex">
                        <Search />
                    </div>

                    <>
                        <div className="flex items-center space-x-4">
                            <Wishlist />

                            <div className="cursor-pointer text-center text-gray-700  transition relative flex flex-col justify-center items-center">
                                <Cart />
                                <div className="text-xs leading-3">Cart</div>

                            </div>

                            <div className="cursor-pointer text-center text-gray-700 transition relative flex flex-col justify-center items-center">
                                {
                                    userInfo === null ? (
                                        <Link to="/login">
                                            <div className="relative inline-block text-left">
                                                <span className="rounded-md shadow-sm">
                                                    <div className="inline-flex justify-center w-full 
                                  px-1 py-1 text-sm font-medium leading-5
                                     text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                                        <BiUser className="text-xl" />
                                                    </div>
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (

                                        <Account userInfo={userInfo} />
                                    )
                                }
                                <div className="text-xs leading-3">Account</div>
                            </div>


                        </div>
                    </>
                </div>
            </header>
        </>
    );
}

export default memo(Header);