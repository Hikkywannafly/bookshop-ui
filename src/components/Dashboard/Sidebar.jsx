import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from '~/dummy';
import { useStateContext } from '~/hooks/useStateContext';

const Sidebar = () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-2.5 pb-2 rounded-3xl m-2 shadow-lg drop-shadow-xl ';
    const normalLink = 'flex items-center gap-5 pl-4 pt-2.5 pb-2 rounded-xl hover:bg-light-gray m-2';

    return (
        <div className="p-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 font-medium shadow-lg z-[100] ">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link to="/dashboard" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight  text-slate-900">
                            <SiShopware /> <span>Hikky Book Store</span>
                        </Link>
                        <div title="Menu" >
                            <button
                                type="button"
                                onClick={() => setActiveMenu(!activeMenu)}
                                style={{ color: `black` }}
                                className="rounded-full p-2 hover:bg-light-gray mt-4 md:hidden"
                            >
                                <MdOutlineCancel />
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className=" m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    < NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? currentColor : '',
                                            color: isActive ? 'white' : '',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
};

export default Sidebar;
