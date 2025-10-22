import { Home, FileText, Plane, CheckCircle, Settings, Phone } from "lucide-react";
import { PlusCircle, FilePlus2, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export function Sidebar() {
  const menuItems = [
    { name: "Home", icon: <Home size={20} />, active: true },
    { name: "Expenses", icon: <FileText size={20} /> },
    { name: "Trips", icon: <Plane size={20} /> },
    { name: "Approvals", icon: <CheckCircle size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Support", icon: <Phone size={20} /> },
  ];

  return (
    <div className="flex flex-col w-64 min-h-screen bg-[#131313] text-gray-300 p-4">
      <ProfileCard />

      <nav className="mt-6 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition 
              ${item.active ? "bg-[#1d1d1d] text-[#00e093]" : "hover:bg-[#1d1d1d]"}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto flex justify-center">
        <h1 className="text-xl font-bold text-[#00e093] mt-6">EXPENSIO</h1>
      </div>
    </div>
  );
}





export function ProfileCard() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1d1d1d]">
      <img
        src="https://i.pravatar.cc/100?img=12"
        alt="User"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="text-white text-sm font-semibold">Janice Chandler</h3>
      </div>
    </div>
  );
}





export function RecentExpenses() {
  const expenses = [
    { subject: "Office Supplies", employee: "John Smith", team: "Marketing", color: "bg-purple-600", amount: "€150.00" },
    { subject: "Business Lunch", employee: "Sarah Jade", team: "Sales", color: "bg-pink-600", amount: "€75.50" },
    { subject: "Travel Expenses", employee: "Mike Brown", team: "Operations", color: "bg-red-600", amount: "€450.25" },
    { subject: "Client Dinner", employee: "Jennifer Lee", team: "Marketing", color: "bg-purple-600", amount: "€120.00" },
    { subject: "Hotel", employee: "David Wilson", team: "Finance", color: "bg-green-600", amount: "€275.75" },
  ];

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 w-min">
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





export function QuickAccess() {
  const actions = [
    { label: "New expense", icon: <PlusCircle size={22} />, color: "bg-pink-700" },
    { label: "Add receipt", icon: <FilePlus2 size={22} />, color: "bg-purple-700" },
    { label: "Create report", icon: <BarChart3 size={22} />, color: "bg-green-700" },
    { label: "Create trip", icon: <Plane size={22} />, color: "bg-red-700" },
  ];

  return (
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 mt-4">
      <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
      <div className="flex gap-4">
        {actions.map((a, i) => (
          <button
            key={i}
            className={`flex flex-col items-center justify-center flex-1 gap-2 p-4 rounded-2xl hover:bg-[#2a2a2a] transition`}
          >
            <div className={`p-3 rounded-full ${a.color} text-white`}>{a.icon}</div>
            <span className="text-sm">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}







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