
const AuthButton = (props) => {

    return (
        <>
            <button className=" rounded-lg bg-black px-12 py-2 w-full text-sm border-black 
                    outline-black border-2 text-white hover:text-black hover:shadow-[inset_25rem_0_0_0]
                     hover:shadow-gray-50 duration-[400ms,700ms] transition-[color,box-shadow]">
                LOG IN
            </button>
        </>

    );
}

export default AuthButton;