import React from 'react'

const Notes = () => {
  return (
    <div className = "flex flex-col gap-4 w-full">
      <div className = "flex justify-between items-start">
        <div>
          <h2 className = "text-2xl font-semibold">Shared Notes</h2>
          <p className="text-gray-500">Collaborate on documents in real-time</p>
        </div>
        <button className = "bg-[#075E54] text-white px-4 py-2 mx-0.5 my-4 rounded-md font-medium">+ New Note</button>
      </div>
    </div>
  )
}

export default Notes