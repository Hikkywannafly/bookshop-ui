import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from './authLoginSlice';
import { registerStart, registerSuccess, registerFailure } from './authRegisterSlice';
const fetchAuthLogin = async (user) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/login", user)
}
const fetchAuthRegister = async (user) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/register", user)
}
export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    return await fetchAuthLogin(user)
        .then(res => {
            dispatch(loginSuccess(res.data));
            // navigate("/");
            return res.data;
        })
        .catch(err => {
            dispatch(loginFailure(err.response.data));

            return err.response.data;
        });
}
export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());
    return await fetchAuthRegister(user)
        .then(res => {
            dispatch(registerSuccess(res.data));
            localStorage.setItem("accessToken", res.data.access_token);
            return res.data;
        })
        .catch(err => {
            dispatch(registerFailure(err.response.data));
            console.log('fetchAuthRegister error', err.response.data);
            return err.response.data;
        })

}