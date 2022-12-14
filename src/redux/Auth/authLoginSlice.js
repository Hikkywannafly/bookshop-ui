import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
    // currentAdmin: null,
    isAuthenticated: false,
    accessToken: null,
    isFetching: false,
    error: false,
    errorMessage: null,
}

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // login
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.isAuthenticated = false;
            // action.payload.user?.role === 'admin' ?
            //     state.currentAdmin = action.payload.user
            //     : state.currentUser = action.payload.user;
            state.currentUser = action.payload.user;
            state.accessToken = action.payload.access_token;
            state.error = false;
            state.errorMessage = null;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
            state.currentUser = null;
            state.accessToken = null;
        },
        // logout
        logoutStart: (state) => {
            state.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.isFetching = false;
            state.isAuthenticated = false;
            state.currentUser = null;
            // state.currentAdmin = null;
            state.accessToken = null;
            state.error = false;
            state.errorMessage = null;

        },
        logoutFailure: (state, action) => {
            state.isFetching = false;
            state.isAuthenticated = false;
            state.currentUser = null;
            state.accessToken = null;
            state.error = true;
            state.errorMessage = action.payload;
        },
        refreshToken: (state, action) => {
            state.accessToken = action.payload;
        }
    },


})
export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure,
    refreshToken,
} = authSlice.actions;
export default authSlice.reducer;