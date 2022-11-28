import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
const Cart = () => {
    const total = useSelector((state => state.cartdata.total));
    return (
        <>
            <div className="relative inline-block text-left">
                <span className="rounded-md shadow-sm">
                    <div className="inline-flex justify-center w-full 
                px-1 py-1 my-1 text-sm font-medium leading-5 text-gray-700 transition duration-150
                ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500
                focus:outline-none focus:border-blue-300 focus:shadow-outline-blue
                 active:bg-gray-50 active:text-gray-800">
                        <BiCart className="text-xl" />
                    </div>
                </span>
                {
                    total > 0 && (
                        <div
                            className="absolute -right-3.5 -top-1 w-5 h-5 rounded-full flex items-center justify-center
                     bg-primary text-white text-xs">
                            {total}</div>)
                }

            </div>
        </>
    );
}

export default Cart;