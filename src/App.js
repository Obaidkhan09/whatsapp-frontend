import Pusher from 'pusher-js'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addNewMessages } from "./features/messagesSlice";
import Auth from "./components/home/Auth";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addNewMessage, fetchAllMessages, getUserData } from "./features/chatSlice";
import { fetchAllChat } from './features/chatListSlice';


function App() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.chat.details);
  const chatMessages = useSelector((state) => state.chat.details);
  const auth = useSelector((state)=> state.auth);
  // console.log("DETAILS", userDetails);
  // useEffect(() => {
  //   const pusher = new Pusher(process.env.REACT_APP_PUSHER_TOKEN, {
  //     cluster: 'ap2'
  //   });

  //   const channel = pusher.subscribe('messages');
  //   channel.bind('inserted', (data) => {
  //     dispatch(addNewMessages(data));
  //   });
  // }, [])
  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_TOKEN, {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('inserted', (data) => {
      const members = (localStorage.getItem("members"));
      const user = [auth._id, members];
      dispatch(fetchAllMessages(user));
      dispatch(fetchAllChat(auth._id));
    });
    channel.bind('updated', (data) => {
      const members = (localStorage.getItem("members"));
      const user = [auth._id, members];
      dispatch(fetchAllMessages(user));
      dispatch(fetchAllChat(auth._id));
      // console.log("USERRRRRRR", userDetails);
      // if (userDetails.name == chatMessages.sender || userDetails.name == chatMessages.receiver) {
      //   alert("goooooooooo");
      //   dispatch(addNewMessage(data));
      // }
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
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
