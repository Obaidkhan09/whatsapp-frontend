import Pusher from 'pusher-js'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from "./components/home/Auth";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchAllMessages, getUserData } from "./features/chatSlice";
import { fetchAllChat } from './features/chatListSlice';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


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
      dispatch(getUserData(data))
      console.log(data);
    });
    channel.bind('updated', (data) => {
      const members = (localStorage.getItem("members"));
      const user = [auth._id, members];
      dispatch(fetchAllMessages(user));
      dispatch(fetchAllChat(auth._id));
    });
    channel.bind('deleted', (data) => {
      if (data.result === "success") {
        dispatch(fetchAllChat(auth._id));
      }
    })
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
