import { useState } from "react";

export default function TransactionFilters() {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    console.log({
      dateRange,
      type,
      category,
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 bg-[#1d1d1d] p-4 rounded-xl">
      {/* Date Range */}
      <div className="flex items-center gap-2 flex-1">
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-2 text-sm text-gray-200 focus:ring-1 focus:ring-[#00e093] flex-1"
        />
        <span className="text-gray-400">to</span>
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-2 text-sm text-gray-200 focus:ring-1 focus:ring-[#00e093] flex-1"
        />
      </div>

      {/* Type Dropdown */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-2 text-sm text-gray-200 focus:ring-1 focus:ring-[#00e093] flex-1"
      >
        <option value="">Type</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-2 text-sm text-gray-200 focus:ring-1 focus:ring-[#00e093] flex-1"
      >
        <option value="">Category</option>
        <option value="salary">Salary</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="shopping">Shopping</option>
      </select>

      {/* Filter Button */}
      <button
        onClick={handleFilter}
        className="bg-[#00e093] hover:bg-[#00b87a] text-black font-semibold px-4 py-2 rounded-lg transition"
      >
        Filter
      </button>
    </div>
  );
}
