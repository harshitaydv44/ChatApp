import React from 'react'
import MessageInput from './MessageInput.jsx';

const ChatWindow = () => {
  return (
       <div className="flex-1 flex flex-col bg-gray-100">
      <div className="p-4 bg-[#075E54] text-white font-semibold shadow-sm">
        Sarah Johnson <span className="ml-2 text-green-300 text-sm">Online</span>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Incoming message */}
        <div className="flex flex-col max-w-[70%]">
          <div className="text-xs text-gray-500 mb-1">Sarah · 10:32 AM</div>
          <div className="bg-white p-4 rounded-2xl text-sm text-gray-800 shadow">
            Hey there! How's the project coming along?
          </div>
        </div>

        {/* Outgoing message */}
        <div className="flex flex-col items-end max-w-[70%] ml-auto">
          <div className="text-xs text-gray-500 mb-1">You · 10:34 AM</div>
          <div className="bg-[#075E54] text-white p-4 rounded-2xl text-sm shadow">
            Pretty good! I've finished the initial designs and I’m working on the user flows now.
          </div>
        </div>

        {/* Incoming message */}
        <div className="flex flex-col max-w-[70%]">
          <div className="text-xs text-gray-500 mb-1">Sarah · 10:36 AM</div>
          <div className="bg-white p-4 rounded-2xl text-sm text-gray-800 shadow">
            That’s awesome. Can you share the latest screens today?
          </div>
        </div>
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatWindow;