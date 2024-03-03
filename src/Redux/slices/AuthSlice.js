import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const login = createAsyncThunk('/login/user', async (data) => {


    try {
        let { name, password } = data;

        console.log(name, password, data);
        const res = await axios.post('/api/AdminLogin/', {
            adminname: name,
            adminpassword: password
        }, {
            withCredentials: true
        })
        if (res) {
            console.log(res);
            return res


        }
    } catch (error) {

        console.log(error);

    }


})

const initialState = {
    data: localStorage.getItem("data") || '',
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
}
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("isLoggedIn", true)
            state.isLoggedIn = true;


        })

    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer

















