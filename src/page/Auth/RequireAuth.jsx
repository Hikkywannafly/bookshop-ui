import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequireAuth = ({ allowedRoles }) => {
    const auth = useSelector((state) => state.login.currentUser);
    const location = useLocation();
    console.log(`test`, allowedRoles?.find(role => auth?.role?.includes(role)));
    return (
        allowedRoles?.find(role => auth?.role?.includes(role)) ?
            <Outlet />
            :
            auth ?
                <Navigate to={`${location.pathname} `} state={{ from: location }} />
                : <Navigate to="/" state={{ from: location }} />
    );
}

export default RequireAuth;