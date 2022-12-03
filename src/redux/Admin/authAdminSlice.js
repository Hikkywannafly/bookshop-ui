import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: null,
    pagination: null,
    isFetching: false,
    error: false,
    errorMessage: null,
    bookDetail: null,
    isFetchingBookDetail: false,
    statistics: null,
    // breadcrumbs: null
}

const adminSlice = createSlice({
    name: 'admindata',
    initialState,
    reducers: {
        getBookStarting: (state) => {
            state.isFetching = true;
            state.data = null;
        },
        getBookSuccess: (state, action) => {
            state.isFetching = false;
            state.data = action.payload.book.data;
            state.pagination = action.payload.book.pagination;
            state.statistics = action.payload.statistic;
        },
        getBookFailure: (state, payload) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = payload;
        },
        getBookDetailStarting: (state) => {
            state.isFetchingBookDetail = true;
            state.bookDetail = null;
        },
        getBookDetailSuccess: (state, action) => {
            state.isFetchingBookDetail = false;
            state.bookDetail = action.payload.book;
        },
        getBookDetailFailure: (state, payload) => {
            state.isFetchingBookDetail = false;
            // state.error = true;
            // state.errorMessage = payload;
        },
        deleteBook: (state, action) => {
            state.data = state.data.filter(book => book.id !== action.payload);

        },


    }
});
export const {
    getBookStarting,
    getBookSuccess,
    getBookFailure,
    getBookDetailStarting,
    getBookDetailSuccess,
    getBookDetailFailure,
    deleteBook
} = adminSlice.actions;
export default adminSlice.reducer;