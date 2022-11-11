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

            // state.suppliers = action.payload.suppliers;
            // state.breadcrumbs = action.payload.breadcrumbs;
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
        }

    }
});
export const {
    getBookStarting,
    getBookSuccess,
    getBookFailure,
    getBookDetailStarting,
    getBookDetailSuccess,
    getBookDetailFailure
} = adminSlice.actions;
export default adminSlice.reducer;