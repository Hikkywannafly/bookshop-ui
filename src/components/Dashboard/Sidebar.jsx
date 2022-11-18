import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from '~/dummy';
import { useStateContext } from '~/hooks/useStateContext';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
const Sidebar = () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize, } = useStateContext();
    const [show, setShow] = useState();
    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink = 'flex justify-between items-center gap-5 pl-4 pt-2.5 pb-2 rounded-lg m-2 shadow-lg drop-shadow-xl  text-sm';
    const normalLink = 'flex justify-between  items-center gap-5 pl-4 pt-2.5 pb-2  rounded-lg text-neutral-700 hover:bg-slate-300 m-2 text-sm hover:text-white duration-200';

    return (
        <div className="p-6 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 font-medium z-[100] text-sm bg-main-bg ">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link to="/dashboard" onClick={handleCloseSideBar} className="items-center font-bold text-base gap-3 ml-3 mt-4 flex  tracking-tight  text-slate-900">
                            <SiShopware /> <span >Hikky Book Store</span>
                        </Link>
                        <div title="Menu" >
                            <button
                                type="button"
                                onClick={() => setActiveMenu(!activeMenu)}
                                style={{ color: `black` }}
                                className="rounded-full p-2 hover:bg-light-gray mt-4 md:hidden  "
                            >
                                <MdOutlineCancel />
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className=" m-3 mt-4 uppercase text-slate-400">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <div key={link.name}>
                                        <NavLink
                                            to={`/auth/${link.name}`}
                                            key={link.name}
                                            onClick={() => { handleCloseSideBar(); setShow(link.name) }}
                                            style={({ isActive }) => ({
                                                backgroundColor: isActive ? currentColor : '',
                                                color: isActive ? 'white' : '',
                                                boxShadow: isActive ? '0 2px 4px 1px rgb(0 0 0 / 10%)' : ``
                                            })}
                                            className={({ isActive }) => (isActive ? activeLink : normalLink + ' ')}
                                        >
                                            <div className="flex gap-5">
                                                {link.icon}
                                                <span className="capitalize">{link.name}</span>
                                            </div>

                                            {link.tool && <div className="flex mr-1.5 text-base">
                                                {show === link.name ? <MdKeyboardArrowUp onClick={() => setShow(null)} /> : <MdKeyboardArrowDown onClick={() => setShow(link.name)} />}
                                            </div>}
                                        </NavLink>
                                        {
                                            show === link.name && link.tool &&
                                            (
                                                <div className="ml-4">
                                                    {link.tool.map((tool) => (
                                                        <NavLink
                                                            to={`/${tool.path}`}
                                                            key={`d` + tool.name}
                                                            className="flex justify-between items-center gap-3 pl-4 pt-2.5 pb-2 rounded-lg text-neutral-700 hover:bg-slate-300 m-1 text-sm hover:text-white duration-200"
                                                        >
                                                            <span className="capitalize">{tool.name}</span>
                                                        </NavLink>

                                                    ))}
                                                </div>
                                            )
                                        }

                                    </div>

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
