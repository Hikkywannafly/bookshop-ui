import { BiCartAlt, BiBell, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const AccountBar = () => {
    return (
        <>
            <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                    <div className="text-center text-gray-700 hover:text-primary transition
                    cursor-pointer
                 relative flex flex-col justify-center items-center">
                        <div className="text-xl">
                            <BiBell className="" />
                        </div>
                        <div className="text-xs leading-3  ">Wishlist</div>
                        <div
                            className="absolute right-0 -top-1 w-5 h-5
                     rounded-full flex items-center justify-center
                     bg-primary text-white text-xs  ">
                            1
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer text-center text-gray-700 hover:text-primary transition relative flex flex-col justify-center items-center">
                    <div className="text-xl">
                        <BiCartAlt className="" />
                    </div>
                    <div className="text-xs leading-3">Cart</div>
                    <div
                        className="absolute -right-3.5 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        2</div>
                </div>
                <Link to="/login">
                    <div className="cursor-pointer text-center text-gray-700 hover:text-primary transition relative flex flex-col justify-center items-center">
                        <div className="text-xl">
                            <BiUser className="" />
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default AccountBar;