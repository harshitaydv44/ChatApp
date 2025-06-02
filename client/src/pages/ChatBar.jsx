import React from 'react'
import ChatSidebar from '../components/ChatSidebar.jsx';
import ChatWindow from '../components/ChatWindow.jsx';
import BottomNav from '../components/BottomNav.jsx';

const ChatBar = () => {
  return (
    <div className = "h-screen w-full flex ">
       
        <ChatWindow />
        <BottomNav />
        </div>
  )
}

export default ChatBar