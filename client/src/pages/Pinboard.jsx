import React from 'react';
import PinboardCard from '../components/PinboardCard';

const Pinboard = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#F0F2F5] p-6 overflow-y-auto min-h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-[#075E54]">Pinboard</h2>
          <p className="text-sm text-gray-600">Save and organize important content</p>
        </div>
        <button className="bg-[#075E54] text-white text-sm px-4 py-2 rounded-md hover:bg-[#064e46] transition">
          + Add to Pinboard
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search pinned items..."
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#075E54]"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <PinboardCard
          image="https://images.unsplash.com/photo-..."
          title="Project Requirements Document"
          pinnedBy="Sarah Johnson"
          time="2 days ago"
          linkLabel="Open link"
          linkUrl="https://example.com"
        />
        <PinboardCard
          image="https://images.unsplash.com/photo-..."
          title="UI Design Mockup"
          pinnedBy="Mike Peters"
          time="3 days ago"
          linkLabel="Open image"
          linkUrl="https://example.com"
        />
        <PinboardCard
          title="Meeting Notes - Project Kickoff"
          pinnedBy="You"
          time="1 week ago"
        />
      </div>
    </div>
  );
};

export default Pinboard;
