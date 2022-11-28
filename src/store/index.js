import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/Users";


const store = configureStore({
    reducer:{
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store;