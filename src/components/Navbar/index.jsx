import Category from './Category';
import Itembar from './Itembar';
import { useSelector } from 'react-redux';
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

                    <a href="pages/login.html" className=" hover:text-white transition capitalize">

                        {userData ? `Hi ${userData.name}` : 'Guest'}
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;