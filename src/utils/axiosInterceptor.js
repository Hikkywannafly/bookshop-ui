import axios from "axios";
import jwt_decode from "jwt-decode";
import { refreshToken, logoutSuccess } from '~/redux/Auth/authLoginSlice';

const refreshTokenRequest = async (accessToken) => {

    try {
        const res = await axios.get('http://127.0.0.1:8000/api/auth/refresh', {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }

        })

        return res.data.access_token;
    }
    catch (error) {
        console.log(error);
    }


}

const axiosInterceptor = (accessToken, dispatch) => {

    const axiosInstance = axios.create({
        headers: {
            // 'content-type': 'application/json',
            "Content-Type": "application/json",
        }
    });

    axiosInstance.interceptors.request.use(

        async (config) => {
            let date = new Date();
            let currentTime = date.getTime() / 1000;
            let decodedToken = jwt_decode(accessToken);
            if (decodedToken.exp < currentTime) {
                const result = await refreshTokenRequest(accessToken);
                console.log(`axios interceptor`, result);
                dispatch(refreshToken(result));
                config.headers['Authorization'] = `Bearer ${result}`;
            }
            else {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }

            return config;
        },
        (error) => {

            dispatch(logoutSuccess());
            console.log(`error in axios interceptor ${error}`);
            return Promise.reject(error);
        }
    );
    return axiosInstance;
}
export default axiosInterceptor;
