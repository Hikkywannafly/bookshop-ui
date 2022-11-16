const InputBar = ({ placeholder, label, icon, type, disabled, defaultValue, onChange, value, handleBlur, handleChange }) => {
    return (
        <>
            <div>
                <label htmlFor="first_name" className="block text-sm  capitalize font-medium text-gray-900">{label}</label>
                <input
                    disabled={disabled ? true : false}
                    onChange={onChange ? (e) => { onChange(e); handleChange(e) } : null}
                    // defaultValue={defaultValue}
                    onBlur={handleBlur}
                    value={value ? value : defaultValue}
                    autoComplete="off"
                    type={type ? type : 'text'} id="first_name" className="
                mt-1
                w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3
                pr-3 text-left shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm
                duration-200
                " placeholder={placeholder} required />
            </div>
        </>

    );
}

export default InputBar;