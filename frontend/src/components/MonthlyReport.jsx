import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function MonthlyReport() {
  const teamData = [
    { name: "PJ", spending: 80 },
    { name: "SJ", spending: 40 },
    { name: "MB", spending: 75 },
    { name: "IS", spending: 55 },
    { name: "DW", spending: 60 },
    { name: "BS", spending: 90 },
  ];

  const expenseData = [
    { name: "Accommodation", value: 40 },
    { name: "Comms", value: 15 },
    { name: "Services", value: 100 },
    { name: "Food", value: 80 },
    { name: "Fuel", value: 30 },
  ];

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 mt-4">
      <h3 className="text-lg font-semibold mb-4">Monthly Report</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Team Spending Trend */}
        <div>
          <h4 className="text-gray-400 mb-2">Team Spending Trend</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={teamData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="spending" fill="#00e093" radius={5} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Day-to-Day Expenses */}
        <div>
          <h4 className="text-gray-400 mb-2">Day-to-Day Expenses</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={expenseData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="value" fill="#9b5de5" radius={5} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}