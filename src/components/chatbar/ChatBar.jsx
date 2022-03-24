import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import '../styles/chatbar.css'

export default function ChatBar() {
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
        <p className='chat_message'>
          <span className='chat_name'>Client 1</span>
          This is a dummy message, how are you doin?
          <span className='chat_time'>{new Date().toUTCString()}</span>
        </p>

        <p className='chat_message chat_receiver'>
          <span className='chat_name'>Me</span>
          This is a dummy message, how are you doin?
          <span className='chat_time'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat_message'>
          <span className='chat_name'>Client 1</span>
          This is a dummy message, how are you doin?
          <span className='chat_time'>{new Date().toUTCString()}</span>
        </p>
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
