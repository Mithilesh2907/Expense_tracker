export function RecentExpenses() {
  const expenses = [
    { subject: "Office Supplies", employee: "John Smith", team: "Marketing", color: "bg-purple-600", amount: "€150.00" },
    { subject: "Business Lunch", employee: "Sarah Jade", team: "Sales", color: "bg-pink-600", amount: "€75.50" },
    { subject: "Travel Expenses", employee: "Mike Brown", team: "Operations", color: "bg-red-600", amount: "€450.25" },
    { subject: "Client Dinner", employee: "Jennifer Lee", team: "Marketing", color: "bg-purple-600", amount: "€120.00" },
    { subject: "Hotel", employee: "David Wilson", team: "Finance", color: "bg-green-600", amount: "€275.75" },
  ];

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 ">
      <h3 className="text-lg font-semibold mb-3">Recent Expenses</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-left border-b border-gray-700">
            <th>Subject</th>
            <th>Employee</th>
            <th>Team</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-800 hover:bg-[#2a2a2a] transition">
              <td className="py-2">{item.subject}</td>
              <td>{item.employee}</td>
              <td>
                <span className={`px-3 py-1 text-xs rounded-full ${item.color}`}>
                  {item.team}
                </span>
              </td>
              <td className="font-bold">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}