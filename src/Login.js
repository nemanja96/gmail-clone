import React from 'react';
import './Login.css';
import gmail from './img/logo512.png';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        }).catch(error => alert(error));
    }

  return (
    <div className="login">
        <div className="login__container">
            <img src={gmail} alt="" />
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login