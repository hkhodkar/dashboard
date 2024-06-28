import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = "dark";
    const currentMode = localStorage.getItem("theme");

    if (currentMode === darkModeClass) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-mode", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

    if (!isDarkMode) {
      document.documentElement.setAttribute("data-mode", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-mode");
      localStorage.removeItem("theme");
    }
  };

  const classes = `{
    ${className},
    "flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-gray-800 text-yellow-500 dark:text-gray-200 focus:outline-none transition-transform duration-300 ease-in-out")
  }`;

  return (
    <button onClick={toggleDarkMode} className={classes}>
      {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
};

export default ThemeSwitcher;
