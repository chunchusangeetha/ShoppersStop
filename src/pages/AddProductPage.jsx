import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [inStock, setInStock] = useState(true);

  const sanitize = (text) => text?.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const onSubmit = (data) => {
    data.name = sanitize(data.name);
    data.brand = sanitize(data.brand);
    data.color = sanitize(data.color);
    data.sku = sanitize(data.sku);

    if (!/^[a-zA-Z0-9\s]+$/.test(data.name)) {
      alert("Name should contain only letters and numbers.");
      return;
    }
    if (data.price <= 0) {
      alert("Price must be greater than 0.");
      return;
    }
    if (data.quantity <= 0 || !Number.isInteger(Number(data.quantity))) {
      alert("Quantity must be a positive integer.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("products")) || [];
    if (existing.find((p) => p.sku === data.sku)) {
      alert("SKU must be unique!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...data,
      inStock,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    const updated = [...existing, newProduct];
    localStorage.setItem("products", JSON.stringify(updated));

    alert("Product added successfully!");
    reset();
    navigate("/products");
  };

  return (
    <div className="flex justify-center py-12 px-4 min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Add New Product
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter product name"
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Price (₹)
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Enter price"
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">In Stock</label>
          <button
            type="button"
            onClick={() => setInStock(!inStock)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
              inStock ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                inStock ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option value="">Select category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Furniture</option>
            <option>Home Appliances</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Brand Name
          </label>
          <select
            {...register("brand")}
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option value="">Select brand</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Sony</option>
            <option>LG</option>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Product Status
          </label>
          <select
            {...register("status", { required: true })}
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option>Available</option>
            <option>Out of Stock</option>
            <option>Coming Soon</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Quantity
          </label>
          <input
            type="number"
            {...register("quantity", { required: true })}
            placeholder="Enter quantity"
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Color</label>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              {...register("color")}
              placeholder="e.g. Black"
              className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <input
              type="color"
              {...register("colorPicker")}
              className="w-6 h-6 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            SKU (Unique ID)
          </label>
          <input
            type="text"
            {...register("sku", { required: true })}
            placeholder="Enter unique SKU (e.g. PROD001)"
            className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-lg transition mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
