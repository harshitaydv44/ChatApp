import React, { useState } from 'react';
import { FaLock, FaSignInAlt } from 'react-icons/fa';

const NewPass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Feature = ({ icon, title, des }) => (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-white text-sm">{des}</p>
      </div>
    </div>
  );

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulate password change API
    console.log("Password changed to:", password);
    alert("Password changed successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#075E54] text-white p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Connect with your circle</h1>
        <p className="text-lg mb-8">
          Chat instantly, collaborate on tasks, and plan together — all in one place inspired by WhatsApp simplicity.
        </p>
        <div className="space-y-6">
          <Feature icon="💬" title="Real-time messaging" des="Instant communication with individuals and groups" />
          <Feature icon="📝" title="Collaborative notes" des="Create and edit documents together in real-time" />
          <Feature icon="📅" title="Event planning" des="Schedule and manage events with your team" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 bg-white text-black p-12 flex flex-col justify-center shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-[#075E54]">Set New Password</h2>
        <p className="text-gray-600 mb-8">Enter and confirm your new password</p>

        <form className="space-y-5" onSubmit={handleChangePassword}>
          <div>
            <label className="block mb-1 text-gray-700">New Password</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter new password"
                className="bg-transparent outline-none w-full text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Confirm new password"
                className="bg-transparent outline-none w-full text-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-[#128C7E] hover:bg-[#075E54] py-2 rounded text-white font-semibold transition"
          >
            <FaSignInAlt className="mr-2" /> Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
