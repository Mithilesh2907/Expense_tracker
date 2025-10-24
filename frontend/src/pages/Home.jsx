import { Sidebar } from './HomeComponents.jsx';
import { RecentExpenses } from './HomeComponents.jsx';
import { QuickAccess } from './HomeComponents.jsx';
import { MonthlyReport } from './HomeComponents.jsx';

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