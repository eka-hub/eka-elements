import { useEffect, useState } from "react";

const darkAttr = "dark-mode";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.hasAttribute("dark-mode"));
  }, []);

  useEffect(() => {
    document.body[isDarkMode ? "setAttribute" : "removeAttribute"](darkAttr, "");
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const setMode = (mode) => {
    setIsDarkMode(mode === "dark");
  };

  return { dark: isDarkMode, toggleMode, setMode };
};

export default useDarkMode;
