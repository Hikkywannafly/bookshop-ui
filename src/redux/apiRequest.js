import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logoutSuccess, logoutFailure, logoutStart } from './authLoginSlice';
import { registerStart, registerSuccess, registerFailure, registerEnd } from './authRegisterSlice';
const fetchAuthLogin = async (user) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/login", user)
}
const fetchAuthRegister = async (user) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/register", user)
}
const fetchAuthGoogle = async (user) => {
    return await axios.post("http://127.0.0.1:8000/api/auth/google", user)
}
export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    return await fetchAuthLogin(user)
        .then(res => {
            dispatch(loginSuccess(res.data));
            // console.log('debug', res.data);
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
            localStorage.setItem("tokenVerify", res.data.access_token);
            return res.data;
        })
        .catch(err => {
            dispatch(registerFailure(err.response.data));
            console.log('fetchAuthRegister error', err.response.data);
            return err.response.data;
        })
}
export const logoutUser = async (axiosJWT, dispatch) => {
    dispatch(logoutStart());
    try {

        const res = axiosJWT.post('http://127.0.0.1:8000/api/auth/logout');
        dispatch(logoutSuccess(res.data));
        return res.data;
    }
    catch (err) {
        console.log(err);
        dispatch(logoutFailure(err.response.data));
        return err.response.data;
    }
}

export const LoginWithSocial = async (social, credentialResponse) => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/${social}`, {
            userToken: credentialResponse,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const LoginWithGoogle = async (user, dispatch) => {
    dispatch(loginStart());
    dispatch(registerStart());
    return await fetchAuthGoogle(user)
        .then(res => {
            dispatch(registerEnd());
            dispatch(loginSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(loginFailure(err.response.data));
            return err.response.data;
        });

}