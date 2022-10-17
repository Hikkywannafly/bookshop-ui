import React from 'react';
import Search from './Search';
import { useSelector } from 'react-redux';
import AccountBar from './AccountBar';
const Header = () => {
    const user = useSelector((state) => state.login.currentUser);
    console.log(user);
    return (
        <>
            <header className="py-2 border-b bg-white  flex justify-center">
                <div className="container flex items-center justify-between w-full gap-2 lg:max-w-[1450px]">
                    <div className="">
                        <h1 className='animate-wiggle font-bold text-xs md:text-base
                             uppercase rounded-full flex items-center
                              text-gray-900 text-opacity-60'>
                            HIKKY BOOKS
                        </h1>
                    </div>
                    <div className="w-full max-w-xl relative flex">
                        <Search />
                    </div>
                    <AccountBar />
                </div>
            </header>
        </>
    );
}

export default Header;