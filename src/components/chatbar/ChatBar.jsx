import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';


import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import Picker from 'emoji-picker-react';

import axios from '../../utils/axios'

import '../styles/chatbar.css'
// import moment from 'moment';
import Messages from './Messages';
import { fetchAllMessages } from '../../features/chatSlice';

export default function ChatBar({ refrence }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date().toUTCString();
    const currentSender = auth.name;
    const temp = {
      message: value,
      timeStamp: currentTime,
      sender: currentSender,
    }
    if (value !== "") {
      await axios.post("chat/new", {
        ...chatMessages,
        messages: temp,
      });
      setValue("");
      dispatch(fetchAllMessages(auth._id));
    }
  }
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(false);
  // const messages = useSelector((state) => state.messagesData.messages);
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.details);
  const auth = useSelector((state) => state.auth);
  const handleEmoji = (event, emojiObj) => {
    setValue(value + emojiObj.emoji);
  }
  const handleEmojiVisible = () => {
    setStatus(!status);
  }
  return (
    <div className='chat_bar'>
      <div className="chat_header">
        <Avatar />
        <div className="chat_info">
          {/* {console.log("chatMessagesssssssss",chatMessages)}
          {console.log("MSGSSSSSSSS",chatMessages.messages[chatMessages.messages.length -1])} */}
          <h4>{auth.name === chatMessages.sender ? chatMessages.receiver : chatMessages.sender}</h4>
          <p>{`Last Message ${moment(chatMessages.messages[chatMessages.messages.length - 1] ? chatMessages.messages[chatMessages.messages.length - 1].timeStamp : chatMessages.timeStamp).fromNow()}`}</p>
        </div>
        <div className="chat_icons">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {/* {messages.map((items) => (
          <p key={items._id} className={`${items.received === true ? "chat_message" : "chat_receiver chat_message"}`}>
            <span className='chat_name'>Client 1</span>
            {items.messages}
            <span className='chat_time'>{moment(items.timeStamp).fromNow()}</span>
          </p>
        )
        )} */}
        <Messages />

      </div>

      <div className="chat_footer">
        {status && <Picker
          pickerStyle={{ position: "absolute", bottom: "90px" }}
          onEmojiClick={handleEmoji} />}
        <IconButton onClick={handleEmojiVisible}>
          <SentimentSatisfiedAltIcon />
        </IconButton>
        <form>
          <input
            autoFocus
            //refrence passed as a prop from Home.jsx
            ref={refrence}
            value={value}
            placeholder='Type a message'
            onChange={(e) => { setValue(e.target.value) }}
          />
          <IconButton onClick={handleSubmit} type='submit'>
            <SendIcon />
          </IconButton>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  )
}
