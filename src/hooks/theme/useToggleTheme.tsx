import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    updateThemeClass();
  }, [isDarkTheme]);

  const updateThemeClass = () => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  };

  return { isDarkTheme, toggleTheme };
};
