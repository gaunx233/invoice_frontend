import { useState } from "react";
import API from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <form onSubmit={login} className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password" className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}