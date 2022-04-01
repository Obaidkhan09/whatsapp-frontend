import SideBar from "../sidebar/SideBar";
import ChatBar from "../chatbar/ChatBar";
import { Navigate } from "react-router-dom";

import "../styles/home.css"
import { useSelector } from "react-redux";

export default function Home() {
  const auth = useSelector((state) => state.auth);
  if (!auth?._id) { return <Navigate to="/" /> }
  return (
    <div>
      <div className="app">
        <div className="app_window">
          <SideBar />
          <ChatBar />
        </div>
      </div>
    </div>
  )
}
