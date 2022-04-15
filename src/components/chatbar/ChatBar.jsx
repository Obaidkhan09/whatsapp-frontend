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
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function ChatBar({ refrence, setChatBar }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date();
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
      // console.log(chatMessages._id);
    }
  }
  const createDoc = async (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const temp = {
      message: value,
      timeStamp: currentTime,
      sender: auth.name,
    }
    if (value !== "") {
      await axios.post("chat/new", {
        sender: auth.name,
        receiver: newUser.name,
        members: [auth._id, newUser.id],
        messages: [temp],
        timeStamp: currentTime,
      });
      setValue("");
      localStorage.setItem("members", newUser.id);
    }
  }
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);
  // const messages = useSelector((state) => state.messagesData.messages);
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.details);
  const newUser = useSelector((state) => state.chat.newUser);
  const auth = useSelector((state) => state.auth);
  const handleEmoji = (event, emojiObj) => {
    setValue(value + emojiObj.emoji);
  }
  const handleEmojiVisible = () => {
    setStatus(!status);
  }
  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async() => {
    console.log(chatMessages._id)
    await axios.delete(`/chat/delete?id=${chatMessages._id}`);
    setOpen(false);
    setChatBar(false);
  }
  return (
    <div className='chat_bar'>
      <div className="chat_header">
        <Avatar />
        <div className="chat_info">
          {/* {console.log("MSGSSSSSSSS",chatMessages.messages[chatMessages.messages.length -1])} */}
          {newUser == null && chatMessages !== null ?
            <>
              <h4>{auth.name === chatMessages.sender ? chatMessages.receiver : chatMessages.sender}</h4>
              <p>{`Last Message ${moment(chatMessages.messages[chatMessages.messages.length - 1] ? chatMessages.messages[chatMessages.messages.length - 1].timeStamp : chatMessages.timeStamp).fromNow()}`}</p>
              {/* <p>{`Last Message ${moment(chatMessages.timeStamp).fromNow()}`}</p> */}
            </>
            :
            <><h4>{newUser.name}</h4></>
          }
        </div>
        <div className="chat_icons">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <Messages />

      </div>

      <div className="chat_footer">
        {status && <Picker
          pickerStyle={{ position: "absolute", bottom: "90px" }}
          onEmojiClick={handleEmoji} />}
        <IconButton onClick={handleEmojiVisible}>
          <SentimentSatisfiedAltIcon />
        </IconButton>
        {newUser === null && chatMessages !== null ?
          <>
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
          </>
          :
          <>
            <form>
              <input
                autoFocus
                //refrence passed as a prop from Home.jsx
                ref={refrence}
                value={value}
                placeholder='Type a message'
                onChange={(e) => { setValue(e.target.value) }}
              />
              <IconButton onClick={createDoc} type='submit'>
                <SendIcon />
              </IconButton>
            </form>
          </>
        }

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
      <div>
        <Dialog open={isOpen} onClose={handleClose}>
          <DialogTitle>Do you really wish to Delete this Chat?</DialogTitle>
          <DialogActions>
            <Button
              variant='outlined'
              onClick={handleDelete}
              style={{
                color: '#E62E2D',
                fontWeight: 600,
                border: "1px solid #E62E2D",
                textDecoration: "none",
              }}
            >
              Delete Chat
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
