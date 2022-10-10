import { BiCategory } from 'react-icons/bi';
const Category = () => {
    return (
        <>
            <div className="px-3 py-1 bg-gray-700 flex items-center cursor-pointer relative group rounded-lg">
                <span className="text-white">
                    <BiCategory />
                </span>
                <span className="capitalize ml-2  text-white">All Categories</span>
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y
                    
                divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                        <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                        <span className="ml-6 text-gray-600 text-sm">Bed</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                        <span className="ml-6 text-gray-600 text-sm">office</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">

                        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Category;