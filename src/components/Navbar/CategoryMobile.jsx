import { CategoryListData } from '~/dummy';

const CategoryMobile = () => {
    return (<>

        <div
            style={{ boxShadow: '0 1px 5px 2px rgb(0 0 0 / 10%)' }}
            className="mt-[120px] absolute container border-t-2 w-full 
            h-[calc(100vh-120px)] 
            bg-white animate-fade-scale left-0 right-0 mx-auto ">
            <span

                className="box-triangle animate-fade-scale absolute top-[-20px]">
                <svg
                    style={{
                        filter: 'drop-shadow(0 -3px 2px rgba(0, 0, 0, 0.14))',
                        zIndex: 30,
                    }}
                    viewBox="0 0 20 9" role="presentation" className='w-7 h-7 ml-2   '>
                    <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                </svg>
            </span>
            <div className="">
                <div className="flex items-center  my-1 px-1 py-1  ">
                    <span className=" text-gray-500  font-bold uppercase">Danh mục sản phẩm</span>

                </div>

                {
                    CategoryListData.map((item, index) => (
                        <div
                            key={item.title}
                            className="flex items-center my-1 px-1 py-3 border-b ">
                            <span className=" text-gray-900  font-medium capitalize">{item.title} </span>
                        </div>
                    ))

                }
            </div>

        </div>
    </>);
}

export default CategoryMobile;