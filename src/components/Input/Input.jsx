import React, { memo } from 'react'
const InputBar = ({ placeholder, label, icon, type, disabled, defaultValue, onChange, value, error, handleBlur, handleChange, name }) => {
    return (
        <>
            <div>
                <label htmlFor={name} className="block text-sm  capitalize font-medium text-gray-900">{label}</label>
                <input
                    disabled={disabled ? true : false}
                    onChange={onChange ? (e) => { onChange(e); handleChange(e) } : null}
                    style={error ? { borderColor: `coral` } : { borderColor: `rgb(209 213 219)` }}
                    onBlur={handleBlur}
                    value={value}
                    autoComplete="off"
                    name={name}
                    id={name}
                    type={type ? type : 'text'}
                    className={`
                 mt-1
                w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3
                pr-3 text-left shadow-sm  focus:outline-none focus:ring-1 ${error ? 'focus:ring-[#FF7F50]' : 'focus:ring-slate-800'} sm:text-sm
                duration-200
                `} placeholder={placeholder} required />
                {
                    error && <span className="italic text-red-500 text-xs">{error}</span>
                }
            </div>
        </>

    );
}

export default memo(InputBar);
