import React from 'react'
import{ FaComments,FaThumbtack,FaStickyNote,FaCalendarAlt,FaRobot} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();
  return (
     <div className="fixed bottom-0 left-0 right-0 bg-[#075E54] text-white flex justify-around items-center py-3 shadow-lg z-50">
      
      {/* Chat */}
      <div className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
        onClick = {()=> navigate('/chat')}
        >
        <FaComments size={20} />
        <span className="text-xs mt-1">Chat</span>
      </div>

      {/* Pinboard */}
      <div className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
        onClick = {() => navigate('/pinboard')}
        >
        <FaThumbtack size={20} />
        <span className="text-xs mt-1">Pinboard</span>
      </div>

      {/* Notes */}
      <div className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
        onClick = {() => navigate('/notes')}
        >
        <FaStickyNote size={20} />
        <span className="text-xs mt-1">Notes</span>
      </div>

      {/* Events */}
      <div className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
       onClick = {() => navigate('/events')}
       >
        <FaCalendarAlt size={20} />
        <span className="text-xs mt-1">Events</span>
      </div>

      {/* AI Assistant */}
      <div className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
        onClick = {() => navigate('/ai')}
        >
        <FaRobot size={20} />
        <span className="text-xs mt-1 text-center">AI</span>
      </div>

    </div>
  );
};

export default BottomNav