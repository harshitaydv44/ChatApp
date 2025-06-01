import React from 'react'

const users = [
  { name: "Sarah Johnson", message: "Are we still meeting today?", time: "10:30 AM" },
  { name: "Mike Peters", message: "I’ve sent you the files", time: "Yesterday" },
  { name: "Emma Wilson", message: "Let’s discuss the project tomorrow", time: "Yesterday" },
  { name: "James Rodriguez", message: "Thanks for your help!", time: "Monday" },
  { name: "Lisa Chen", message: "The meeting is at 3 PM", time: "Monday" },
];

const ChatSidebar = () => {
  return (
     <div className="w-[280px] bg-white text-black flex flex-col h-screen border-r border-gray-300">

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 rounded-lg text-sm text-black bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Scrollable user list */}
      <div className="flex-1 overflow-y-auto ">
        {users.map((user, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-gray-100 border-b border-gray-100 cursor-pointer transition"
          >
            <div className="font-medium text-black">{user.name}</div>
            <div className="text-sm text-gray-600">{user.message}</div>
            <div className="text-xs text-gray-400">{user.time}</div>
          </div>
        ))}
      </div>

      {/* Fixed New Chat button at bottom */}
      <div className="p-4 border-t border-gray-200 bg-white pb-20">
        <button className="w-full px-4 py-2 rounded-full text-sm bg-[#075E54] text-white hover:bg-[#064e46] transition">
          + New Chat
        </button>
      </div>

    </div>
  
  );
};

export default ChatSidebar