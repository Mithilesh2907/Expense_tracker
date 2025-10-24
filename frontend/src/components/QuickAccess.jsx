import { PlusCircle, FilePlus2, BarChart3 } from "lucide-react";

export function QuickAccess() {
  const actions = [
    { label: "New expense", icon: <PlusCircle size={22} />, color: "bg-pink-700" },
    { label: "Add receipt", icon: <FilePlus2 size={22} />, color: "bg-purple-700" },
    { label: "Create report", icon: <BarChart3 size={22} />, color: "bg-green-700" },
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
