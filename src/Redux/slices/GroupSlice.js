










import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getList = createAsyncThunk('/allusers/everyone', async () => {

    try {
        const res = await axios.get("/api/v1/users/everyone", {
            withCredentials: true,
        });
        if (res.data.status) {
            return res.data
        }
    } catch (error) {
        return error.response;
    }


})

export const createGroup = createAsyncThunk('/allusers/everyone', async (data) => {

    try {
        const res = await axios.post("/api/v1/users/createGroup", { ...data }, {
            withCredentials: true,
        });
        if (res.data.status) {
            return res.data
        }
    } catch (error) {
        return error.response;
    }


})

export const getInfoGroup = createAsyncThunk('/group/getAllGroupsDetails', async () => {

    try {
        const res = await axios.get("/api/v1/users/getAllGroupsDetails", {
            withCredentials: true,
        });
        console.log(res);
        if (res.data.status) {
            // console.log("CAME");
            return res.data
        }
    } catch (error) {
        return error.response;
    }


})
export const getAllMessagesGroup = createAsyncThunk('/group/getAllGroupsMessages', async (id) => {

    try {
        const res = await axios.get(`/api/v1/users/getAllCommunicationGroup/${id}`, {
            withCredentials: true,
        });
        if (res.data.status) {
            return res.data
        }
    } catch (error) {
        return error.response;
    }


})



const initialState = {
    everyone: [],
    addedMember: [],
    allGroups: [],
    opnedGroup: '',
    loadGroup: false,
    messages: [],
}
const Groups = createSlice({
    name: 'Group',
    initialState,
    reducers: {
        setLoad: (state, action) => {
            state.loadGroup = state.loadGroup ? false : true
        },
        addMember: (state, action) => {

            state.addedMember.push(action.payload._id)
        },
        removeMember: (state, action) => {

            state.addedMember = state.addedMember.filter(el => {
                return el != action.payload._id
            })
            // state.addMember = [...state.addMember].filter(el => el != action.payload._id)
        },
        setOpenGroupId: (state, action) => {
            state.opnedGroup = action.payload._id
        }


    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, action) => {
            state.everyone = action.payload.users
        }).addCase(getInfoGroup.fulfilled, (state, action) => {
            state.allGroups = action.payload.groups
        }).addCase(getAllMessagesGroup.fulfilled, (state, action) => {
            console.log("ACTION", action, action.payload.data[0].msg);
            state.messages = action.payload.data[0].msg
        })
    }

})

export const { addMember, removeMember, setLoad, setOpenGroupId } = Groups.actions

export default Groups.reducer
























































