import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar.jsx";

export const ProtectedLayout = () => {
    return (
        <div className="flex min-h-screen bg-[#0f0f0f] text-gray-200">
            <Sidebar />
            <main className="flex-1 p-6">
                <Outlet />  
            </main>
        </div>
    );
};