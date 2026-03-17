import { useState } from "react";
import API from "../services/api";

export default function Signup() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const signup = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <form onSubmit={signup} className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <input className="w-full mb-3 p-2 border rounded"
          placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})} />

        <input className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password" className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
}