import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

export function ReportPage() {
  const [month, setMonth] = useState("October");
  const [year, setYear] = useState("2025");

  const COLORS = ["#00e093", "#9b5de5", "#f15bb5", "#fee440", "#00bbf9"];

  const incomeExpenseData = [
    { month: "Jan", income: 8000, expense: 5000 },
    { month: "Feb", income: 8500, expense: 5200 },
    { month: "Mar", income: 8700, expense: 6000 },
    { month: "Apr", income: 8900, expense: 7000 },
    { month: "May", income: 9500, expense: 7400 },
  ];

  const categoryData = [
    { name: "Food", value: 1200 },
    { name: "Transport", value: 600 },
    { name: "Rent", value: 2500 },
    { name: "Shopping", value: 800 },
    { name: "Entertainment", value: 500 },
  ];

  const trendData = [
    { date: "Week 1", spending: 1000 },
    { date: "Week 2", spending: 1400 },
    { date: "Week 3", spending: 1200 },
    { date: "Week 4", spending: 1800 },
  ];

  const topCategories = [
    { name: "Rent", amount: 2500 },
    { name: "Food", amount: 1200 },
    { name: "Shopping", amount: 800 },
  ];

  const handleExportPDF = () => {
    alert("Export as PDF coming soon 📄");
  };

  const handleExportCSV = () => {
    alert("Export as CSV coming soon 📊");
  };

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-6 text-gray-200 mt-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Reports & Analytics</h2>
        <div className="flex gap-2 items-center">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="bg-[#2a2a2a] rounded-xl px-3 py-1 text-gray-300 focus:outline-none"
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-[#2a2a2a] rounded-xl px-3 py-1 text-gray-300 focus:outline-none"
          >
            <option>2025</option>
            <option>2024</option>
          </select>
          <button 
            onClick={handleExportPDF}
            className="bg-[#00e093] text-black px-3 py-2 rounded-xl font-semibold hover:opacity-80">
            Export PDF
          </button>
          <button
            onClick={handleExportCSV}
            className="bg-[#9b5de5] text-white px-3 py-2 rounded-xl font-semibold hover:opacity-80">
            Export CSV
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Expense vs Income */}
        <div className="bg-[#252525] p-4 rounded-2xl">
          <h4 className="text-gray-400 mb-2">Monthly Expense vs Income</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={incomeExpenseData}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="income" fill="#00e093" radius={5} />
              <Bar dataKey="expense" fill="#9b5de5" radius={5} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category-wise Expense (Pie Chart) */}
        <div className="bg-[#252525] p-4 rounded-2xl">
          <h4 className="text-gray-400 mb-2">Category-wise Expense</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {categoryData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Spending Trend Over Time */}
        <div className="bg-[#252525] p-4 rounded-2xl col-span-2">
          <h4 className="text-gray-400 mb-2">Spending Trend Over Time</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="spending" stroke="#00bbf9" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top 3 Spending Categories */}
      <div className="mt-6">
        <h4 className="text-gray-400 mb-3">Top 3 Spending Categories</h4>
        <div className="grid grid-cols-3 gap-4">
          {topCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-[#252525] rounded-2xl p-4 text-center border border-[#2f2f2f]"
            >
              <h5 className="text-lg font-semibold text-white">{cat.name}</h5>
              <p className="text-2xl font-bold text-[#00e093] mt-2">₹{cat.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
