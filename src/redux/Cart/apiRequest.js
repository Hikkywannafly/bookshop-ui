import axios from "axios";
import BASE_URL from "~/config/index";
import { getAxios } from "~/utils/getAxios";
import {
    getCartStarting,
    getCartSuccess,
    getCartFailure,
    updateCartTotal,
    updateCartItems
} from './authCartSlice';

// get cart
export const getCartData = async (axiosJWT, dispatch) => {
    dispatch(getCartStarting());
    return await axiosJWT.get(`${BASE_URL}/auth/cart`)
        .then(res => {
            dispatch(getCartSuccess(res.data));
            console.log(`debugg 1`, res.data);
            return res.data;
        })
        .catch(err => {
            dispatch(getCartFailure(err.response.data));
            return err.response.data;
        });
}
// add to cart
export const addToCart = async (axiosJWT, params) => {
    return await axiosJWT.post(`${BASE_URL}/auth/cart`, params)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        });
}
// update total cart
export const updateTotal = async (dispatch, value, id) => {

    dispatch(updateCartTotal({
        value,
        id
    }));
}
// update cart
export const updateCart = async (params, dispatch) => {
    dispatch(getCartStarting());
    return await getAxios.patch(`${BASE_URL}/auth/cart`, params)
        .then(res => {
            dispatch(getCartSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(getCartFailure(err.response.data));
            return err.response.data;
        });
}
// delete cart
export const deleteCartItem = async (axiosJWT, params, dispatch) => {

    return await axiosJWT.delete(`${BASE_URL}/auth/cart1`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: params
    })
        .then(res => {
            dispatch(updateCartItems(params));
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        });
}