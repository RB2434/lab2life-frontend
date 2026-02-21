import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600">
          Lab2Life 🧬
        </Link>

        {/* Menu */}
        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/upload" className="hover:text-blue-600">Upload Report</Link>
          <Link to="/doctor" className="hover:text-blue-600">Doctor Connect</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </div>
      </div>
    </nav>
  );
}
