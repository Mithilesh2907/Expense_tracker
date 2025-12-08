import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { TransactionPage } from "./pages/TransactionPage.jsx";
import HomePage from "./pages/Home.jsx";
import { ReportPage } from "./pages/ReportPage.jsx";
import Signup from "./pages/Signup.jsx";

// Simple placeholder components for the new pages
const CategoriesPage = () => <div>Categories Page</div>;
const ReportsPage = () => <div>Reports Page</div>;
const SettingsPage = () => <div>Settings Page</div>;


export default function App() {
  return (
      <div className="flex min-h-screen bg-[#0f0f0f] text-gray-200">
        {/* Uncomment the Sidebar. It will now appear on all pages */}
        <Sidebar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/settings" element={<SettingsPage />} />

            {/* Note: The login page will also have the sidebar with this setup.
                You might want a different layout for it later. */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
  );
}