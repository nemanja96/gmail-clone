import React, { useEffect, useState } from 'react'
import './EmailList.css';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setEmails(
        snapshot.docs.map(doc => ({ 
            id: doc.id,
            data: doc.data()
        }))
    )})
}, [])

  const emailSection = (Icon, title, active) => (
    <div className={`emailList__sectionItem ${active && `email--active`}`}>
      <Icon className="icon" />
      <h4>{title}</h4>
    </div>
  );

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox className="emailList__icons" />
          <IconButton>
            <ArrowDropDownIcon className="emailList__icons" />
          </IconButton>
          <IconButton>
            <RedoIcon className="emailList__icons" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="emailList__icons" />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <KeyboardArrowLeftIcon className="emailList__icons" />
          </IconButton>
          <IconButton>
            <ChevronRightIcon className="emailList__icons" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon className="emailList__icons" />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        {emailSection(InboxIcon, "Glavno", true)}
        {emailSection(PeopleIcon, "Drustveno")}
        {emailSection(LocalOfferIcon, "Promocije")}
      </div>

      <div className="emailList__list">
        {
          emails.map(({id, data: { from, to, title, message, timestamp }}) => (
            <EmailRow key={id} id={id} from={from} to={to} title={title} message={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
          ))
        }

      </div>
    </div>
  )
}

export default EmailList