import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchAllMessages = createAsyncThunk(
    "sync/fetch",
    async (user) => {
        console.log("USERS", user)
        try {
            const response = await axios.get(`/chat/sync?user1=${user[0]}&&user2=${user[1]}`);
            console.log("CHAT SLICE", response);
            return response.data;
        } catch (error) {
            return ("An error occured");
        }
    }
);


const initialState = {
    messages: [],
    details: null,
    newUser: null,
    status: false
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        getUserData(state, action) {
            state.details = action.payload;
            state.newUser = null;
        },
        addNewUser(state, action) {
            state.newUser = action.payload;
            state.details = null;
        },
        addNewMessage(state, action) {
            state.messages.push(action.payload);
            // console.log("deikhoooo",JSON.stringify(state.messages.messages));
        },
    },
    extraReducers: {
        [fetchAllMessages.pending]: (state, action) => {
            state.status = "pending";
        },
        [fetchAllMessages.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [fetchAllMessages.fulfilled]: (state, action) => {
            if (action.payload[0]) {
                state.messages = action.payload[0].messages;
                state.status = true;
            }
        }
    }
});

export default chatSlice.reducer;
export const { getUserData, addNewMessage, addNewUser } = chatSlice.actions;