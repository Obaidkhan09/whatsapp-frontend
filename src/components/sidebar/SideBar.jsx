import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ChatList from './ChatList';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import '../styles/sidebar.css'
import { useDispatch } from 'react-redux';
import { signOut } from '../../features/authSlice';
import AllUser from './AllUser';

export default function SideBar({setChatBar, refrence}) {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(false);
    const [logout, setLogout] = useState(false);

    const handleUsers = () => {
        setUsers(!users);
    };
    const handleLogout = () => {
        setLogout(!logout);
    };

    const handleClose = () => {
        setLogout(false);
    };
    const handleCloseLogout = () => {
        setLogout(false);
        dispatch(signOut());
        localStorage.removeItem('members');
    };
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='header_left'>
                    <Avatar src="https://1.bp.blogspot.com/-yJWQPGx4_hM/YAh4vu0roMI/AAAAAAAAkrI/0srkD4R2FR0sgiPdVzLCLtEVmZR-lS4fwCLcBGAsYHQ/s811/whatsapp%2Bdp%2Bimages%2Bfor%2Bboys%2B%252810%2529.jpg" />
                </div>
                <div className='header_right'>
                    <IconButton >
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton onClick={handleUsers}>
                        <ChatIcon />
                    </IconButton>
                    <IconButton onClick={handleLogout}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search'>
                <div className="sidebar_searchbar">
                    <SearchIcon />
                    <input type='text' placeholder='Search or start new chat' />
                </div>
            </div>
            {users? <AllUser setChatBar={setChatBar} setUsers={setUsers} /> : <ChatList refrence={refrence} setChatBar={setChatBar} /> }
            {/* ADD NEW CHAT */}
            <div>
                <Dialog open={logout} onClose={handleClose}>
                    <DialogTitle>Do you really wish to LogOut?</DialogTitle>
                    <DialogActions>
                        <Button
                        variant='outlined'
                        onClick={handleCloseLogout}
                        style={{
                            color: '#E62E2D',
                            fontWeight: 600,
                            border: "1px solid #E62E2D",
                            textDecoration: "none",
                        }}
                        >
                            LogOut
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}