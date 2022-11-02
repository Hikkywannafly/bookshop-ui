import Header from "../Header";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
const HeaderHome = () => {
    const user = useSelector((state) => state.login.currentUser);
    return (<>
        <Header userInfo={user} />
        <Navbar currentUserName={user?.name} />
    </>);
}

export default HeaderHome;
