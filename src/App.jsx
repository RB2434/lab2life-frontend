
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UploadReport from "./pages/UploadReport";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        {/* Navbar */}
        <nav className="bg-gray-950 border-b border-gray-800 py-4 px-8 flex justify-between items-center"> <div className="flex items-center space-x-2"> <img src="/logo.png" alt="logo" className="h-8 w-8" /> <h1 className="text-xl font-semibold text-orange-500">Lab2Life</h1> </div> <ul className="flex space-x-6 text-gray-300 font-medium items-center"> {/* Scroll links only work on Home page */} <li> <Link to="/" className="hover:text-orange-400"> Home </Link> </li> <li> <a href="/#features" className="hover:text-orange-400"> Features </a> </li> <li> <a href="/#ai" className="hover:text-orange-400"> AI </a> </li> <li> <a href="/#doctor" className="hover:text-orange-400"> Doctors </a> </li> <li> <Link to="/upload" className="hover:text-orange-400"> Summarizer </Link> </li> <li> <Link to="/upload" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg" > Get Started </Link> </li> </ul> </nav>

        {/* Routes */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadReport />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-950 py-4 text-center text-gray-500 text-sm border-t border-gray-800">
          © 2026 Lab2Life | AI Healthcare Platform
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
