import Category from './Category';
import Itembar from './Itembar';
import { Link } from 'react-router-dom';
import CategoryMobile from './CategoryMobile';
import UnderText from '~/components/Animation/UnderText';
import { useStateContext } from '~/hooks/useStateContext';
import { memo } from 'react';
const Navbar = ({ currentUserName }) => {
    const { mobile, isClicked } = useStateContext();

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
                    {currentUserName ? (<div>
                        Hi, <span className='font-bold'> {currentUserName}</span>
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
                mobile && isClicked.navCategory && (<CategoryMobile />)
            }

        </>
    );
}

export default memo(Navbar);