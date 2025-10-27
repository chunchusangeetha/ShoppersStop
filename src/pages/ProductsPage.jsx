import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProductList from "../components/products/ProductList";

export default function ProductsPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen ">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold">All Products</h1>

        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-sm">
            {user?.displayName || user?.email}
          </span>

          <Link
            to="/add-product"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
          >
            + Add Product
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-4">
        <ProductList />
      </main>
    </div>
  );
}
