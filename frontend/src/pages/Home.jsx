import { Sidebar } from "../components/Sidebar";
import { RecentExpenses } from "../components/RecentExpenses";
import { QuickAccess } from "../components/QuickAccess";
import { MonthlyReport } from "../components/MonthlyReport";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-gray-200">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <RecentExpenses />
        <QuickAccess />
        <MonthlyReport />
      </main>
    </div>
  );
}