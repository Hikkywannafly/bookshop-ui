import { Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from 'react-redux';
import axiosInterceptor from '~/utils/axiosInterceptor';
import { logoutUser } from '~/redux/Auth/apiRequest';
import AuthButton from '~/components/Input/AuthButton';
import { Link } from 'react-router-dom';
import { memo, useEffect } from 'react';
const Account = ({ userInfo }) => {
    const accessToken = useSelector((state => state.login.accessToken));
    const dispatch = useDispatch();
    const axios = axiosInterceptor(accessToken, dispatch);
    const handleLogout = async () => {
        const result = await logoutUser(axios, dispatch);
    }

    useEffect(() => {
        if (userInfo.image_address) {
            document.getElementById('avatar').src = userInfo.image_address;
        }
        else {
            document.getElementById('avatar').src = 'https://i.imgur.com/6VBx3io.png';
            // 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
        }
    }, [userInfo]);

    return (
        <>
            <div className="relative inline-block text-left z-10">
                <Menu>
                    {({ open }) => (
                        <>
                            <span className="rounded-md shadow-2xl">
                                <Menu.Button className="inline-flex justify-center w-full 
                                text-sm px-1 py-1 font-medium leading-5 text-gray-700 transition  duration-150 ease-in-out bg-white border border-gray-300 rounded-full hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                    <img className='w-[26px] h-[26px] rounded-full'
                                        loading='lazy'
                                        id='avatar'
                                        referrerPolicy="no-referrer"
                                        aria-hidden="true"
                                        alt='user' />
                                </Menu.Button>
                            </span>

                            <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                >
                                    <div className="px-4 py-3 flex flex-row gap-3 items-center">
                                        <img className='w-10 h-10 rounded-full'
                                            src={userInfo.image_address ? userInfo.image_address : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                                            alt='user' />
                                        <div className="">
                                            <p className="text-sm leading-5">T??i kho???n ????ng nh???p</p>
                                            <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                                {userInfo.name.length > 17 ? userInfo.name.slice(0, 17) + ' ...' : userInfo.name}
                                            </p>
                                        </div>

                                    </div>

                                    <div
                                        className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#account-settings"
                                                    className={`${active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    Th??ng tin t??i kho???n
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to={'/user/purchase'}
                                                    className={`${active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    L???ch s??? mua h??ng
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item
                                            as="span"
                                            disabled
                                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                        >
                                            New feature (soon)
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#license"
                                                    className={`${active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    S???n ph???m y??u th??ch
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>

                                    <div className="py-1"
                                        onClick={handleLogout}
                                    >
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div
                                                    className={`${active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                        } flex justify-between w-full px-4 py-1 text-sm leading-5 text-left  `}
                                                >
                                                    <AuthButton name="????ng xu???t" size='sm' />
                                                </div>

                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </>
    );
}

export default memo(Account); 