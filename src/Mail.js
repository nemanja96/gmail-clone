import React from 'react'
import './Mail.css'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import LabelSharpIcon from '@mui/icons-material/LabelSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import {useNavigate} from 'react-router-dom';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import LocalPrintshopSharpIcon from '@mui/icons-material/LocalPrintshopSharp';
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import { selectMail } from './features/mailSlice';
import { useSelector } from 'react-redux';

function Mail() {

  const navigation = useNavigate();

  const mail = useSelector(selectMail);

  return (
    <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigation('/')} className="mail__btn">
            <ArrowBackIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <MoveToInboxIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <ErrorSharpIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <DeleteSharpIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <EmailSharpIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <AccessTimeFilledSharpIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <CheckCircleSharpIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <LabelSharpIcon className="mail__icons" />
          </IconButton>
          <IconButton className="mail__btn">
            <MoreVertSharpIcon className="mail__icons" />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton className="mail__btn">
              <ChevronLeftSharpIcon className="mail__icons" />
            </IconButton>
            <IconButton className="mail__btn">
              <ChevronRightSharpIcon className="mail__icons" />
            </IconButton>
            <IconButton className="mail__btn">
              <ArrowDropDownSharpIcon className="mail__icons" />
            </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{mail?.title}</h2>
          <div className='mail__bodyHeaderIcons'>
            <IconButton className="mail__btn">
              <LocalPrintshopSharpIcon className="mail__headerIcons" />
            </IconButton>
            <IconButton className="mail__btn">
              <OpenInNewSharpIcon className="mail__headerIcons" />
            </IconButton>
          </div>
        </div>
        <div className='mail__author'>
          <div className='mail__authorInfo'>
            <Avatar />
            <h4>{mail?.title}</h4>
            <span> &lt;{mail?.from}&gt;</span>
          </div>
          <div className="mail__authorTime">
            <span>{mail?.time}</span>
            <IconButton className="mail__btn">
              <StarBorderPurple500SharpIcon className="mail__headerIcons" />
            </IconButton>
            <IconButton className="mail__btn">
              <ReplySharpIcon className="mail__headerIcons" />
            </IconButton>
            <IconButton className="mail__btn">
              <MoreVertSharpIcon className="mail__headerIcons" />
            </IconButton>
          </div>
        </div>
        <div className="mail__message">
          {mail?.message}
        </div>
      </div>
    </div>
  )
}

export default Mail