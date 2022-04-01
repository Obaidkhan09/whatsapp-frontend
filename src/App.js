import ChatBar from "./components/chatbar/ChatBar";
import SideBar from "./components/sidebar/SideBar";
import Pusher from 'pusher-js'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewMessages } from "./features/messagesSlice";
import Auth from "./components/home/Auth";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
    <div>
      <ToastContainer
        limit={3}
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      
      <BrowserRouter >
        <Routes>
          <Route path="/" element={ <Auth /> } />
          <Route path="/home" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
