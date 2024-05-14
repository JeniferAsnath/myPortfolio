"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import React, { useEffect, useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-currentColor bg-slate-500 cursor-pointer rounded-full p-1 "
      onClick={() => setDarkMode(!darkMode)}
    >
      <FiMoon size={24} className="text-white" />
      <div
        className="absolute bg-dark  w-7 h-7 rounded-full shadow-md transform transition-transform  duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <FiSun size={24} className="ml-auto text-yellow-400" />
    </div>
  );
};

export default Theme;
