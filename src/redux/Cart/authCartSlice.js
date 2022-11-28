import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    error: null,
    total: 0,
    isFetching: false,
    systemMessage: null,
    errorMessage: null,
}

const cartSlice = createSlice({
    name: 'authCart',
    initialState,
    reducers: {
        getCartStarting: (state) => {
            state.isFetching = true;
            state.cartItems = [];
        },
        getCartSuccess: (state, action) => {
            state.isFetching = false;
            state.cartItems = action.payload.data.cart_items;
            state.total = action.payload.total_items;
        },
        getCartFailure: (state, payload) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = payload;
        },
        updateCartTotal: (state, action) => {
            console.log(`debugg 1`, action.payload);
            const isExist = state.cartItems.find(item => item.book.id === action.payload.id);
            if (!isExist) {
                state.total += 1;
            }
        },
        updateCartItems: (state, action) => {
            console.log(`debugg 2`, action.payload);
            const isExist = state.cartItems.find(item => item.book.id === action.payload.book_id);
            if (isExist) {
                state.total -= 1;
            }
            state.cartItems = state.cartItems.filter(item => item.book.id !== action.payload.book_id);
        }

    }
});
export const {
    getCartStarting,
    getCartSuccess,
    getCartFailure,
    updateCartTotal,
    updateCartItems
} = cartSlice.actions;
export default cartSlice.reducer;