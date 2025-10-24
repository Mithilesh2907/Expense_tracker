import { Home, FileText, FolderOpenDot, ChartBar, Settings } from "lucide-react";
import { ProfileCard } from "./ProfileCard";
import { LogOut as LogOutIcon } from "lucide-react";

export function Sidebar() {
  const menuItems = [
    { name: "Home", icon: <Home size={20} />, active: true },
    { name: "Expenses", icon: <FileText size={20} /> },
    { name: "Categories", icon: <FolderOpenDot size={20} /> },
    { name: "Reports", icon: <ChartBar size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Logout", icon: <LogOutIcon size={20} /> },
  ];

  return (
    <div className="flex flex-col w-64 min-h-screen bg-[#131313] text-gray-300 p-4">
      <ProfileCard />

      <nav className="mt-6 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition 
              ${item.active ? "bg-[#1d1d1d] text-[#00e093]" : "hover:bg-[#1d1d1d]"}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto flex justify-center">
        <h1 className="text-xl font-bold text-[#00e093] mt-6">EXPENSIO</h1>
      </div>
    </div>
  );
}