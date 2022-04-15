import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/all-users.css"
import { addNewUser, clearMessages, fetchAllMessages, getUserData } from '../../features/chatSlice';


export default function AllUser({ setUsers, setChatBar, refrence }) {
    const dispatch = useDispatch();
    let users = useSelector((state) => state.allUsers.users);
    const auth = useSelector((state) => state.auth);
    const allChat = useSelector((state) => state.allChat.data);
    if (users !== []) {
        users = users.filter((item) => item._id !== auth._id);
    }
    const showChat = async (arg) => {
        // console.log("ID 1",arg.id);
        // console.log("ID 2",auth._id);
        const temp = allChat.find((item) => arg.id === item.members[0] || arg.id === item.members[1]);
        if (temp !== undefined) {
            dispatch(getUserData(temp));
            dispatch(fetchAllMessages(temp.members));
            setUsers(false);
            setChatBar(true);
        }
        else {
            dispatch(addNewUser(arg))
            dispatch(clearMessages());
            setUsers(false);
            setChatBar(true);
            if (refrence.current !== null) {
                refrence.current.focus();
            }
        }
    }
    return (
        <div>
            {users.map((users) => (
                <div key={users._id} className='all-users' onClick={() => showChat({ id: users._id, name: users.name, })}>
                    <Avatar />
                    <div className='user'>
                        <h4>{users.name}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
