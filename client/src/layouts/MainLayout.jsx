import React from 'react'
import ChatSidebar from '../components/ChatSidebar.jsx';
import BottomNav from '../components/BottomNav.jsx';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
  return (
   <div className = "flex h-screen">
    <div className="w-[20%] bg-[#0B2C2C] text-white">
        <ChatSidebar />
    </div>

    <div className = "flex-1 relative overflow-y-auto">
        <Outlet />
        <BottomNav />
    </div>
   </div>
  )
}

export default MainLayout