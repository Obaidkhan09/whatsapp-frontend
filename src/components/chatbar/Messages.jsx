import '../styles/chatbar.css'
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";

export default function Messages() {
    const dispatch = useDispatch();
    const auth = useSelector((state)=> state.auth);
    const messages = useSelector((state) => state.chat.messages);
    // const chatMessages = useSelector((state) =>state.allChat.messages);
    // console.log(chatMessages);
    return (
        <div>
            {/* {console.log("messages",messages)} */}
            {/* <span className='chat_name'>Client 1</span> */}
            {messages ? messages.map((items, i) => (
                <p key={items._id} className={`${auth.name !== items.sender ? "chat_message" : "chat_receiver chat_message"}`}>
                    {items.message}
                    <span className='chat_time'>{moment(items.timeStamp).fromNow()}</span>
                </p>
            )) : []}
        </div>
    )
}
