const Select = (props) => {
    const { options, title, className } = props;
    return (
        <>
            <div className="flex items-center justify-between gap-3">
                <div className="">
                    {title}
                </div>
                <select
                    style={{ boxShadow: `rgb(0 0 0 / 5%) 0px 0px 1rem 0px` }}
                    className={`bg-white drop-shadow-xl  bg-opacity-60  ${className}
                               text-gray-900  rounded-lg
                           
                               p-1 outline-none`}>
                    {options.map((item, index) => {
                        return <option key={index} value={item.slug}>{item.title}</option>
                    })}
                </select>

            </div>

        </>
    )
        ;
}

export default Select;