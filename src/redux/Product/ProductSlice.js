import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: null,
    isFetching: false,
    error: false,
    errorMessage: null,
}

const bookSlice = createSlice({
    name: 'bookdata',
    initialState,
    reducers: {
        getBookStarting: (state) => {
            state.isFetching = true;
            state.data = null;
        },
        getBookSuccess: (state, action) => {
            state.isFetching = false;
            state.data = action.payload;
        },
        getBookFailure: (state, payload) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = payload;
        }

    },

})
export const {
    getBookStarting,
    getBookSuccess,
    getBookFailure,
} = bookSlice.actions;
export default bookSlice.reducer;