import { useState } from "react";

export default function Filters({ onFilter }) {
  const [data, setData] = useState({
    category: "All",
    status: "All",
    sort: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-3 p-4 bg-white shadow rounded-md">
      <select
        name="category"
        value={data.category}
        onChange={handleChange}
        className="border p-2 rounded w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Furniture</option>
      </select>

      <select
        name="status"
        value={data.status}
        onChange={handleChange}
        className="border p-2 rounded w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>All</option>
        <option>Available</option>
        <option>Out of Stock</option>
        <option>Coming Soon</option>
      </select>

      <select
        name="sort"
        value={data.sort}
        onChange={handleChange}
        className="border p-2 rounded w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort by Rating</option>
        <option value="high">High → Low</option>
        <option value="low">Low → High</option>
      </select>

      <button
        onClick={() => onFilter(data)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full md:w-auto transition"
      >
        Apply
      </button>
    </div>
  );
}
