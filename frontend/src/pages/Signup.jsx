import { Mail, LockKeyhole, User, UserPlus, LogIn } from "lucide-react"; 

export default function Signup() {
  return (
    // Outer container: dark background, min-height to cover the screen
    <div className="font-sans bg-[#131313] min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full sm:max-w-md">
        
        {/* Decorative background element, now dark grey for a subtle layer effect */}
        <div className="absolute inset-0">
          <div className="bg-[#1d1d1d] shadow-2xl w-full h-full rounded-2xl transform rotate-3 z-0" />
        </div>

        {/* Actual signup form card: dark grey background, rounded edges */}
        <div className="relative z-10 w-full rounded-2xl p-8 bg-[#1d1d1d] shadow-2xl">
          
          {/* Brand/Title */}
          <div className="flex justify-center mb-10">
            <h1 className="text-3xl font-bold text-[#00e093]">Create Account</h1>
          </div>

          <form className="space-y-6">
            
            {/* Full Name Input Field */}
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Full Name"
                // Dark theme input styling
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            {/* Email Input Field */}
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email Address"
                // Dark theme input styling
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
                // Dark theme input styling
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>
            
             {/* Confirm Password Input Field */}
            <div className="relative">
              <LockKeyhole size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                placeholder="Confirm Password"
                // Dark theme input styling
                className="w-full pl-10 pr-4 py-3 bg-[#131313] text-gray-300 rounded-lg shadow-inner outline-none transition duration-300 ease-in-out 
                           focus:ring-2 focus:ring-[#00e093] focus:bg-gray-900 placeholder-gray-500 border-none"
              />
            </div>

            {/* Signup button */}
            <div className="pt-4">
              <button
                type="submit"
                // Primary button: using the theme's highlight color (#00e093)
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[#131313] font-semibold bg-[#00e093] shadow-lg shadow-green-900/50 
                           hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-700/50"
              >
                <UserPlus size={20} />
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="flex flex-col items-center pt-6 space-y-4">
              <p className="text-gray-500 text-sm">
                Already have an account?
              </p>
              <a
                href="#" // You'd link this to your Login component route
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