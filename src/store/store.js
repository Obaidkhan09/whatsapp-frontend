import { configureStore } from "@reduxjs/toolkit";
import messagesReducer, { messagesThunk } from "../features/messagesSlice";
import authReducer, { loadUser } from "../features/authSlice";

const store = configureStore({
    reducer : {
        messagesData : messagesReducer,
        auth : authReducer,
    }
});

// store.dispatch(messagesThunk());
store.dispatch(loadUser());
export default store;