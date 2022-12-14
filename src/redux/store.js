import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./Auth/authLoginSlice";
import authRegisterReducer from "./Auth/authRegisterSlice";
import bookReducer from './Product/ProductSlice.js'
import adminReducer from './Admin/authAdminSlice.js'
import cartReducer from './Cart/authCartSlice.js'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['register'],
}
const rootReducer = combineReducers({
    login: authReducer,
    register: authRegisterReducer,
    bookdata: bookReducer,
    admindata: adminReducer,
    cartdata: cartReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
            serializableCheck: false,
        }),
})

export let persistor = persistStore(store)