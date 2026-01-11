import { useEffect, useState } from "react";
import TransactionFilters from "./Filters";
import { fetchAllExpenses } from "../../services/expenseServices";

export function Transactions() {
  // const transactions = [
  //   {id: 1, date: "2024-06-01", type: "Expense", note: "Lunch at cafe", amount: "$15.00"},
  //   {id: 1, date: "2024-06-01", type: "Expense", note: "Lunch at cafe", amount: "$15.00"},
  //   {id: 1, date: "2024-06-01", type: "Expense", note: "Lunch at cafe", amount: "$15.00"},
  //   {id: 1, date: "2024-06-01", type: "Expense", note: "Lunch at cafe", amount: "$15.00"},
  //   {id: 1, date: "2024-06-01", type: "Expense", note: "Lunch at cafe", amount: "$15.00"},
  // ];

  const [ transactions, setTransactions] = useState([])
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAllTransactions() {
      try {
        const data = await fetchAllExpenses()
        setTransactions(data)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadAllTransactions()
  },[])

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 ">
      <div className="flex items-center justify-between p-4 bg-[#1d1d1d] rounded-2xl">  
      <h3 className="text-lg font-semibold mb-3">Transactions</h3>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Add Transaction</button>
      </div>
      <TransactionFilters />


      {loading && (
        <p className="text-gray-400 text-center py-6">
          Loading recent expenses. Please wait....
        </p>
      )}

      {!loading && transactions.length === 0 &&(
        <div className="text-center py-8 text-gray-400">
          <p className="font-semibold">No expenses yet</p>
          <p className="text-sm mt-1">
            Add your expenses to see it here.
          </p>
        </div>
      )}

      {!loading && transactions.length > 0 &&(
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-left border-b border-gray-700">
            <th>Date</th>
            <th>Type</th>
            <th>Note</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="border-b border-gray-800 hover:bg-[#2a2a2a] transition">
              <td className="py-2">{item.date}</td>
              <td>{item.type}</td>
              {/* <td>
                <span className={`px-3 py-1 text-xs rounded-full ${item.color}`}>
                  {item.category}
                </span>
              </td> */}
              <td>{item.note}</td>
              <td>₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}