// import { Home, FileText, FolderOpenDot, ChartBar, Settings } from "lucide-react";
// import { ProfileCard } from "./ProfileCard";
// import { LogOut as LogOutIcon } from "lucide-react";

// export function Sidebar() {
//   const menuItems = [
//     { name: "Home", icon: <Home size={20} />, active: true },
//     { name: "Expenses", icon: <FileText size={20} /> },
//     { name: "Categories", icon: <FolderOpenDot size={20} /> },
//     { name: "Reports", icon: <ChartBar size={20} /> },
//     { name: "Settings", icon: <Settings size={20} /> },
//     { name: "Logout", icon: <LogOutIcon size={20} /> },
//   ];

//   return (
//     <div className="flex flex-col w-64 min-h-screen bg-[#131313] text-gray-300 p-4">
//       <ProfileCard />

//       <nav className="mt-6 space-y-2">
//         {menuItems.map((item, index) => (
//           <div
//             key={index}
//             className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition 
//               ${item.active ? "bg-[#1d1d1d] text-[#00e093]" : "hover:bg-[#1d1d1d]"}`}
//           >
//             {item.icon}
//             <span>{item.name}</span>
//           </div>
//         ))}
//       </nav>

//       <div className="mt-auto flex justify-center">
//         <h1 className="text-xl font-bold text-[#00e093] mt-6">TabZ</h1>
//       </div>
//     </div>
//   );
// }




import { Home, FileText, FolderOpenDot, ChartBar, Settings, LogOut as LogOutIcon } from "lucide-react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { ProfileCard } from "./ProfileCard";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  // Add a 'path' to each menu item for routing
  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    // Point "Expenses" to the "/transactions" route you already have
    { name: "Expenses", icon: <FileText size={20} />, path: "/transactions" },
    { name: "Categories", icon: <FolderOpenDot size={20} />, path: "/categories" },
    { name: "Reports", icon: <ChartBar size={20} />, path: "/reports" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  const navigate = useNavigate();

   async function handleLogout() {
      await supabase.auth.signOut();
      navigate("/login");
   }

  return (
    <div className="flex flex-col w-64 min-h-screen bg-[#131313] text-gray-300 p-4">
      <ProfileCard />

      <nav className="mt-6 flex flex-col justify-between flex-1">
        <div>
          {menuItems.map((item, index) => (
            // Replace the div with NavLink
            <NavLink
              key={index}
              to={item.path}
              // Use a function in className to dynamically apply styles
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition mt-2 ${
                  isActive ? "bg-[#1d1d1d] text-[#00e093]" : "hover:bg-[#1d1d1d]"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
          {/* Logout should be a button, not a link */}
           <div
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition hover:bg-[#1d1d1d]">
             <LogOutIcon size={20} />
             <span>Logout</span>
           </div>
        </div>

        {/* Moved Brand to the bottom */}
          <div className="flex justify-center">
            <h1 className="text-xl font-bold text-[#00e093] mt-6">TabZ</h1>
          </div>
      </nav>
    </div>
  );
}