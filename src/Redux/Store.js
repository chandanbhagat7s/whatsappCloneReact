import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import ErrorSlice from "./slices/ErrorSlice";
// import errorSlice from "./slices/errorSlice";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        error: ErrorSlice
    },

})

export default store
















