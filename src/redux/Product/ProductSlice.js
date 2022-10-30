import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
    pagination: null,
    isFetching: false,
    suppliers: [],
    error: false,
    errorMessage: null,
    bookDetail: null,
    isFetchingBookDetail: false
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
} = bookSlice.actions;
export default bookSlice.reducer;