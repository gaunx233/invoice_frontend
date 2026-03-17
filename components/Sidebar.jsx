import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed p-5">
      <h2 className="text-2xl font-bold mb-8">Invoice SaaS</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/create" className="hover:bg-gray-700 p-2 rounded">Create Invoice</Link>
        <Link to="/invoices" className="hover:bg-gray-700 p-2 rounded">Invoices</Link>
        <Link to="/customers" className="hover:bg-gray-700 p-2 rounded">Customers</Link>
      </nav>
    </div>
  );
}