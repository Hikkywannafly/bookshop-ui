import { BiSearch } from 'react-icons/bi';
const SearchBar = () => {
    return (
        < >
            <div className="w-full">
                <div className="relative">
                    <input
                        type="search" id="search-dropdown" className=" border pl-5 focus:outline-none
                         p-2 block  w-full z-20 text-sm text-gray-900  rounded-lg  border-gray-500
                          duration-150 " placeholder="Search your book" required>
                    </input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-[7px] lg:bottom-[7px] text-sm font-medium  bg-[#2e2d2d]
                    rounded-lg px-3 py-1.5  focus:shadow-outline-blue focus:outline-none">
                        <BiSearch />
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;