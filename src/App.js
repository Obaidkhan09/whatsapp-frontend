import ChatBar from "./components/chatbar/ChatBar";
import SideBar from "./components/sidebar/SideBar";
import Pusher from 'pusher-js'
import './components/styles/app.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewMessages } from "./features/messagesSlice";

function App() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messagesData.messages);
  console.log(messages);
  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_TOKEN, {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      dispatch(addNewMessages(data));
    });
  }, [])
  return (
    <div className="app">
      <div className="app_window">
        <SideBar />
        <ChatBar />
      </div>
    </div>
  );
}

export default App;
