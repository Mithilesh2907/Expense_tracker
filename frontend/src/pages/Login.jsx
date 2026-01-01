// export default function Login() {
//   return (
//     <div className="font-sans">
//       <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
//         <div className="relative sm:max-w-sm w-full">
          
//           {/* Background decorative cards */}
//           <div className="absolute inset-0">
//             <div className="bg-blue-400 shadow-lg w-full h-full rounded-3xl transform -rotate-6 z-0" />
//             {/* <div className="bg-red-400 shadow-lg w-full h-full rounded-3xl transform rotate-6 z-0" /> */}
//           </div>

//           {/* Actual login form card */}
//           <div className="relative z-10 w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
//             <h2 className="block mt-3 text-lg text-gray-700 text-center font-semibold">
//               Login
//             </h2>

//             <form className="mt-10">
//               {/* Email */}
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
//                 />
//               </div>

//               {/* Password */}
//               <div className="mt-7">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
//                 />
//               </div>

//               {/* Remember me + Forgot password */}
//               <div className="mt-7 flex items-center justify-between">
//                 <label
//                   htmlFor="remember_me"
//                   className="inline-flex items-center cursor-pointer"
//                 >
//                   <input
//                     id="remember_me"
//                     type="checkbox"
//                     className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     name="remember"
//                   />
//                   <span className="ml-2 text-sm text-gray-600">Remember me</span>
//                 </label>
//                 <a
//                   href="#"
//                   className="underline text-sm text-gray-600 hover:text-gray-900"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>

//               {/* Login button */}
//               <div className="mt-7">
//                 <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
//                   Login
//                 </button>
//               </div>

//               {/* Divider */}
//               <div className="flex mt-7 items-center text-center">
//                 <hr className="border-gray-300 border-1 w-full rounded-md" />
//                 <span className="block font-medium text-sm text-gray-600 w-full">
//                   Login with
//                 </span>
//                 <hr className="border-gray-300 border-1 w-full rounded-md" />
//               </div>

//               {/* Social buttons */}
//               <div className="flex mt-7 justify-center w-full">
//                 <button className="mr-5 bg-blue-500 px-4 py-2 rounded-xl text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
//                   Facebook
//                 </button>
//                 <button className="bg-red-500 px-4 py-2 rounded-xl text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
//                   Google
//                 </button>
//               </div>

//               {/* Signup link */}
//               <div className="mt-7 text-center">
//                 <span className="text-gray-700 mr-2">New here ?</span>
//                 <a
//                   href="#"
//                   className="text-blue-500 font-semibold transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
//                 >
//                   Create new account
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Mail, LockKeyhole, LogIn, UserPlus } from "lucide-react"; // Import icons for a cleaner look
import { Link } from "react-router-dom"; // Import Link for navigation
import { useState } from "react";
import { supabase } from "../supabase.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate =  useNavigate();

  async function handleLogin(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error.message);
      alert("Login failed: " + error.message);
    } else {
      navigate("/",{ replace: true});
      console.log("Login successful:", data);
      alert("Login successful!");
      }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleLogin(email, password);
  }

  return (
    // Outer container: dark background, min-height to cover the screen
    <div className="font-sans bg-[#131313] min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full sm:max-w-md">
        
        {/* Decorative background element, now dark grey for a subtle layer effect */}
        <div className="absolute inset-0">
          <div className="bg-[#1d1d1d] shadow-2xl w-full h-full rounded-2xl transform -rotate-3 z-0" />
        </div>

        {/* Actual login form card: dark grey background, rounded edges */}
        <div className="relative z-10 w-full rounded-2xl p-8 bg-[#1d1d1d] shadow-2xl">
          
          {/* Brand/Title - using the color from the sidebar for emphasis */}
          <div className="flex justify-center mb-10">
            <h1 className="text-3xl font-bold text-[#00e093]">TabZ Login</h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Email Input Field */}
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // Dark theme input styling: darker background, no border, generous padding
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            {/* Password Input Field */}
            <div className="relative">
              <LockKeyhole size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // Dark theme input styling
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between pt-2">
              <label
                htmlFor="remember_me"
                className="inline-flex items-center cursor-pointer text-gray-400"
              >
                <input
                  id="remember_me"
                  type="checkbox"
                  // Checkbox styled to match the theme
                  className="rounded-sm border-gray-600 bg-[#131313] text-[#00e093] shadow-sm focus:ring-[#00e093]"
                  name="remember"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-[#00e093] hover:text-green-400 transition duration-300 font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <div className="pt-4">
              <button
                type="submit"
                // Primary button: using the theme's highlight color (#00e093)
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[#131313] font-semibold bg-[#00e093] shadow-lg shadow-green-900/50 
                           hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-700/50"
              >
                <LogIn size={20} />
                Sign In
              </button>
            </div>

            {/* Divider and 'Sign Up' Link */}
            <div className="flex flex-col items-center pt-6 space-y-4">
              <p className="text-gray-500 text-sm">
                Don't have an account?
              </p>
              <Link
                to="/signup"
                className="flex items-center gap-2 text-md font-semibold text-[#00e093] hover:text-green-400 transition duration-300"
              >
                {/* <UserPlus size={20} /> */}
                Create New Account
              </Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}