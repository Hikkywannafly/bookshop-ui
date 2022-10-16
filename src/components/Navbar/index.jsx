import Category from './Category';
import Itembar from './Itembar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UnderText from '~/components/Animation/UnderText';
const Navbar = () => {
    const userData = useSelector((state) => state.login.currentUser);
    return (
        <>
            <nav className=" bg-white bg-opacity-60 backdrop-blur ">
                <div className="container flex justify-between items-center py-1.5 text-sm ">
                    <div className="flex justify-between">
                        <Category />
                        <Itembar />
                    </div>

                    <a href="pages/login.html" className="  transition capitalize">

                        {userData ? (<>
                            Hi, <span className='font-bold'> {userData.name}</span>
                        </>) :
                            (<div className='flex flex-row justify-center gap-2.5  '>
                                <div className=''>
                                    <Link to='/register'>
                                        <UnderText text={`Regiter`} />
                                    </Link>
                                </div>

                                <div className=''>
                                    <Link to='/login'>
                                        <UnderText text={`Login`} />
                                    </Link>
                                </div>
                            </div>
                            )
                        }
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;