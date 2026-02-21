import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold">Lab2Life</h1>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/chat">AI</Link>
        <Link to="/doctor">Doctor</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;