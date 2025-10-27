import React from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages === 1) return null;

  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border text-sm font-medium transition 
          ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-blue-100 text-gray-700 border-gray-300"
          }`}
      >
        Prev
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 rounded-md border text-sm font-medium transition 
            ${
              currentPage === num
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-blue-100 border-gray-300"
            }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border text-sm font-medium transition 
          ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-blue-100 text-gray-700 border-gray-300"
          }`}
      >
        Next
      </button>
    </div>
  );
}
