import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPass from './pages/ForgotPass.jsx';
import VerifyOtp from './pages/VerifyOtp.jsx';
import NewPass from './pages/NewPass.jsx';
import ChatBar from './pages/ChatBar.jsx';

const App = () => {
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path = "/forgot-password" element={<ForgotPass />} />
          <Route path = "/verify-otp" element={<VerifyOtp />} />
          <Route path = "/new-password" element={<NewPass />} />
          <Route path = "/chat" element={<ChatBar />}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
