import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

export default function CreateInvoice() {
  const [total, setTotal] = useState("");

  const create = async () => {
    await API.post("/invoices", { total, items: [] });
    alert("Created");
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="ml-64 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow w-96">

          <h2 className="text-xl font-bold mb-4">Create Invoice</h2>

          <input className="w-full border p-2 mb-3 rounded"
            placeholder="Total Amount"
            onChange={(e)=>setTotal(e.target.value)} />

          <button onClick={create}
            className="w-full bg-blue-500 text-white p-2 rounded">
            Create
          </button>

        </div>
      </div>
    </>
  );
}