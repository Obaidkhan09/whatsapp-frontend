import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import '../styles/chatbar.css'
import { useSelector } from 'react-redux';

export default function ChatBar() {
  const messages = useSelector((state) => state.messagesData.messages);
  return (
    <div className='chat_bar'>
      <div className="chat_header">
        <Avatar />
        <div className="chat_info">
          <h4>Client 1</h4>
          <p>last seen 05:25 today</p>
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
        {messages.map((items) => (
          <p key={items._id} className={`${items.received === true ? "chat_message" : "chat_receiver chat_message"}`}>
            {/* <span className='chat_name'>Client 1</span> */}
            {items.messages}
            <span className='chat_time'>{items.timeStamp}</span>
          </p>
        ))}
        
      </div>

      <div className="chat_footer">
        <IconButton>
          <SentimentSatisfiedAltIcon />
        </IconButton>
        <form>
          <input placeholder='Type a message' />
          <IconButton type='submit'>
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
