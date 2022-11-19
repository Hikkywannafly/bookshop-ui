import React, { useState, memo } from 'react'
const CurrencyInput = ({ value, label, onChange, error, handleBlur, handleChange, name }) => {
    const [currency, setCurrency] = useState("");
    const handleChangeCurrency = (e) => {
        setCurrency(e);
    }
    const handleMark = (value) => {
        value = value.replace(/,/g, '');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return value;
    }

    return (
        <>
            <div>
                <label htmlFor={name} className="block text-sm  capitalize font-medium text-gray-900">{label}</label>
                <input
                    id={name}
                    style={error ? { borderColor: `coral` } : { borderColor: `rgb(209 213 219)` }}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    type='text'
                    className={`
                 mt-1
                w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3
                pr-3 text-left shadow-sm  focus:outline-none focus:ring-1 ${error ? 'focus:ring-[#FF7F50]' : 'focus:ring-slate-800'} sm:text-sm
                duration-200
                `}

                    name={name}
                    onBlur={handleBlur}
                    autoComplete="off"
                    value={handleMark(value)}
                    placeholder="0 VNĐ"

                >
                </input>
                {
                    error && <span className="italic text-red-500 text-xs">{error}</span>
                }
            </div>
        </>
    );
}

export default memo(CurrencyInput);