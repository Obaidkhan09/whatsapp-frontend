import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUser } from "../features/authSlice";
import usersReducer from "../features/usersSlice";
import chatReducer from "../features/chatSlice";
import chatListReducer from "../features/chatListSlice";


const store = configureStore({
    reducer : {
        auth : authReducer,
        allUsers : usersReducer,
        chat: chatReducer,
        allChat : chatListReducer,
    }
});

//Loading user from local storage if any
store.dispatch(loadUser());
export default store;