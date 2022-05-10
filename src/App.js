import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Tools from './Tools';
import Login from './Login';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { sendMessageIsOpen } from './features/mailSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const sendMessageOpen = useSelector(sendMessageIsOpen);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      }))} else {
        dispatch(logout());
        auth.signOut();
      }
    })
  }, [])

  return (
    <BrowserRouter>
      {!user ? 
        <Login />  
        :
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>

          {sendMessageOpen && <SendMail /> }
          <Tools />
        </div>
      </div>
      }
    </BrowserRouter>
  );
}

export default App;
