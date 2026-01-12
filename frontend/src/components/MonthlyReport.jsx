import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function MonthlyReport({ expenses }) {
  const last7days = Array.from({length:7}).map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6-i))
    return d
  })

  const weeklyIncomeExpenseData = last7days.map((dayDate) => {
    let income = 0
    let expense = 0

    expenses.forEach((e) => {
      const expenseDate = new Date(e.date).toDateString 
      const currentDay = dayDate.toDateString

      if (expenseDate == currentDay) {
        if (e.type == "Income") income += e.amount
        if (e.type == "Expense") expense += e.amount
      }
    })
    return {
      day : dayDate.toLocaleDateString("en-IN", { weekday: "short"}),
      Income : income,
      Expense : expense,
    }
  })

  const now = new Date()
  const categoryMap = {}

  expenses.forEach((e) => {
    const d = new Date(e.date)

    if (
      e.type === "Expense" &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    ) {
      categoryMap[e.category] = (categoryMap[e.category] || 0) + e.amount
    }
  })

  const categoryExpenseData = Object.entries(categoryMap).map(
    ([name, value]) => ({name, value})
  )

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 mt-4">
      <h3 className="text-lg font-semibold mb-4">Monthly Report</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Team Spending Trend */}
        <div>
          <h4 className="text-gray-400 mb-2">Income vs Expense (last 7 days)</h4>

          {expenses.length === 0 ? (
            <p className="text-gray-400 text-sm text-center mt-10">No data for last 7 days</p>
          ) : (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyIncomeExpenseData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="Income" fill="#00e093" radius={5} />
              <Bar dataKey="Expense" fill="#00e093" radius={5} />
            </BarChart>
          </ResponsiveContainer>
          )}
        </div>

        {/* Day-to-Day Expenses */}
        <div>
          <h4 className="text-gray-400 mb-2">Categorywise expenses (this month)</h4>

          { categoryExpenseData.length === 0 ? (
            <p className="text-gray-400 text-sm text-center mt-10">No data for report</p>
          ) : (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categoryExpenseData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="value" fill="#9b5de5" radius={5} />
            </BarChart>
          </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}