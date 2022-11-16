import React, { useState } from 'react'
const CurrencyInput = ({ value, label }) => {
    const [currency, setCurrency] = useState("");
    const handleChangeCurrency = (e) => {
        setCurrency(e);
        console.log(currency);
    }
    const handleMark = (e) => {
        let value = e.target.value;
        value = value.replace(/,/g, '');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        e.target.value = value;
        return value;
    }

    return (
        <>
            <div>
                <label htmlFor="first_name" className="block text-sm  capitalize font-medium text-gray-900">{label}</label>
                <input
                    onChange={(e) => {
                        handleChangeCurrency(handleMark(e))
                    }}
                    type='text'
                    className="
                mt-1
                 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3
                 pr-3 text-left shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm
                 duration-200
                 "
                    value={currency}
                    placeholder="0 VNĐ"

                >
                </input>
            </div>
        </>
    );
}

export default CurrencyInput;