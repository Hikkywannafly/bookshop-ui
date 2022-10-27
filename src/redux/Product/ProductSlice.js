import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
    pagination: null,
    isFetching: false,
    suppliers: [],
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
            state.data = action.payload.books.data;
            state.pagination = action.payload.books.pagination;
            state.suppliers = action.payload.suppliers;
        },
        getBookFailure: (state, payload) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = payload;
        },
    },

})
export const {
    getBookStarting,
    getBookSuccess,
    getBookFailure,
} = bookSlice.actions;
export default bookSlice.reducer;