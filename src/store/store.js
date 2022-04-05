import { configureStore } from "@reduxjs/toolkit";
import messagesReducer, { messagesThunk } from "../features/messagesSlice";
import authReducer, { loadUser } from "../features/authSlice";
import usersReducer, { fetchAllUsers } from "../features/usersSlice";
import chatReducer from "../features/chatSlice";

const store = configureStore({
    reducer : {
        messagesData : messagesReducer,
        auth : authReducer,
        allUsers : usersReducer,
        messages : chatReducer,
    }
});

store.dispatch(messagesThunk());
//Loading user from local storage if any
store.dispatch(loadUser());
//Fetching all users from DB to show i chat
store.dispatch(fetchAllUsers());
export default store;