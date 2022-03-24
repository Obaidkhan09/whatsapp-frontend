import Avatar from '@mui/material/Avatar';
import '../styles/chat-list.css'

export default function ChatList() {
  return (
    <div className='chat_list'>
        <Avatar />
        <div className='chat_item'>
            <h4>Client 1</h4>
            <p>This is a message</p>
        </div>
    </div>
  )
}
