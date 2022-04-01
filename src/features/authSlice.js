import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    token: "",
    name: "",
    email: "",
    _id: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp(state, action) {
            localStorage.setItem("token", action.payload);
            const user = jwtDecode(action.payload);
            state.token = action.payload;
            state.name = user.name;
            state.email = user.email;
            state._id = user._id;
        },
        loadUser(state, action) {
            const token = localStorage.getItem("token");
            if (token) {
                const user = jwtDecode(token);
                state.token = token;
                state.name = user.name;
                state.email = user.email;
                state._id = user._id;
            }
            // else return {...state}
        },
        signIn(state, action) {
            localStorage.setItem("token", action.payload);
            const user = jwtDecode(action.payload);
            state.token = action.payload;
            state.name = user.name;
            state.email = user.email;
            state._id = user._id;
        },
        signOut(state, action) {
            localStorage.removeItem("token");
            state.token = null;
            state.name = null;
            state.email = null;
            state._id = null;
        }
    }
});

export default authSlice.reducer;
export const { signUp, loadUser, signIn, signOut } = authSlice.actions;