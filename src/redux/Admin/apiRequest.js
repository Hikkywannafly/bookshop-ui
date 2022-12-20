import axios from "axios";
import BASE_URL from "~/config/index";
import { getAxios } from "~/utils/getAxios";
import {
    getBookStarting, getBookSuccess, getBookFailure,
    getBookDetailStarting, getBookDetailSuccess, getBookDetailFailure, deleteBook, getOrderStarting,
    getOrderSuccess,
    getOrderDetailSuccess,
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

export const getBookDetail = async (params, dispatch) => {
    dispatch(getBookDetailStarting());
    return await getAxios.get(`${BASE_URL}${params}`)
        .then(res => {
            dispatch(getBookDetailSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(getBookDetailFailure(err.response.data));
            return err.response.data;
        });

}

export const updateBookData = async (axiosJWT, data) => {
    try {
        const res = await axiosJWT.post(`${BASE_URL}/auth-admin/update-product`, data,
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
export const deleteBookData = async (axiosJWT, id, dispatch) => {
    try {
        const res = await axiosJWT.post(`${BASE_URL}/auth-admin/delete-product`, { id });
        dispatch(deleteBook(id));
        console.log(res.data)
        return res.data;
    }
    catch (err) {
        console.log(err)
        return err.response?.data;
    }
}

export const getOrderData = async (axiosJWT, dispatch) => {
    dispatch(getOrderStarting());
    try {
        const res = await axiosJWT.get(`${BASE_URL}/auth-admin/read-order`);
        dispatch(getOrderSuccess(res.data));
        return res.data;
    }
    catch (err) {
        return err.response?.data;
    }
}

export const getOrderDetail = async (axiosJWT, dispatch, params) => {
    dispatch(getOrderStarting());
    try {
        const res = await axiosJWT.get(`${BASE_URL}/auth-admin/read-order-detail/${params}`);
        dispatch(getOrderDetailSuccess(res.data));
        console.log(`test api`, res.data);
        return res.data;
    }
    catch (err) {
        return err.response?.data;
    }
}
export const getOrderFillter = async (axiosJWT, dispatch, params) => {
    try {
        const res = await axiosJWT.get(`${BASE_URL}/auth-admin/read-order${params}`);
        return res.data;
    }
    catch (err) {
        console.log(err)
        return err.response?.data;
    }
}

export const getOrderData2 = async (axiosJWT, dispatch) => {

    try {
        const res = await axiosJWT.get(`${BASE_URL}/auth-admin/read-order`);
        dispatch(getOrderSuccess(res.data));
        return res.data;
    }
    catch (err) {
        return err.response?.data;
    }
}