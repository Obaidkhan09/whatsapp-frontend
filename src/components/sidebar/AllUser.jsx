import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/all-users.css"
import axios from '../../utils/axios'

export default function AllUser() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.allUsers.users);
    const auth = useSelector((state) => state.auth);
    const showChat = (id) => {
        console.log("ID 1",id);
        console.log("ID 2",auth._id);
        const users = {user1 : id, user2 : auth._id}
    }
    return (
        <div>
            {users.map((users) => (
                <div key={users._id} className='all-users' onClick={()=>showChat(users._id)}>
                    <Avatar />
                    <div className='user'>
                        <h4>{users.name}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
