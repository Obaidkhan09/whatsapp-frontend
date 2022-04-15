import SideBar from "../sidebar/SideBar";
import ChatBar from "../chatbar/ChatBar";
import DefaultChatBar from "../chatbar/DefaultChatBar"
import { Navigate } from "react-router-dom";

import "../styles/home.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchAllChat } from "../../features/chatListSlice";
import { fetchAllUsers } from "../../features/usersSlice";

export default function Home() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isChatbar, setChatBar] = useState(false);
  //Hold the refrence for input in ChatBar.jsx
  const refrence = useRef(null);
  useEffect(()=> {
    //fetch all chat from DB to show in chat list
    dispatch(fetchAllChat(auth._id));
//Fetching all users from DB to show in chat
    dispatch(fetchAllUsers());
  }, [dispatch])
  if (!auth?._id) { return <Navigate to="/" /> }
  return (
    <div>
      <div className="app">
        <div className="app_window">
          <SideBar refrence={refrence} setChatBar={setChatBar} />
          {isChatbar ? <ChatBar setChatBar={setChatBar} refrence={refrence} /> : <DefaultChatBar /> }
        </div>
      </div>
    </div>
  )
}
