import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
// import errorSlice from "./slices/errorSlice";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        // error: errorSlice
    },

})

export default store
















