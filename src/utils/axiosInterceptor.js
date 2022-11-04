import axios from "axios";
import jwt_decode from "jwt-decode";
const refreshToken = async (accessToken) => {
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
const axiosInterceptor = (accessToken, dispatch, getState, logoutSuccess) => {
    const axiosInstance = axios.create({
        headers: {
            'content-type': 'application/json',
        }
    });
    axiosInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            let currentTime = date.getTime() / 1000;
            let decodedToken = jwt_decode(accessToken);
            if (decodedToken.exp < currentTime) {
                const result = await refreshToken(accessToken);
                dispatch(getState(result));
                config.headers['Authorization'] = `Bearer ${result}`;
            }
            else {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }

            return config;
        },
        (error) => {
            dispatch(logoutSuccess());
            return Promise.reject(error);
        }
    );
    return axiosInstance;
}
export default axiosInterceptor;
