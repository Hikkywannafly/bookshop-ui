const LoadingCicle = () => {
    return (
        <>
            <div className="opacity-60 bg-gray-100 flex justify-center flex-col w-screen items-center min-h-screen fixed 
            inset-0 gap-3 duration-400
            z-[1000] overflow-hidden ">
                <div className="inline-block w-24 h-24 
            border-t-8 
            border-t-[#004cff]
            rounded-full 
            animate-spin">
                </div>
                <span className="text-xl font-bold text-black ml-3">Loading</span>
            </div>
        </>
    );
}

export default LoadingCicle;