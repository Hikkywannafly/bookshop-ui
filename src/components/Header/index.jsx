import React from 'react';
const Header = () => {
    return (
        <>
            <header >
                <div className='px-2 z-40 top-0 left-0 w-full fixed bg-white bg-opacity-60 backdrop-blur fine-shadow'>
                    <div className=' flex justify-between items-stretch'>
                        <div className="flex-1 flex lg:justify-center items-center max-w-full">
                            <h1 className=' font-display font-bold
                             uppercase select-none rounded-full flex items-center h-11
                             router-link-exact-active router-link-active text-gray-400 text-opacity-60'>
                                HIKKY BOOKS
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;