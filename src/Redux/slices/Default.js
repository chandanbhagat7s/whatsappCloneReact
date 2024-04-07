




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const uploadFile = createAsyncThunk('/file/sendFile', async (data) => {

    try {



        const res = await axios.post('/api/v1/users/submitFile', data, {
            withCredentials: true,

        });
        console.log(res);
        if (res?.data?.status) {
            return res.data
        }
    } catch (error) {
        return error.response;
    }


})





const initialState = {
    open: false,
    uploadList: [],
    loadRandom: true
}
const Random = createSlice({
    name: 'random',
    initialState,
    reducers: {
        openRequestDialog: (state, action) => {
            state.open = true
        },
        closeRequestDialog: (state, action) => {
            state.open = false
        },
        toggleLoading: (state, action) => {
            state.loadRandom = state.loadRandom ? false : true
        }

    },
    extraReducers: (builder) => {
        builder.addCase(uploadFile.fulfilled, (state, action) => {
            console.log("action is ", action.payload.sendingData);
            state.uploadList = action.payload.sendingData
        })
    }

})

export const { openRequestDialog, closeRequestDialog, toggleLoading } = Random.actions

export default Random.reducer













































