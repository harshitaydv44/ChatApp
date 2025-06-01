import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const Feature = ({ icon, title, des }) => (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-white text-sm">{des}</p>
      </div>
    </div>
  );

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      // Simulated API call – replace with your real backend call
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        navigate('/new-password');
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (err) {
      console.error('OTP Verification Error:', err);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left */}
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

      {/* Right */}
      <div className="w-full md:w-1/2 bg-white text-black p-12 flex flex-col justify-center shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-[#075E54]">Verify OTP</h2>
        <p className="text-gray-600 mb-8">Enter the OTP sent to your email address</p>

        <form className="space-y-5" onSubmit={handleVerify}>
          <div>
            <label className="block mb-1 text-gray-700">OTP</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="text"
                maxLength={6}
                placeholder="Enter your 6-digit OTP"
                className="bg-transparent outline-none w-full text-black"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-[#128C7E] hover:bg-[#075E54] py-2 rounded text-white font-semibold transition"
          >
            <FaSignInAlt className="mr-2" /> Verify OTP
          </button>

          <p className="text-sm text-center text-gray-600">
            Didn’t receive OTP? <Link to="/forgot-password" className="text-[#128C7E] hover:underline">Resend OTP</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
