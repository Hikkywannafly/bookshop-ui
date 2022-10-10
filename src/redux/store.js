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

import authReducer from "./authLoginSlice";
import authRegisterReducer from "./authRegisterSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['register'],
}
const rootReducer = combineReducers({
    login: authReducer,
    register: authRegisterReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
// export default configureStore({
//     reducer: {
//         register: authRegisterReducer,
//     }
// })
export let persistor = persistStore(store)