
const AuthButton = (props) => {
    const { name, size } = props;
    return (
        <>
            <button
                style={{ padding: `${size === "sm" ? "5px 5px" : "10px 10px"}` }}
                type="submit"
                className=" mt-2  bg-black px-12 py-2.5 text-sm w-full  border-black 
                    
                    outline-black border text-white hover:text-black hover:shadow-[inset_25rem_0_0_0]
                    hover:shadow-gray-50  duration-[400ms,700ms] transition-[color,box-shadow]">
                {name}
            </button>
        </>

    );
}

export default AuthButton;