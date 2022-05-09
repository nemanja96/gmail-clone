import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Tools from './Tools';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectMail } from './features/mailSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectMail);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>

          { sendMessageIsOpen && <SendMail /> }
          <Tools />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
