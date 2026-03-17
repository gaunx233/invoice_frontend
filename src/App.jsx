import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import CreateInvoice from "../Pages/CreateInvoice";
import InvoiceHistory from "../Pages/InvoiceHistory";
import Customers from "../Pages/Customers";
import './App.css'

function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateInvoice />} />
        <Route path="/invoices" element={<InvoiceHistory />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
