import axios from "axios";

export const getSuppliers = async (params, callback) => {
    callback(true);
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/suppliers/${params}`);
        setTimeout(() =>{
            callback(false);
        },5000);
        
        return res.data;
    }
    catch (err) {
        console.log(err);
    }

}