const AuthInput = (props) => {
    const { type, name, id, content, handleChange, icon, handleClick, error, value, handleBlur } = props;
    return (
        <>
            <div className="relative z-0 mb-1 w-full group ">
                <div className={`absolute right-2 cursor-pointer ${error ? 'bottom-9 ' : `bottom-3`} `} onClick={handleClick} >
                    {icon}
                </div>

                <input
                    style={error ? { borderColor: `coral` } : { borderColor: `rgb(209 213 219)` }}
                    onChange={handleChange}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onBlur={handleBlur}
                    autoComplete="off"

                    className="block py-2.5 px-0 w-full text-sm
                  text-gray-900 bg-transparent border-0 
                  border-b-2 border-gray-300 appearance-none dark:text-black 
                   focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />

                <label htmlFor={id} className="peer-focus:font-medium absolute text-sm dark:text-gray-400
                duration-300 transform -translate-y-[10px] scale-85 top-[-5px] -z-10 origin-[0] peer-focus:left-0
                peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 
                 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-[10px]">{content}</label>

                {
                    error && <span className="italic text-red-500 text-xs">{error}</span>
                }


            </div>
        </>

    );
}

export default AuthInput;