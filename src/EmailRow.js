import React from 'react'
import './EmailRow.css';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import { useNavigate  } from 'react-router-dom';

function EmailRow({ id, title, subject, description, time }) {

    const navigation = useNavigate();

  return (
    <div onClick={() => navigation('/mail')} className='emailRow'>
        <div className="emailRow__options">
            <Checkbox className="emailRow__icons" size="small" />
            <IconButton>
                <StarBorderIcon className="emailRow__icons" />
            </IconButton>
            
        </div>

        <div className="emailRow__title">{title}</div>

        <div className="emailRow__message">
            <h4>{subject}
                <span className="emailRow__description">
                   {" - "} {description}
                </span>
            </h4>
        </div>

        <p className="emailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow