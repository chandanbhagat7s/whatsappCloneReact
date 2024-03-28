import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const signupForm = createAsyncThunk('/signup/user', async (data) => {


    try {
        let { name, email, password, mobile, bio, age } = data;

        const res = await axios.post('/api/v1/users/signup', {
            name, email, password, mobile, bio, age
        }, {
            withCredentials: true
        })
        if (res) {
            return res


        }
    } catch (error) {

        return error.response;
    }


})

export const loginForm = createAsyncThunk('/login/user', async (data) => {


    try {
        let { email, password } = data;

        const res = await axios.post('/api/v1/users/login', {
            email, password
        }, {
            withCredentials: true
        })
        if (res) {
            return res


        }
    } catch (error) {

        return error.response;
    }


})

const initialState = {
    data: localStorage.getItem("data") || '',
    isLoggedIn: localStorage.getItem("isLoggedIn") || 'false',
}
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(signupForm.fulfilled, (state, action) => {
            if (action.payload.data.status) {
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                localStorage.setItem("data", JSON.stringify(action?.payload?.data?.user))
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.user;
            }


        }).addCase(loginForm.fulfilled, (state, action) => {
            if (action.payload.data.status) {
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                localStorage.setItem("data", JSON.stringify(action?.payload?.data?.user))
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.user;
            }


        })

    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer

















