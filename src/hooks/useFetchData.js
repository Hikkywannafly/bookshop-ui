import { useSelector, useDispatch } from "react-redux";
import axiosInterceptor from '~/utils/axiosInterceptor';
export const useFetchData = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector((state => state.login.accessToken));
    const axios = axiosInterceptor(accessToken, dispatch);
    return axios;
}