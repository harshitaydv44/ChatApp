import React from 'react'
import {Link } from 'react-router-dom';
import { FaUser,FaLock, FaEnvelope, FaSignInAlt } from 'react-icons/fa';

const SignUp = () => {
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
           <h2 className="text-3xl font-semibold mb-4 text-[#075E54]">Create your account</h2>
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

             {/*UserName */}
              <div>
               <label className="block mb-1 text-gray-700">Full Name</label>
               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                 <FaUser className="text-gray-400 mr-2" />
                 <input
                   type="name"
                   placeholder="Enter your full name"
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
            
            {/* confirm password */}
              <div>
               <label className="block mb-1 text-gray-700">Confirm Password</label>
               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                 <FaLock className="text-gray-400 mr-2" />
                 <input
                   type="password"
                   placeholder="Confirm your password"
                   className="bg-transparent outline-none w-full text-black"
                 />
               </div>
             </div>
   
            
   
             {/* sign Button */}
             <button className="w-full flex justify-center items-center bg-[#128C7E] hover:bg-[#075E54] py-2 rounded text-white font-semibold transition">
               <FaSignInAlt className="mr-2" /> Create Account
             </button>
   
             {/* Signup Link */}
             <p className="text-sm text-center text-gray-600">
               Already have account? <Link to = "/" className="text-[#128C7E] hover:underline">Log in</Link>
             </p>
   
             {/* Guest Button */}
             <button className="w-full py-2 rounded border border-gray-300 text-black hover:bg-gray-100 mt-2">
               Continue as Guest
             </button>
           </form>
         </div>
       </div>
  );
};

export default SignUp