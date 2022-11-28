import LoadingSkeleton from "../Animation/LoadingSkeleton";
const BookDetailSkeleton = () => {
    return (<>

        <div className='flex flex-col items-center w-[484px] mx-3 mr-8'>
            <div className=" flex items-center">
                <div className="w-[76px] h-full flex flex-col gap-3 ">

                    {
                        Array(4).fill(0).map((item, index) => (
                            <LoadingSkeleton key={index} className="w-[76px] h-[76px]  rounded-lg" />
                        ))

                    }

                </div>
                <div className="h-[388px] w-[300px] flex justify-center items-center m-3">
                    <LoadingSkeleton className='max-h-[392px] max-w-[100%] h-full w-full'></LoadingSkeleton>
                </div>
            </div>
            <br />
            <div className=" flex flex-row gap-3 w-full">
                <LoadingSkeleton className='w-[200px] h-[40px]'></LoadingSkeleton>
                <LoadingSkeleton className='w-[200px] h-[40px]'></LoadingSkeleton>
            </div>
        </div>
        <div className="w-full">
            <div className="text-lg tracking-wide font-medium  border-gray-100 py-4 pr-4">
                <LoadingSkeleton className='w-full h-[30px]'></LoadingSkeleton>
            </div>
            <div className="  border-gray-100 py-4 pr-4 flex justify-between  ">
                <div className="">
                    <LoadingSkeleton className='mb-4 w-[200px] h-[30px]'></LoadingSkeleton>
                    <LoadingSkeleton className='w-[200px] h-[30px]'></LoadingSkeleton>
                </div>
                <div className="">
                    <LoadingSkeleton className='mb-4 w-[200px] h-[30px]'></LoadingSkeleton>
                    <LoadingSkeleton className='w-[200px] h-[30px]'></LoadingSkeleton>
                </div>


            </div>

            <div className="  border-gray-100 py-4 pr-4  flex w-full justify-start items-center mt-2.5 mb-2">
                <LoadingSkeleton className='w-[300px] h-[40px]'></LoadingSkeleton>

            </div>
            <div className="  border-gray-100  py-4 pr-4  flex w-full justify-start items-center mt-2.5 mb-2 gap-5 ">
                <LoadingSkeleton className='w-[300px] h-[40px]'></LoadingSkeleton>
            </div>
            <div className="font-medium  border-gray-100 py-4 pr-4 flex items-center gap-3">

            </div>

        </div>

    </>);
}

export default BookDetailSkeleton;