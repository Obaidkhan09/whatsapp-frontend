import '../styles/sidebar.css'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ChatList from './ChatList';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='header_left'>
                <Avatar src="https://1.bp.blogspot.com/-yJWQPGx4_hM/YAh4vu0roMI/AAAAAAAAkrI/0srkD4R2FR0sgiPdVzLCLtEVmZR-lS4fwCLcBGAsYHQ/s811/whatsapp%2Bdp%2Bimages%2Bfor%2Bboys%2B%252810%2529.jpg" />
            </div>
            <div className='header_right'>
                <IconButton>
                    <DataSaverOffIcon />
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
    </div>
  )
}