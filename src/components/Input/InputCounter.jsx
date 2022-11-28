import React from 'react';
const InputCounter = ({ height, width, value, setValue }) => {

    React.useEffect(() => {
        if (value < 1) {
            setValue(1);
        }
        if (value > 100) {
            setValue(100);
        }
    }, [value, setValue]);
    return (
        <>
            <div className={`custom-number-input h-10 ${width}`}>
                <div className={`flex flex-row ${height} w-full rounded-lg justify-center  bg-transparent mt-1`}>

                    <button
                        disabled={value === 1}
                        onClick={() => setValue(value - 1)}
                        className={` disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 text-gray-600 hover:text-gray-700 ${value <= 5 ? null : 'hover:bg-gray-400'} h-full w-20 rounded-l cursor-pointer outline-none`}>
                        <span className="m-auto text-2xl font-thin"

                        >-</span>
                    </button>
                    <input type="number" className="outline-none focus:outline-none 
                    text-center w-full bg-gray-100 font-semibold text-md
                     hover:text-black focus:text-black  md:text-basecursor-default
                      flex items-center text-gray-700" name="custom-input-number" disabled value={value}></input>
                    <button
                        disabled={value === 5}
                        onClick={() => setValue(value + 1)}
                        className={` disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 items-center text-gray-600 hover:text-gray-700 ${value >= 5 ? null : 'hover:bg-gray-400'} h-full w-20 rounded-r cursor-pointer`}>
                        <span className="m-auto text-2xl font-thin items-center"
                        >+</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default InputCounter;