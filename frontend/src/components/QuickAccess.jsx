import { useState } from "react";
import { PlusCircle, FilePlus2, BarChart3, X } from "lucide-react";


export function QuickAccess() {
  const [showModal, setShowModal] = useState(false);

  const actions = [
    { label: "New expense", icon: <PlusCircle size={22} />, color: "bg-pink-700", onclick: () => setShowModal(true) },
    { label: "Add receipt", icon: <FilePlus2 size={22} />, color: "bg-purple-700" },
    { label: "Create report", icon: <BarChart3 size={22} />, color: "bg-green-700" },
  ];

  return (
    <>
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 mt-4">
      <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
      <div className="flex gap-4">
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={a.onclick}
            className={`flex flex-col items-center justify-center flex-1 gap-2 p-4 rounded-2xl hover:bg-[#2a2a2a] transition`}
          >
            <div className={`p-3 rounded-full ${a.color} text-white`}>{a.icon}</div>
            <span className="text-sm">{a.label}</span>
          </button>
        ))}
      </div>
    </div>

    {showModal && (
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-[#111]/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[#1c1c1c]/90 backdrop-blur-xl text-gray-200 rounded-2xl p-6 w-[90%] max-w-md relative shadow-2xl border border-[#333]"> 
          <button
          onClick={() => setShowModal(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg font-semibold mb-4">  Add New Expense</h2>
          <form
          className="flex flex-col gap-4"
          onSubmit={(e)=>{
            e.preventDefault()
            console.log("expense added")
            setShowModal(false)
          }
          }
          >
            <input type="text" placeholder="Subject" className="bg-[#2a2a2a] rounded-xl p-2 outline-none" required/>
            <input type="number" placeholder="Amount" className="bg-[#2a2a2a] rounded-xl p-2 outline-none" required/>

            <select className="bg-[#2a2a2a] rounded-xl p-2 outline-none">
              <option>Expense</option>
              <option>Income</option>
            </select>

            <input type="text" placeholder="Employee" className="bg-[#2a2a2a] rounded-xl p-2 outline-none"/>
            <input type="date" className="bg-[#2a2a2a] rounded-xl p-2 outline-none"/>

            <select className="bg-[#2a2a2a] rounded-xl p-2 outline-none">
              <option>Travel</option>
              <option>Food</option>
              <option>Office</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Notes (optional)" className="bg-[#2a2a2a] rounded-xl p-2 outline-none"></textarea>

            <div className="flex justify-end gap-3 mt-2">
              <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-xl bg-[#333] hover:bg-[#444] transition"
              >
                Cancel
              </button>
              <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-[#00e093] text-black font-semibold hover:opacity-80"
              >
                Add Expense
              </button>

            </div>

          </form>
        </div>
      </div>
      )
    }
    </>
  );
}
