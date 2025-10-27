import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import productsData from "../../data/products.json";

export default function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("products")) || [];
    const merged = [...productsData, ...local];
    setAllProducts(merged);
    setFiltered(merged);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredList = allProducts.filter((p) =>
      p.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredList);
    setCurrentPage(1);
  };

  const handleFilter = (filters) => {
    let updated = [...allProducts];
    if (filters.category !== "All") {
      updated = updated.filter((p) => p.category === filters.category);
    }
    if (filters.status !== "All") {
      updated = updated.filter((p) => p.status === filters.status);
    }
    if (filters.sort === "high") {
      updated.sort((a, b) => b.rating - a.rating);
    }
    if (filters.sort === "low") {
      updated.sort((a, b) => a.rating - b.rating);
    }
    setFiltered(updated);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        />
        <Filters onFilter={handleFilter} />
      </div>

      {currentItems.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((product) => (
            <ProductCard key={product.sku || product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}

      <Pagination
        totalItems={filtered.length}
        itemsPerPage={12}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
