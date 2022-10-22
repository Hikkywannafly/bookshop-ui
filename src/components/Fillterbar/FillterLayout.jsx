import { IoIosArrowUp, IoIosArrowDown, IoMdArrowDropup } from 'react-icons/io';
const FillterLayout = ({ children }, props) => {
    const { width, setCategory, category } = props
    return (
        <>
            <div
                style={{ zIndex: 0 }}
                className="bg-white w-[300px]  shadow-sm p-3 rounded-lg drop-shadow-sm flex flex-col justify-start">
                <div className="border-b">

                    <div className="flex justify-between mb-3">
                        <div className="flex gap-2 items-center">
                            <span className="w-1 h-3.5 bg-slate-800"></span>
                            <h1 className='font-bold uppercase'> category</h1>
                        </div>

                        <div
                            id="category"
                            onClick={(e) => {
                                category === 'category' ?
                                    setCategory() : setCategory('category')
                            }}
                            className=" px-3 cursor-pointer ">
                            {category === 'category' ? <IoIosArrowUp className="animate-fade-rotate-right " /> : <IoIosArrowDown className="animate-fade-rotate" />}
                        </div>
                    </div>
                    <div className={` animate-fade-down ${category === 'category' ? ` hidden ` : ''}`}>

                        <div className="flex items-center">

                            <h1 className=" ml-3 mb-3 text-sm uppercase font-medium cursor-pointer ">All categories</h1>

                        </div>

                        {
                            children
                        }
                    </div>
                </div>

            </div>

        </>
    );
}

export default FillterLayout;