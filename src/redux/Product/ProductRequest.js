import axios from "axios";
import { getBookStarting, getBookSuccess, getBookFailure } from "./ProductSlice";
const fetchBookData = async (params) => {
    return await axios.get(`http://127.0.0.1:8000/api/category${params}`)
}
export const getSuppliers = async (params, callback) => {
    callback(true);
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/suppliers/${params}`);
        setTimeout(() => {
            callback(false);
        }, 1000);
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
            dispatch(getBookSuccess(res.data.books));
            // console.log('debug', res.data);
            return res.data;
        })
        .catch(err => {
            dispatch(getBookFailure(err.response.data));
            return err.response.data;
        });
}