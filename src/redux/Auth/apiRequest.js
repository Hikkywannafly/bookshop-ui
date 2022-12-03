import BASE_URL from "~/config/index";
import { getAxios } from "~/utils/getAxios";
import { loginStart, loginSuccess, loginFailure, logoutSuccess, logoutFailure, logoutStart } from './authLoginSlice';
import { registerStart, registerSuccess, registerFailure, registerEnd } from './authRegisterSlice';
import { updateLogOut } from '../Cart/authCartSlice';
export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    return await getAxios.post(`${BASE_URL}/auth/login`, user)
        .then(res => {
            dispatch(loginSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(loginFailure(err.response.data));

            return err.response.data;
        });
}
export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());
    return await getAxios.post(`${BASE_URL}/auth/register`, user)
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
        const res = axiosJWT.post(`${BASE_URL}/auth/logout`);
        dispatch(logoutSuccess(res.data));
        dispatch(updateLogOut());
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
        const res = await getAxios.post(`${BASE_URL}/auth/${social}`, {
            userToken: credentialResponse,
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
    return await getAxios.post(`${BASE_URL}/auth/google`, user)
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

