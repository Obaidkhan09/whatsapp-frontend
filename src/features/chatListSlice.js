import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchAllChat = createAsyncThunk(
    "allDoc/fetch",
    async (user) => {
        try {
            const response = await axios.get(`/chat/alldocs?user=${user}`);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            return ("An error occured");
        }
    }
);

const initialState = {
    data: [],
    details : [],
    status: null
};

const chatListSlice = createSlice({
    name: "allChat",
    initialState,
    reducers: {
        // getUserData (state, action) {
        //     state.details = action.payload;
        // },
        // addNewMessage (state, action) {
        //     state.messages.messages.push(action.payload);
        //     // console.log("deikhoooo",JSON.stringify(state.messages.messages));
        // }
    },
    extraReducers: {
        [fetchAllChat.pending] : (state, action) => {
            state.status = "pending";
        },
        [fetchAllChat.rejected] : (state, action) => {
            console.log("rejected");
            state.status = "rejected";
        },
        [fetchAllChat.fulfilled] : (state, action) => {
            state.status = true;
            state.data = action.payload;
        }
    }
});

export default chatListSlice.reducer;
export const { getUserData, addNewMessage } = chatListSlice.actions;