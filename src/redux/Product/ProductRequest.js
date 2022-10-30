import axios from "axios";
import { getBookStarting, getBookSuccess, getBookFailure, getBookDetailStarting, getBookDetailSuccess, getBookDetailFailure } from "./ProductSlice";
const fetchBookData = async (params) => {
    return await axios.get(`http://127.0.0.1:8000/api/category${params}`)
}
const fetchBookData3 = async (params, searchparams) => {

    return await axios.get(`http://127.0.0.1:8000/api/category${params}${searchparams}`)
}
const fetchBookData2 = async (params) => {
    return await axios.get(`${params}`)
}
const fechBookDetail = async (params) => {
    return await axios.get(`http://127.0.0.1:8000/api${params}`)
}
export const getSuppliers = async (params, callback) => {
    callback(true);
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/suppliers${params}`);
        setTimeout(() => {
            callback(false);
        }, 500);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getBookData = async (params, dispatch) => {
    dispatch(getBookStarting());
    return await fetchBookData(params)
        .then(res => {
            dispatch(getBookSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(getBookFailure(err.response.data));
            return err.response.data;
        });
}

export const getBookData3 = async (params, searchparams, dispatch) => {
    dispatch(getBookStarting());
    return await fetchBookData3(params, searchparams)
        .then(res => {
            dispatch(getBookSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(getBookFailure(err.response?.data));
            return err.response.data;
        });
}
export const getBookData2 = async (params, dispatch) => {
    dispatch(getBookStarting());
    return await fetchBookData2(params)
        .then(res => {
            dispatch(getBookSuccess(res.data.books));
            return res.data;
        })
        .catch(err => {
            dispatch(getBookFailure(err.response.data));
            return err.response.data;
        });
}

export const getBookDetail = async (params, dispatch) => {
    dispatch(getBookDetailStarting());
    return await fechBookDetail(params)
        .then(res => {
            dispatch(getBookDetailSuccess(res.data));
            console.log(` test bookDeital `, res.data.book);
            return res.data;
        })
        .catch(err => {
            dispatch(getBookDetailFailure(err.response.data));
            return err.response.data;
        });

}