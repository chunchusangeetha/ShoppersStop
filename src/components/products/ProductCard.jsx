export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.brand}</p>
      <p className="text-sm text-gray-800">₹{product.price.toLocaleString()}</p>
      <p className="text-sm">
        Status:{" "}
        <span
          className={`${
            product.status === "Available"
              ? "text-green-600"
              : product.status === "Out of Stock"
              ? "text-red-600"
              : "text-yellow-600"
          } font-medium`}
        >
          {product.status}
        </span>
      </p>
      <p className="text-sm mt-1">⭐ {product.rating}</p>
    </div>
  );
}
