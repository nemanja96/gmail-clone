import React from 'react'
import './EmailRow.css';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function EmailRow({ id, from, to, title, message, time }) {

    const navigation = useNavigate();

    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectOpenMail({
            id, from, to, title, message, time
        }))

        navigation("/mail");
    }

  return (
    <div onClick={openMail} className='emailRow' id={id}>
        <div className="emailRow__options">
            <Checkbox className="emailRow__icons" size="small" />
            <IconButton>
                <StarBorderIcon className="emailRow__icons" />
            </IconButton>
            
        </div>

        <div className="emailRow__title">{from}</div>

        <div className="emailRow__message">
            <h4>{title}
                <span className="emailRow__description">
                   {" - "} {message}
                </span>
            </h4>
        </div>

        <p className="emailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow