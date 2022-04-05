import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchChat = createAsyncThunk(
    "chat/fetch",
    async (users) => {
        const { user1, user2 } = users;
        try {
            const response = await axios.get(`/chat/sync?user1=${user1}&&user2=${user2}`);
            console.log(users)
            console.log(response.data);
            return response.data;
        } catch (error) {
            return ("An Error Occured");
        }
    }
);

const initialState = {
    chatData : [],
    status : false
}

const chatSlice = createSlice({
    name : "chat",
    initialState,
    reducers : {},
    extraReducers : {
        [fetchChat.pending] : (state, action) => {
            state.status = "pending";
        },
        [fetchChat.rejected] : (state, action) => {
            state.status = "rejected";
        },
        [fetchChat.fulfilled] : (state, action) => {
            state.chaData = action.payload;
            state.status = true;
        }
    }
});

export default chatSlice.reducer;