import { Link } from 'react-router-dom';
const HeaderAuth = (props) => {
    const { content, link } = props;
    return (
        <>
            <div className=" flex flex-row  w-full h-10 justify-between text-sm font-medium p-5">
                <div className="hover:translate-x-0 -translate-x-2  h-5 stroke-current ml-1 transition-all ease-in-out duration-200 relative  transform cursor-pointer">
                    <svg

                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />

                    </svg>
                    <span className="absolute bottom-[1px] left-7 ">BACK </span>
                </div>

                <div className="text-center mb-5">
                    <p href="#" className="group text-black transition duration-300 cursor-pointer">
                        <Link to={link}> {content}</Link>

                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default HeaderAuth;