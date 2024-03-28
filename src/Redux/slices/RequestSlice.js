import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const sendMessage = createAsyncThunk('/message/user', async () => {

    try {
        const res = await axios.get("/api/v1/users/getFriendList", {
            withCredentials: true,
        });
        if (res) {
            return res.data
        }
    } catch (error) {
        return error.response;
    }


})


export const getAllCommunication = createAsyncThunk('/AllMessage/user', async () => {

    try {
        const res = await axios.get("/api/v1/users/getAllCommunication", {
            withCredentials: true,
        });
        if (res.data.status) {
            return res.data.data
        }
    } catch (error) {
        return []
    }


})







// export const loginForm = createAsyncThunk('/login/user', async (data) => {


//     try {
//         let { email, password } = data;

//         console.log("data is ", data);
//         const res = await axios.post('/api/v1/users/login', {
//             email, password
//         }, {
//             withCredentials: true
//         })
//         if (res) {
//             console.log(res);
//             return res


//         }
//     } catch (error) {

//         console.log(error);
//         return error.response;
//     }


// })

const initialState = {
    friends: [],
    open: false,
    chatListUsers: [],
    openedUser: '',
    load: false
}
const friendsSlice = createSlice({
    name: 'Friends',
    initialState,
    reducers: {

        openChatBox: (state, action) => {
            state.open = true
        },
        loading: (state, action) => {
            state.load = state.load ? false : true
        },
        setOpenUser: (state, action) => {
            state.openedUser = action.payload._id
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            if (action.payload.status) {

                state.friends = action.payload.data
            }


        }).addCase(getAllCommunication.fulfilled, (state, action) => {



            state.chatListUsers = action.payload


        })

    }
})



export const { openChatBox, setOpenUser, loading } = friendsSlice.actions


export default friendsSlice.reducer

















