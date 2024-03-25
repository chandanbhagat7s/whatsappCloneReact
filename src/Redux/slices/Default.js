




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";






const initialState = {
    open: false
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

    },

})

export const { openRequestDialog, closeRequestDialog } = Random.actions

export default Random.reducer













































