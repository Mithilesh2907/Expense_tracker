import { useState } from "react";
import { PlusCircle, FilePlus2, BarChart3, X } from "lucide-react";


export function QuickAccess() {
  const [showExpeseModal, setShowExpenseModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  const actions = [
    { label: "New expense", icon: <PlusCircle size={22} />, color: "bg-pink-700", onClick: () => setShowExpenseModal(true) },
    { label: "Add receipt", icon: <FilePlus2 size={22} />, color: "bg-purple-700",onClick: () => setShowReceiptModal(true) },
    { label: "Create report", icon: <BarChart3 size={22} />, color: "bg-green-700", onClick: () => alert("Create report coming soon ") },
  ];

  return (
    <>
    <div className="bg-[#1d1d1d] rounded-2xl p-4 text-gray-200 mt-4">
      <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
      <div className="flex gap-4">
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={a.onClick}
            className={`flex flex-col items-center justify-center flex-1 gap-2 p-4 rounded-2xl hover:bg-[#2a2a2a] transition`}
          >
            <div className={`p-3 rounded-full ${a.color} text-white`}>{a.icon}</div>
            <span className="text-sm">{a.label}</span>
          </button>
        ))}
      </div>
    </div>


{/* Add new expense popup */}

    {showExpeseModal && (
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-[#111]/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[#1c1c1c]/90 backdrop-blur-xl text-gray-200 rounded-2xl p-6 w-[90%] max-w-md relative shadow-2xl border border-[#333]"> 
          <button
          onClick={() => setShowExpenseModal(false)} 
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
            setShowExpenseModal(false)
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
              onClick={() => setShowExpenseModal(false)}
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


 {/* Upload receipt popup */}

    {showReceiptModal && (  
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-[#111]/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1c1c1c]/90 backdrop-blur-xl text-gray-200 rounded-2xl p-6 w-[90%] max-w-md relative shadow-2xl border border-[#333]">

          <button
          onClick={() => setShowReceiptModal(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg font-semibold mb-4">Add Receipt</h2>

          <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fileInput = e.target.receiptFile.files[0];
                if (fileInput) console.log("Receipt uploaded:", fileInput.name);
                setShowReceiptModal(false);
              }}
            >
             
            <input
              type="file"
              name="receiptFile"
              accept=".jpg,.jpeg,.png,.pdf"
              className="bg-[#2a2a2a] rounded-xl p-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-[#00e093] file:text-black file:font-semibold hover:file:opacity-80 cursor-pointer"
              required
            />  
        
              {/* <div className="relative bg-[#2a2a2a] rounded-xl p-2 flex items-center justify-between">
                <span className="text-gray-400 text-sm flex-1 text-center truncate">
                  No file chosen
                </span>

                <label
                  htmlFor="receiptFile"
                  className="ml-2 px-4 py-1 rounded-lg bg-[#00e093] text-black font-semibold cursor-pointer hover:opacity-80 transition"
                >
                  Choose File
                </label>

                <input
                  id="receiptFile"
                  type="file"
                  name="receiptFile"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={(e) => {
                    const fileName = e.target.files[0]?.name || "No file chosen";
                    e.target.parentNode.querySelector("span").textContent = fileName;
                  }}
                  required
                />
              </div> */}


              <textarea placeholder="Notes (optional)" className="bg-[#2a2a2a] rounded-xl p-2 outline-none"></textarea>

              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setShowReceiptModal(false)}
                  className="px-4 py-2 rounded-xl bg-[#333] hover:bg-[#444] transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
                >
                  Upload Receipt
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
