import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-14 h-14 rounded-full flex items-center justify-center
                 bg-gray-200 dark:bg-gray-800
                 transition-colors duration-500
                 hover:scale-110"
    >
      {/* Sun */}
      <Sun
        className={`absolute w-6 h-6 text-yellow-500 transition-all duration-500
        ${dark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />

      {/* Moon */}
      <Moon
        className={`absolute w-6 h-6 text-indigo-300 transition-all duration-500
        ${dark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
      />
    </button>
  );
}