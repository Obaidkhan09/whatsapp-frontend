import { configureStore } from "@reduxjs/toolkit";
import messagesReducer, { messagesThunk } from "../features/messagesSlice";

const store = configureStore({
    reducer : {
        messagesData : messagesReducer,
    }
});

store.dispatch(messagesThunk());
export default store;