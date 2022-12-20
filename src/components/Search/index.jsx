import react, { useState } from 'react';
const SearchSuggestion = ({ dataView, dataFillter, playhodeler }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
        if (e.target.value.length > 0) {
            dataView(value);
        }
    }
    return (
        <>
            <div className="h-3 max-w-[400px] w-full relative">
                <div className="inline-flex flex-col justify-center relative text-gray-500 w-full">
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            type="text" className="p-1.5 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent w-full" placeholder="search..." />
                        <svg className="w-4 h-4 absolute left-2.5 top-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    {/* option */}
                    {/* <ul className="bg-white border border-gray-100 w-full mt-2 absolute top-10 shadow-md">
                        <li className="pl-2 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                            <b>Gar</b>dena Resort - Italië
                        </li>
                        <li className="pl-2 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                            <b>Gar</b>dena Resort - Italië
                        </li>
                        <li className="pl-2 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                            <b>Gar</b>dena Resort - Italië
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    );
}

export default SearchSuggestion;