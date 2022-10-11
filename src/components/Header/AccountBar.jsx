import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Account from './Account';
import { useSelector } from 'react-redux';
import Wishlist from './WishList';
import Cart from './Cart';
const AccountBar = () => {
    const user = useSelector((state) => state.login.currentUser);
    return (
        <>
            <div className="flex items-center space-x-4">
                <Wishlist />

                <div className="cursor-pointer text-center text-gray-700  transition relative flex flex-col justify-center items-center">
                    <Cart />
                    <div className="text-xs leading-3">Cart</div>

                </div>

                <div className="cursor-pointer text-center text-gray-700 transition relative flex flex-col justify-center items-center">
                    {
                        user === null ? (
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
                        ) : (<Account />)
                    }


                    <div className="text-xs leading-3">Account</div>
                </div>


            </div>
        </>
    );
}

export default AccountBar;