import React from 'react';
import './Header.css';
import IconButton from '@mui/material/IconButton';
import avatar from './img/small-avatar.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import logo from './img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

  return (
    <div className='header'>
        <div className="header__wrapper">
            <div className="header__left">
                <IconButton>
                    <MenuIcon className="menu__icon" />
                </IconButton>
                <img src={logo} className="gmail__logo" />
            </div>

            <div className="header__middle">
                <SearchIcon className="header__searchIcon" />
                <input type="text" placeholder='Pretražite imejlove' />
                <IconButton>
                    <CloseIcon className="header__inputCaret" />
                </IconButton>
                <IconButton>
                    <TuneIcon className="header__inputCaret" />
                </IconButton>
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon className="header__icons" />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon className="header__icons" />
                </IconButton>
                <IconButton>
                    <AppsIcon className="header__icons" />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} sx={{ width: 30, height: 30 }} className="header__avatar" />
            </div>
        </div>
    </div>
  )
}

export default Header