import { Link } from 'react-router-dom';
const HeaderAuth = (props) => {
    const { content, link } = props;
    return (
        <>
            <div className=" flex flex-row w-full h-10 justify-between text-sm font-medium p-5">
                <div className="text-center mb-5 ">
                    <p href="#" className="group text-black transition duration-300 cursor-pointer hover:animate-wiggle">
                        <Link to={`../`}>   <span className="uppercase"> Hikky Books  </span></Link>
                    </p>
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