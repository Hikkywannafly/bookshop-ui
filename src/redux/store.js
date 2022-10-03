import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authLoginSlice";
import authRegisterReducer from "./authRegisterSlice";
export default configureStore({
    reducer: {
        login: authReducer,
        register: authRegisterReducer,
    }
})