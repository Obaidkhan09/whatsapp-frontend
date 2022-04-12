import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios"

const initialState = {
    messages: [],
    status : null,
}

export const messagesThunk = createAsyncThunk(
    "fetchMessages",
    async () => {
        try {
            const response = await axios.get("/messages/sync");
            // console.log(response.data);
            return response.data;
        } catch (error) {
            return("An Error Occured");
        }
    }
)

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addNewMessages (state, action) {
            state.messages = [action.payload, ...state.messages];
        }
    },
    extraReducers: {
        [messagesThunk.pending] : (state, action) => {
            state.status = "pending"
        },
        [messagesThunk.rejected] : (state, action) => {
            state.status = "rejected";
        },
        [messagesThunk.fulfilled] : (state, action) => {
            state.status = true;
            state.messages = action.payload;
        }
    }
});

export default messagesSlice.reducer;
export const { addNewMessages } = messagesSlice.actions;