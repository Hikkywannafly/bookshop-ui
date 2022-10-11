import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from 'react-redux';
import axiosInterceptor from '~/utils/axiosInterceptor';
import { logoutUser } from '~/redux/apiRequest';
import { useDispatch } from 'react-redux';
const Account = () => {
    const accessToken = useSelector((state => { return state.login.accessToken }));
    const axios = axiosInterceptor(accessToken);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        const result = await logoutUser(axios, dispatch);
        console.log(result);
        // if (result.status === 'success') {
        //     window.location.reload();
        // }
    }

    return (
        <>
            <div className="relative inline-block text-left z-10">
                <Menu>
                    {({ open }) => (
                        <>
                            <span className="rounded-md shadow-sm">
                                <Menu.Button className="inline-flex justify-center w-full 
                                px-1 py-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                    <BiUser className="text-xl" />
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
                                    <div className="px-4 py-3">
                                        <p className="text-sm leading-5">Signed in as</p>
                                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                            tom@example.com
                                        </p>
                                    </div>

                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#account-settings"
                                                    className={`${active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    Account settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#support"
                                                    className={`${active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    Support
                                                </a>
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
                                                    License
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
                                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                >
                                                    Sign out
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

export default Account; 