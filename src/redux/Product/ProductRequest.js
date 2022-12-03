import axios from "axios";
import BASE_URL from "~/config/index";
import { getAxios } from "~/utils/getAxios";
import {
    getBookStarting, getBookSuccess, getBookFailure,
    getBookDetailStarting, getBookDetailSuccess, getBookDetailFailure
} from "./ProductSlice";
// get supplier according to category
export const getSuppliers = async (params, callback) => {
    callback(true);
    return await axios.get(`${BASE_URL}suppliers${params}`)
        .then(res => {
            callback(false);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}
// get book list
export const getBookData = async (params, dispatch) => {
    dispatch(getBookStarting());
    return await getAxios.get(`${BASE_URL}/category${params}`)
        .then(res => {
            dispatch(getBookSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(getBookFailure(err.response.data));
            return err.response.data;
        });
}
// get book list with fillter
export const getBookDataFillter = async (params, searchparams, dispatch) => {
    dispatch(getBookStarting());
    return await getAxios.get(`${BASE_URL}/category${params}${searchparams}`)
        .then(res => {
            dispatch(getBookSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(getBookFailure(err.response?.data));
            return err.response.data;
        });
}
// get book detail
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