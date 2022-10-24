import LoadingSkeleton from "../Animation/LoadingSkeleton";
const CheckBoxGroup = (props) => {
    const { options, value, id, onChange } = props;
    return (<>
        <div className="flex items-center mb-1 last:mb-0 ">
            <input
                id={id} type="checkbox" value="" className="w-3 h-3 accent-orange-600 text-orange-500 rounded border-gray-300 " />
            <label htmlFor={id} className="ml-2 ">{value}</label>
        </div>
    </>);
}

const Loading = () => {
    return (
        <div className="flex items-center mb-1 last:mb-0 ">
            <LoadingSkeleton className="w-full h-4 mb-1"></LoadingSkeleton>
        </div>
    )
}

CheckBoxGroup.Loading = Loading;

export default CheckBoxGroup;