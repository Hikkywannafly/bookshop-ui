import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
    accessToken: null,
    isFetching: false,
    error: false,
    errorData: null,
}

const authRegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.accessToken = action.payload.access_token;
            state.error = false;
            state.errorData = null;
        },
        registerFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorData = action.payload;
            state.currentUser = null;
            state.accessToken = null;
        },
        registerEnd: (state) => {
            state.isFetching = false;

        }
    }
});
export const {
    registerStart,
    registerFailure,
    registerSuccess,
    registerEnd
} = authRegisterSlice.actions;
export default authRegisterSlice.reducer;