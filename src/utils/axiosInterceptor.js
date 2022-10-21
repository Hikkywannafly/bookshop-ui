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
            // console.log(`accessToken: ${accessToken}`);
            // const result = await refreshToken(accessToken);
            // console.log('debug', result);

            if (decodedToken.exp < currentTime) {
                const result = await refreshToken(accessToken);
                // console.log('debug', result);
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
// const axiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         'content-type': 'application/json',
//     },
//     // paramsSerializer: (params) => queryString.stringify(params),
// });

// axiosInstance.interceptors.request.use(async (config) => {
//     const customHeaders = {};
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//         customHeaders.Authorization = accessToken;
//     }

//     return {
//         ...config,
//         headers: {
//             ...customHeaders,
//             ...config.headers,
//         }
//     };
// });

// export default axiosInstance;

// const axiosInstance = (user, dispatch, state) => {
//     const newInstance = axios.create();
//     newInstance.interceptors.request.use(
//         async (config) => {
//             const customHeaders = {};
//             // let date = new Date();
//             // const decodedToken = jwt_decode(user?.access_token);
//             // if (decodedToken.exp < date.getTime() / 1000) {
//             //     // const data = await refreshToken();
//             //     // const refreshUser = {
//             //     //     ...user,
//             //     //     accessToken: data.accessToken,
//             //     // };
//             //     // dispatch(state(refreshUser));
//             //     // config.headers["token"] = "Bearer " + data.accessToken;
//             // }

//             const accessToken = localStorage.getItem("accessToken");
//             if (accessToken) {
//                 customHeaders.Authorization = accessToken;
//             }
//             return {
//                 ...config,
//                 headers: {
//                     ...customHeaders,  // auto attach token
//                     ...config.headers, // but you can override for some requests
//                 }
//             };
//         },
//         (err) => {
//             return Promise.reject(err);
//         }
//     );
//     return newInstance;
// }