const UnderText = (props) => {
    const { text } = props;

    return (
        <>
            <p href="#" className="group text-black transition duration-300 cursor-pointer">
                {text}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </p>
        </>
    );
}

export default UnderText;