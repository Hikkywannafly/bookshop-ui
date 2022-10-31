
const Button = (props) => {
    const { content, color, icon } = props;
    return (
        <>
            <button
                // style={{ padding: `${size === "sm" ? "5px 5px" : "10px 10px"}` }}
                type="submit"
                className={`${color} mt-2 p-3 bg-black px-12 py-2.5 text-sm font-medium w-full  border-black 
                    rounded-lg 
                    outline-black border text-white hover:text-black hover:shadow-[inset_25rem_0_0_0]
                    hover:shadow-gray-50  duration-[400ms,700ms] transition-[color,box-shadow] flex items-center gap-4 justify-center `}>
                {icon}
                {content}
            </button>
        </>

    );
}

export default Button;