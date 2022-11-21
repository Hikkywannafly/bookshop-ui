import axios from "axios";
import BASE_URL from "~/config/index";
import { getAxios } from "~/utils/getAxios";
import {
    getBookStarting, getBookSuccess, getBookFailure,
    getBookDetailStarting, getBookDetailSuccess, getBookDetailFailure
} from './authAdminSlice'
export const getBookDataAuth = async (axiosJWT, dispatch) => {
    dispatch(getBookStarting());
    try {
        const res = await axiosJWT.get(`${BASE_URL}/auth-admin/read-product`);
        dispatch(getBookSuccess(res.data));
        return res.data;
    }
    catch (err) {
        console.log(err)
        dispatch(getBookFailure(err.response?.data));
        return err.response?.data;
    }
}

export const getBookDataFillter = async (axiosJWT, dispatch, params) => {
    dispatch(getBookStarting());
    try {
        const res = await axiosJWT.get(`${BASE_URL}/auth-admin/read-product${params}`);
        console.log(` test res `, res.data);
        dispatch(getBookSuccess(res.data));
        return res.data;
    }
    catch (err) {
        console.log(err)
        dispatch(getBookFailure(err.response?.data));
        return err.response?.data;
    }
}

export const createBookData = async (axiosJWT, data) => {
    try {
        const res = await axiosJWT.post(`${BASE_URL}/auth-admin/create-product`, data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        return res.data;
    }
    catch (err) {
        console.log(err)
        return err.response?.data;
    }
}