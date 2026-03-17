import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get("/dashboard").then(res => setData(res.data));
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="ml-64 p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Revenue</h2>
            <p className="text-xl font-bold">₹{data.revenue}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2>Total Invoices</h2>
            <p className="text-xl font-bold">{data.totalInvoices}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2>Paid</h2>
            <p className="text-xl font-bold">{data.paid}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2>Pending</h2>
            <p className="text-xl font-bold">{data.pending}</p>
          </div>

        </div>
      </div>
    </>
  );
}