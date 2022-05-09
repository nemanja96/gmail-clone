import React from 'react'
import './Tools.css';
import IconButton from '@mui/material/IconButton';
import calendar from './img/calendar.png';
import keep from './img/keep.png';
import tasks from './img/tasks.png';
import contacts from './img/contacts.png';
import AddSharpIcon from '@mui/icons-material/AddSharp';

function Tools() {
  return (
    <div className="tools">
        <IconButton className="tool__btn">
            <img src={calendar} className="tool__icons" />
        </IconButton>
        <IconButton className="tool__btn">
            <img src={keep} className="tool__icons" />
        </IconButton>
        <IconButton className="tool__btn">
            <img src={tasks} className="tool__icons" />
        </IconButton>
        <IconButton className="tool__btn">
            <img src={contacts} className="tool__icons" />
        </IconButton>
        <IconButton className="tool__btn">
            <AddSharpIcon className="tool__addIcon" />
        </IconButton>
    </div>
  )
}

export default Tools