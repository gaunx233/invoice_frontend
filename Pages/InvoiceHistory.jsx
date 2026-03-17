import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function InvoiceHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/invoices").then(res => setData(res.data));
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="ml-64 p-6 bg-gray-100 min-h-screen">
        {data.map(inv => (
          <div key={inv._id} className="bg-white p-4 mb-3 rounded shadow flex justify-between">
            <span>₹{inv.total}</span>
            <span>{inv.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}