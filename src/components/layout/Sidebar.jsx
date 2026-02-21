import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-60 h-screen p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:bg-gray-700 rounded px-3 py-2">Home</Link>
        <Link to="/reports" className="hover:bg-gray-700 rounded px-3 py-2">Reports</Link>
        <Link to="/recommendations" className="hover:bg-gray-700 rounded px-3 py-2">Recommendations</Link>
        <Link to="/doctor-connect" className="hover:bg-gray-700 rounded px-3 py-2">Dr. Constant</Link>
      </nav>
    </aside>
  );
}
