import { MdOutlineDeleteSweep } from 'react-icons/md';
const ImgItem = ({ image, name, size, deleteHandler, openLightboxOnSlide, index }) => {
    const convertSize = (size) => {
        if (size < 1024) {
            return size + ' bytes';
        } else if (size >= 1024 && size < 1048576) {
            return (size / 1024).toFixed(3) + ' KB';
        } else if (size >= 1048576) {
            return (size / 1048576).toFixed(3) + ' MB';
        }
    }
    return (<>
        <div

            className="w-full h-[50px] flex border justify-between p-2 rounded-md items-center cursor-pointer">
            <div
                onClick={() => openLightboxOnSlide(index + 1)}
                className="flex gap-4">
                <img src={image} className="w-10 h-10" alt="img upload" />
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-blue-500 truncate ">{name.length > 50 ? name.slice(0, 30) + ' ...' : name} </p>
                    <p className="text-xs text-gray-400"> {convertSize(size)}</p>
                </div>
            </div>

            <MdOutlineDeleteSweep
                onClick={() => deleteHandler(image)}
                className="text-xl text-slate-500 hover:text-red-500 duration-200 hover:animate-wiggle " />


        </div>
    </>);
}

export default ImgItem;