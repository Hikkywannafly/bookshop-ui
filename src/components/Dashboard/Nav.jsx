import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TbMessage, TbBellRinging } from 'react-icons/tb';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '~/hooks/useStateContext';
import { useSelector } from 'react-redux'
const NavButton = ({ title, customFunc, icon, dotColor }) => (
    <div content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            className="relative text-xl rounded-full p-2 m-1.5 hover:bg-slate-300 hover:text-white duration-200 drop-shadow-sm bg-white"
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
    const { activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
    const userInfo = useSelector(state => state.login.currentUser)
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);


    }, [screenSize, setActiveMenu]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 z-[1]  ">
            <NavButton title="Menu" customFunc={handleActiveMenu} icon={<AiOutlineMenu />} />
            <div className="flex items-center">

                <NavButton title="Chat" dotColor="green" customFunc={() => handleClick('chat')} icon={<TbMessage />} />
                <NavButton title="Notification" dotColor="green" customFunc={() => handleClick('notification')} icon={<TbBellRinging />} />
                <div
                    className="flex items-center gap-2  text-sm drop-shadow-sm h-7 bg-white cursor-pointer pl-1 hover:bg-[#1e1e30] hover:text-white duration-200 rounded-lg"
                    onClick={() => handleClick('userProfile')}
                >
                    <img
                        className="rounded-full w-5 h-5"
                        src={userInfo.image_address ? userInfo.image_address : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                        alt="user-profile"
                    />
                    <p>
                        <span className="">Hi,</span>{' '}
                        <span className=" font-bold ml-1 text-sm">
                            {userInfo?.name}
                        </span>
                    </p>
                    <MdKeyboardArrowDown className="text-gray-400 text-sm" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
