import React from 'react'
import './Sidebar.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import avatar from './img/small-avatar.png';
import plus from './img/plus.png';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';

function Sidebar() {
  return (
    <div className="sidebar">
        <Button className="sidebar__compose"><img src={plus} /> Nov imejl</Button>

        <SidebarOption Icon={InboxIcon} title="Primljene" number={54} selected={true} />
        <SidebarOption Icon={StarIcon} title="Sa zvezdicom" number={7} />
        <SidebarOption Icon={AccessTimeFilledIcon} title="Odloženo" number={1} />
        <SidebarOption Icon={SendIcon} title="Poslate" number={0} />
        <SidebarOption Icon={InsertDriveFileIcon} title="Nedovršene" number={15} />
        <SidebarOption Icon={LabelImportantIcon} title="Važno" number={3} />
        <SidebarOption Icon={ExpandMoreIcon} title="Više" number="" />

        <div className="sidebar__meet">
            <h4>Meet</h4>
            <SidebarOption Icon={VideocamIcon} title="Nov sastanak" />
            <SidebarOption Icon={KeyboardIcon} title="Uđi na sastanak" />
        </div>

        <div className="sidebar__hangouts">
            <h4>Hangouts</h4>
            <div className="hangouts__avatar">
                <Box sx={{ color: 'action.active' }}>
                    <Badge color="secondary" variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right',}} overlap="circular">
                        <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
                    </Badge>
                </Box>
                <span>Nemanja</span>
                <AddIcon className="hangouts__addIcon" sx={{ width: 20, height: 20 }} />
            </div>
        </div>
    </div>
  )
}


export default Sidebar