import axios from "axios";
export const getAxios = axios.create({
    headers: {
        "content-type": "application/json",
    },
})