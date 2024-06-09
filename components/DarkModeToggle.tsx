"use client"
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 mt-4 text-lg text-white bg-blue-500 rounded-lg dark:bg-gray-700 dark:text-gray-300"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;