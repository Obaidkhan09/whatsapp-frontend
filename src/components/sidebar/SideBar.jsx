import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ChatList from './ChatList';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import '../styles/sidebar.css'

export default function SideBar() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='header_left'>
                    <Avatar src="https://1.bp.blogspot.com/-yJWQPGx4_hM/YAh4vu0roMI/AAAAAAAAkrI/0srkD4R2FR0sgiPdVzLCLtEVmZR-lS4fwCLcBGAsYHQ/s811/whatsapp%2Bdp%2Bimages%2Bfor%2Bboys%2B%252810%2529.jpg" />
                </div>
                <div className='header_right'>
                    <IconButton onClick={handleClickOpen} >
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
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
            <ChatList />
            <ChatList />
            <ChatList />
            {/* ADD NEW CHAT */}
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Enter Name for Chat</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name for chat"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='outlined' onClick={handleClose}>Add Chat</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}