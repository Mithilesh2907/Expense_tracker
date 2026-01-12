import { Mail, LockKeyhole, User, UserPlus, LogIn } from "lucide-react"; 
import { supabase } from "../supabase.jsx";
import { useState } from "react";



export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


  async function handleSignup(email,password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if(error) {
    console.error("Error signing up:", error.message);
    alert("Signup failed: " + error.message);
  } else {
    console.log("Signup successful:", data);
    alert("Signup successful! Please check your email to confirm your account.");
  }
}


async function handleSubmit(e) {
  e.preventDefault();

  if(password!=confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  await handleSignup(email, password);
}


  return (
    <div className="font-sans bg-[#131313] min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full sm:max-w-md">
        
        <div className="absolute inset-0">
          <div className="bg-[#1d1d1d] shadow-2xl w-full h-full rounded-2xl transform rotate-3 z-0" />
        </div>

        <div className="relative z-10 w-full rounded-2xl p-8 bg-[#1d1d1d] shadow-2xl">
          
          <div className="flex justify-center mb-10">
            <h1 className="text-3xl font-bold text-[#00e093]">Create Account</h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            <div className="relative">
              <LockKeyhole size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>
            
            <div className="relative">
              <LockKeyhole size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[#131313] font-semibold bg-[#00e093] shadow-lg shadow-green-900/50 
                           hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-700/50"          
              >
                <UserPlus size={20} />
                Register
              </button>
            </div>

            <div className="flex flex-col items-center pt-6 space-y-4">
              <p className="text-gray-500 text-sm">
                Already have an account?
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-md font-semibold text-[#00e093] hover:text-green-400 transition duration-300"
              >
                <LogIn size={20} />
                Go to Login
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}