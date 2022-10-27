import Category from './Category';
import Itembar from './Itembar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryMobile from './CategoryMobile';
import UnderText from '~/components/Animation/UnderText';
import { useStateContext } from '~/hook/useStateContext';
const Navbar = () => {
    const { mobile, click } = useStateContext();
    const userData = useSelector((state) => state.login.currentUser);
    return (
        <>
            <nav
                style={{ zIndex: 10 }}
                className=" bg-slate-300 bg-opacity-60 backdrop-blur ">
                <div className="container flex justify-between items-center py-1.5 lg:max-w-[1300px] relative">
                    <div className="flex justify-between ">
                        <Category />
                        <Itembar />
                    </div>
                    {userData ? (<div>
                        Hi, <span className='font-bold'> {userData.name}</span>
                    </div>) :
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

                </div>
            </nav>
            {
                mobile && click && (<CategoryMobile />)
            }

        </>
    );
}

export default Navbar;