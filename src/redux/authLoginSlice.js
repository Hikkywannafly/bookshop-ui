import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
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
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.isAuthenticated = true;
            state.currentUser = action.payload;
            state.error = false;
            state.errorMessage = null;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
            state.currentUser = null;
        }
    }
})
export const {
    loginStart,
    loginSuccess,
    loginFailure
} = authSlice.actions;
export default authSlice.reducer;