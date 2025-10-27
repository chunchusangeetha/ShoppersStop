import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-lg">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
        <span className="flex items-center gap-2 font-medium">
          📞 0800 300-353
        </span>
        <span className="italic font-medium text-center md:text-right">
          Join our newsletter for £10 off!
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-5 py-8 flex justify-center items-center">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-blue-600 tracking-wide drop-shadow-lg text-center">
          Welcome to Shoperstop
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-6 text-center ">
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
          Your one-stop shop for all Furniture, electronics, and lifestyle
          products.
        </p>
      </div>
    </header>
  );
};

export default Header;
