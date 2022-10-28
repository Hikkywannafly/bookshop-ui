import LoadingSkeleton from "../Animation/LoadingSkeleton";
const CheckBoxGroup = (props) => {
    const { value, id, handleSelect, name, title, fillter } = props;

    return (<>
        <div

            className="flex items-center mb-1 last:mb-0 ">
            <input
                name={title}
                onChange={handleSelect}
                checked={fillter[title]?.includes(name)}
                id={name} type="radio" value={value} className="w-3 h-3 accent-orange-600 text-orange-500 rounded border-gray-300 " />
            <label htmlFor={name} className="ml-2 ">{name}</label>
        </div>
    </>);
}

const Loading = () => {
    return (
        <>
            {
                Array(6)
                    .fill(0)
                    .map((item, index) => (
                        < div key={index} className="flex items-center mb-1 last:mb-0 " >
                            <LoadingSkeleton className="w-full h-4 mb-1"></LoadingSkeleton>
                        </div >
                    ))
            }
        </>
    )
}

CheckBoxGroup.Loading = Loading;

export default CheckBoxGroup;