import React from "react";

const Events = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-4 py-2">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-[#075E54]">Events</h2>
          <p className="text-gray-600">Plan and manage your schedule</p>
        </div>
        <button className="bg-[#075E54] text-white px-4 py-2 rounded-md font-medium hover:bg-[#064e46]">
          + Create Event
        </button>
      </div>

      {/* Calendar & Events Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        {/* Calendar + Upcoming Events */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow p-4">
            {/* Calendar Mockup */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-[#075E54]">June 2025</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                  <div key={i} className="font-medium">{d}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`p-1 rounded-full ${
                      i + 1 === 7 ? "bg-[#075E54] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h3 className="font-semibold mb-2 text-[#075E54]">Upcoming Events</h3>
              {[
                { name: "Team Meeting", time: "Today • 2:00 PM - 3:00 PM" },
                { name: "Client Presentation", time: "Tomorrow • 10:00 AM - 11:30 AM" },
                { name: "Design Workshop", time: "Jun 18, 1:00 PM - 4:00 PM" },
              ].map((e, idx) => (
                <div key={idx} className="text-sm border-b py-2">
                  <div className="font-medium text-[#075E54]">{e.name}</div>
                  <div className="text-gray-500">{e.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="w-full lg:w-2/3 grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Team Meeting",
              time: "Today • 2:00 PM - 3:00 PM",
              location: "Conference Room A",
              desc: "Weekly team sync to discuss project progress and upcoming milestones.",
              attendees: 8,
            },
            {
              title: "Client Presentation",
              time: "Tomorrow • 10:00 AM - 11:30 AM",
              location: "Zoom Meeting",
              desc: "Presenting the final designs to the client for approval.",
              attendees: 12,
            },
            {
              title: "Design Workshop",
              time: "Jun 18, 2025 • 1:00 PM - 4:00 PM",
              location: "Design Lab",
              desc: "Collaborative workshop to brainstorm ideas for the new product features.",
              attendees: 6,
            },
            {
              title: "Project Deadline",
              time: "Jun 25, 2025 • All day",
              location: "",
              desc: "Final delivery date for the project.",
              attendees: 10,
            },
          ].map((event, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h3 className="font-semibold text-[#075E54]">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">📅 {event.time}</p>
              {event.location && <p className="text-sm mt-1">📍 {event.location}</p>}
              <p className="text-sm text-gray-700 mt-2">{event.desc}</p>
              <div className="flex justify-between mt-3 text-sm text-gray-500">
                <span>👥 {event.attendees} attendees</span>
                <div className="flex gap-2">
                  <button className="border px-2 py-1 rounded hover:bg-gray-100">Edit</button>
                  <button className="bg-[#075E54] text-white px-3 py-1 rounded hover:bg-[#064e46]">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
