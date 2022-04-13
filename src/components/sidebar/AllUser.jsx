import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/all-users.css"
import axios from '../../utils/axios'
import { addNewUser } from '../../features/chatSlice';


export default function AllUser({ setUsers, setChatBar }) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.allUsers.users);
    const auth = useSelector((state) => state.auth);
    const showChat = async(arg) => {
        console.log("ID 1",arg.id);
        console.log("ID 2",auth._id);
        // const currentDate = new Date();
        // await axios.post("chat/new", {
        //     sender : auth.name,
        //     receiver : arg.name,
        //     members : [auth._id, arg.id],
        //     messages : [],
        //     timeStamp : currentDate,
        // });
        dispatch(addNewUser(arg))
        setUsers(false);
        // dispatch(fetchAllChat(auth._id));
        setChatBar(true);
    }
    return (
        <div>
            {users.map((users) => (
                <div key={users._id} className='all-users' onClick={()=>showChat({id : users._id, name : users.name, })}>
                    <Avatar />
                    <div className='user'>
                        <h4>{users.name}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
