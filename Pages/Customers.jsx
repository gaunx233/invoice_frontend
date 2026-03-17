import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Customers() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    API.get("/customers").then(res => setList(res.data));
  }, []);

  const add = async () => {
    await API.post("/customers", { name });
    window.location.reload();
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="ml-64 p-6 bg-gray-100 min-h-screen">

        <div className="mb-4">
          <input className="border p-2 mr-2"
            placeholder="Customer name"
            onChange={(e)=>setName(e.target.value)} />

          <button onClick={add}
            className="bg-blue-500 text-white px-3 py-2 rounded">
            Add
          </button>
        </div>

        {list.map(c => (
          <div key={c._id} className="bg-white p-3 mb-2 rounded shadow">
            {c.name}
          </div>
        ))}

      </div>
    </>
  );
}