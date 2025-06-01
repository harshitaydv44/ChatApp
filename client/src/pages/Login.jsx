import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { FaLock, FaEnvelope, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  const handleChat = () =>{
    navigate("/chat");
  };
  const Feature = ({ icon, title, des }) => {
    return (
      <div className="flex items-start space-x-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-white text-sm">{des}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
     
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


      <div className="w-full md:w-1/2 bg-white text-black p-12 flex flex-col justify-center shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-[#075E54]">Log in to Chat</h2>
        <p className="text-gray-600 mb-8">Enter your credentials to continue chatting</p>

        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none w-full text-black"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Your password"
                className="bg-transparent outline-none w-full text-black"
              />
            </div>
          </div>

          {/* Forgot Link */}
          <div className="flex justify-between text-sm">
            <Link to = "/forgot-password" className="text-[#128C7E] hover:underline">Forgot password?</Link>
          </div>

          {/* Login Button */}
          <button className="w-full flex justify-center items-center bg-[#128C7E] hover:bg-[#075E54] py-2 rounded text-white font-semibold transition">
            <FaSignInAlt className="mr-2" /> Log In
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-600">
          Don't have account? <Link to = "/signup" className="text-[#128C7E] hover:underline">Create an account</Link>
          </p>

          {/* Guest Button */}
          <button onClick = {handleChat} 
          className="w-full py-2 rounded border border-gray-300 text-black hover:bg-gray-100 mt-2">
            Continue as Guest
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
