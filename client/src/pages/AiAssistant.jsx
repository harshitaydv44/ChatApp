import React from 'react'
import { FiSend } from "react-icons/fi";

const AiAssistant = () => {
  return (
    <div className = "flex flex-col h-full w-full px-4 py-2">
      <div className = "border-b pb-2 mb-2">
        <h2 className= "text-2xl font-semibold text-[#075E54">AI Assistant</h2>
        <p className= "text-gray-600">Powered by Advanceed language model</p>
      </div>

      <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
        <div className = "flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
             🤖
          </div>
          <div >
            <div className = "bg-gray-100 p-3 rounded-lg text-sm max-w-md">
              Hi there! I'm your AI assistant. How can I help you today?
            </div>
            <div className = "text-xs text-gray-400 mt-1">10:30 AM</div>
          </div>
        </div>
      </div>


      <div className="bg-gray-50 py-2 px-3 mt-4 rounded-lg shadow-sm">
        <h3 className="text-sm text-gray-600 mb-2 font-medium">Command suggestions</h3>
        <div className="flex gap-2 overflow-x-auto text-xs whitespace-nowrap">
          <span className="bg-gray-200 px-3 py-1 rounded-full">/ask Ask a specific question</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">/explain Get a detailed explanation</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">/translate Translate text</span>
        </div>
      </div>



       <div className="flex items-center gap-2 mt-4 mb-20">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:border-[#075E54]"
        />
        <button className="bg-[#075E54] text-white p-2 rounded-full hover:bg-[#064e46]">
          <FiSend className="text-lg" />
        </button>
      </div>
    </div>
  )
}

export default AiAssistant