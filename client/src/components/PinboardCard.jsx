import React from 'react'


const PinboardCard = ({image,title,pinnedBy,time,linklabel,linkUrl}) => {
  return (
    <div className = "bg-white rounded-lg shadow-sm p-4 w-full max-w-xs">
    { image && (
        <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded-md mb-3"
        />
    )}
    <h3 className = "font-semibold text-base text-gray-800">{title}</h3>
    <p className = "text-sm text-gray-500">Pinned by {pinnedBy}</p>
    <p className = "text-xs text-gray-400">{time}</p>
    {linkUrl && (
        <a 
        href = {linkUrl}
        className = "text-blue-600 text-sm mt-1 inline-block hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        >
            {linklabel}
            </a>
    )}
    
    </div>
  )
}

export default PinboardCard