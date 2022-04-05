import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const initialState = {
    users: [],
    status: "",
}

export const fetchAllUsers = createAsyncThunk(
    "allUsers/fetch",
    async () => {
        try {
            const response = await axios.get("/users/")
            // console.log(response.data)
            return response.data;
        } catch (error) {
            return ("An Error Occured while fetching All Users");
        }
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllUsers.pending]: (state, action) => {
            state.status = "pending";
        },
        [fetchAllUsers.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
            state.status = true;
            state.users = action.payload;
        }
    }
});

export default usersSlice.reducer;