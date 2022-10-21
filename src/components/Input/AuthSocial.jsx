
const AuthSocial = (props) => {
    const { name, icon, handleClick } = props
    return (
        <>
            <div
                onClick={handleClick}
                className="text-left w-full ">
                <button
                    type="button" className={`w-full bg-white border 
                     focus:outline-none hover:shadow-[inset_25rem_0_0_0]
                    hover:shadow-gray-100 duration-[400ms,700ms] transition-[color,box-shadow]
                     font-medium  text-sm px-5 py-3 text-center inline-flex items-center
                      mr-2 mb-2`}>
                    {<span className="text-[22px]">{icon}</span>}
                    <span className="m-auto">Continue With {name} </span>
                </button>
            </div>
        </>

    );
}

export default AuthSocial;