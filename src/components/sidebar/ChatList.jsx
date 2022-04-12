import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../features/chatSlice';
import { fetchAllMessages } from '../../features/chatSlice';


import '../styles/chat-list.css'

export default function ChatList({setChatBar}) {
  const dispatch = useDispatch();
  const allChat = useSelector((state) => state.allChat.data);
  const auth = useSelector((state)=>state.auth);
  const handleClick =(id)=> {
    console.log("IDDD",id.members[0],id.members[1]);
    dispatch(fetchAllMessages(id.members))
    dispatch(getUserData(id))
    localStorage.setItem("members", (auth._id === id.members[0] ? id.members[1] : id.members[0]));
    console.log('Here')
    setChatBar(true);
  }
  return (
    <div>
      {console.log("All Chat...!!",allChat)}
      {allChat ? allChat.map((items, i)=> (
      <div key={items._id} className='chat_list' onClick={()=>handleClick(items)}>
        <Avatar />
        <div className='chat_item'>
          <h4>{auth.name === items.receiver ? items.sender : items.receiver}</h4>
          <p>{items.messages[items.messages.length-1].message}</p>
        </div>
      </div>
      )) : []}
    </div>

  )
}
