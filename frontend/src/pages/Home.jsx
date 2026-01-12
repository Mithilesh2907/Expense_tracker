import { Sidebar } from "../components/Sidebar";
import { RecentExpenses } from "../components/RecentExpenses";
import { QuickAccess } from "../components/QuickAccess";
import { MonthlyReport } from "../components/MonthlyReport";
import { useEffect } from "react";
import { fetchAllExpenses } from "../../services/expenseServices";
import { useState } from "react";

export default function HomePage() {

  const [ expenses, setExpenses] = useState([])

  useEffect(() => {
    async function loadExpenses() {
      try {
        const d = await fetchAllExpenses()
        setExpenses(d)
      } catch(error) {
        console.error(error)
      }
    }
    loadExpenses()
  },[])

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-gray-200">
      {/* <Sidebar /> */}

      <main className="flex-1 p-6 overflow-y-auto">
        <RecentExpenses />
        <QuickAccess />
        <MonthlyReport expenses={expenses} />
      </main>
    </div>
  );
}