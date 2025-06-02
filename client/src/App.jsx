import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPass from './pages/ForgotPass.jsx';
import VerifyOtp from './pages/VerifyOtp.jsx';
import NewPass from './pages/NewPass.jsx';
import ChatBar from './pages/ChatBar.jsx';
import Pinboard from './pages/Pinboard.jsx';
import Notes from './pages/Notes.jsx';
import Events from './pages/Events.jsx';
import AiAssistant from './pages/AiAssistant.jsx';
import BottomNav from './components/BottomNav.jsx';
import MainLayout from './layouts/MainLayout.jsx';

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


           <Route path="/" element={<MainLayout />}>
            <Route path="chat" element={<ChatBar />} />
            <Route path="pinboard" element={<Pinboard />} />
            <Route path="notes" element={<Notes />} />
            <Route path="events" element={<Events />} />
            <Route path="ai" element={<AiAssistant />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
