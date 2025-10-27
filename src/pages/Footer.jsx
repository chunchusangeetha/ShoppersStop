import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Shoperstop</h2>
          <p>
            Your one-stop shop for all your grocery and lifestyle needs. Quality
            products delivered fast and fresh.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-600">
                Products
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p>📞 0800 300-353</p>
          <p>📧 support@shoperstop.com</p>
          <p>🏢 123 Market Street, London</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p>Subscribe to get our latest deals and updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Shoperstop. All rights reserved.
      </div>
    </footer>
  );
}
