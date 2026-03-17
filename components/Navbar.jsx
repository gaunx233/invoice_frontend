export default function Navbar() {
  return (
    <div className="ml-64 bg-white p-4 shadow flex justify-between">
      <h1 className="font-bold">Dashboard</h1>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}