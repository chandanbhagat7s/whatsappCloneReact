import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import ErrorSlice from "./slices/ErrorSlice";
import DefaultSlice from "./slices/Default";
import FriendsSlice from "./slices/RequestSlice";
// import errorSlice from "./slices/errorSlice";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        error: ErrorSlice,
        random: DefaultSlice,
        friends: FriendsSlice
    },

})

export default store
















