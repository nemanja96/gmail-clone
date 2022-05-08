import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import EmailList from './EmailList';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Main />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
