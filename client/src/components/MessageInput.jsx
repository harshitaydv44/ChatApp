import React from 'react';

const MessageInput = () => {
  return (
    <div className="px-4 py-3 mb-20 bg-white border-t border-gray-300 flex items-center gap-3">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#075E54]"
      />
      <button className="px-4 py-2 bg-[#075E54] text-white rounded-full text-sm hover:bg-[#064e46] transition-all duration-200">
        Send
      </button>
    </div>
  );
};

export default MessageInput;
