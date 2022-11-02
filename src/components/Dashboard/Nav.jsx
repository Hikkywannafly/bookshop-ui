import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useStateContext } from '~/hooks/useStateContext';

const NavButton = ({ title, customFunc, icon, dotColor }) => (
    <div content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            className="relative text-xl rounded-full p-3 hover:bg-gray-400 hover:text-white duration-200"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </div>
);

const Nav = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);


    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 z-[1]  ">

            <NavButton title="Menu" customFunc={handleActiveMenu} icon={<AiOutlineMenu />} />
        </div>
    );
};

export default Nav;
