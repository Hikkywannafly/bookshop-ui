import { BiSearch } from 'react-icons/bi';
const Search = () => {
    return (
        <>

            <div className="w-full">
                <div className="relative">
                    <button type="submit" className="absolute left-1 bottom-[2px] text-sm font-medium
                    rounded-lg  px-1.5 py-1.5  focus:shadow-outline-blue focus:outline-none">
                        <BiSearch className="text-lg" />
                    </button>
                    <input
                        type="search" id="search-dropdown" className={` border pl-10 focus:outline-none
                         p-1.5 block  w-full z-20 text-sm text-gray-900  rounded-lg  
                          duration-150`} placeholder="Search your book" required>
                    </input>

                </div>
            </div>

        </>
    );
}

export default Search;