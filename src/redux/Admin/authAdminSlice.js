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
    orderData: null,
    orderDetailData: null,
    isFetchingOrder: false,
    orderPagination: null,
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
        getOrderStarting: (state) => {
            state.isFetchingOrder = true;
            state.orderData = null;
        },
        getOrderSuccess: (state, action) => {
            state.isFetchingOrder = false;
            state.orderData = action.payload.orders.data;

            state.orderPagination = action.payload.orders.pagination;

        },
        getOrderDetailSuccess: (state, action) => {
            state.isFetchingOrder = false;
            state.orderDetailData = action.payload.order;
        }
    }
});
export const {
    getBookStarting,
    getBookSuccess,
    getBookFailure,
    getBookDetailStarting,
    getBookDetailSuccess,
    getBookDetailFailure,
    deleteBook,
    getOrderStarting,
    getOrderSuccess,
    getOrderDetailSuccess

} = adminSlice.actions;
export default adminSlice.reducer;