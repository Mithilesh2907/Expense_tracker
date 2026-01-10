import { useEffect, useState } from "react";
import { fetchExpenses } from "../../services/expenseServices";

export function RecentExpenses() {

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecentExpenses() {
      try {
        const data = await fetchExpenses(5);
        setExpenses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadRecentExpenses();
  },[]);

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 ">
      <h3 className="text-lg font-semibold mb-3">Recent Expenses</h3>

      {loading && (
        <p className="text-gray-400 text-center py-6">
          Loading recent expenses. Please wait....
        </p>
      )}

      {!loading && expenses.length === 0 &&(
        <div className="text-center py-8 text-gray-400">
          <p className="font-semibold">No expenses yet</p>
          <p className="text-sm mt-1">
            Add your expenses to see it here.
          </p>
        </div>
      )}

      {!loading && expenses.length > 0 &&(
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-left border-b border-gray-700">
            <th>Category</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}
              className="border-b border-gray-800 hover:bg-[#2a2a2a] transition"
            >
              <td className="py-2">{item.category}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  item.type === "Income"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}>
                  {item.type}
                </span>
              </td>
              <td className="font-bold">₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}