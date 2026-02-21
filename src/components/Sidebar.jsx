import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-900 shadow-lg">
      <h2 className="p-5 font-bold text-xl">Lab2Life</h2>

      <nav className="flex flex-col gap-4 p-5">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload Report</Link>
        <Link to="/chat">AI Assistant</Link>
        <Link to="/doctor">Doctor Connect</Link>
      </nav>
    </div>
  );
};

export default Sidebar;