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
            const isExist = state.cartItems.find(item => item.book.id === action.payload.id);
            if (!isExist) {
                state.total += 1;
            }
        },
        updateCartItems: (state, action) => {
            const isExist = state.cartItems.find(item => item.book.id === action.payload.book_id);
            if (isExist) {
                state.total -= 1;
            }
            state.cartItems = state.cartItems.filter(item => item.book.id !== action.payload.book_id);
        },
        updateLogOut: (state) => {
            state.cartItems = [];
            state.total = 0;
        },
        updateCartItemsAfterChagne: (state, action) => {
            // update quantity
            console.log(`debugg 1`, action.payload);
            const isExist = state.cartItems.find(item => item.book.id === action.payload.id);
            isExist.quantity += action.payload.value;
        }

    }
});
export const {
    getCartStarting,
    getCartSuccess,
    getCartFailure,
    updateCartTotal,
    updateCartItems,
    updateLogOut,
    updateCartItemsAfterChagne
} = cartSlice.actions;
export default cartSlice.reducer;