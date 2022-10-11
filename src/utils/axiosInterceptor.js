import axios from "axios";
// import jwt_decode from "jwt-decode";

const axiosInterceptor = (accessToken) => {
    const axiosInstance = axios.create({
        headers: {
            'content-type': 'application/json',
        }
    });
    axiosInstance.interceptors.request.use(
        (config) => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
                return config;
            }

        },
        (error) => {
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