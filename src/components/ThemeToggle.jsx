import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;