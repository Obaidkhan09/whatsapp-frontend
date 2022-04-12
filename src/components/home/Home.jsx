import SideBar from "../sidebar/SideBar";
import ChatBar from "../chatbar/ChatBar";
import DefaultChatBar from "../chatbar/DefaultChatBar"
import { Navigate } from "react-router-dom";

import "../styles/home.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllChat } from "../../features/chatListSlice";

export default function Home() {
  const dispatch = useDispatch();
  let otherUsersData = []
  const auth = useSelector((state) => state.auth);
  const allUsers =  useSelector((state) => state.allUsers.users);
  const allChat = useSelector((state) => state.allChat.data);
  const [isChatbar, setChatBar] = useState(false);
  useEffect(()=> {
    dispatch(fetchAllChat(auth._id))
  }, [dispatch])
  // const otherUsers = allChat.map((users) => {
  //   return auth._id == users.members[0] ? users.members[1] : users.members[0];
  // });
  // for (let i in otherUsers) {
  //   otherUsersData.push(allUsers.find((usersData) => {
  //     if (usersData._id == otherUsers[i]) {
  //       // console.log("userdata.........", usersData);
  //       return usersData;
  //     }
  //   }));
  // }
  // if (otherUsersData[0] !==undefined) {
  //   disptach(updateOtherUsers(otherUsersData))
  // }
  // console.log("USERS",otherUsers);
  // console.log("otherUsersData", otherUsersData);
  if (!auth?._id) { return <Navigate to="/" /> }
  return (
    <div>
      <div className="app">
        <div className="app_window">
          <SideBar setChatBar={setChatBar} />
          {isChatbar ? <ChatBar /> : <DefaultChatBar /> }
        </div>
      </div>
    </div>
  )
}
