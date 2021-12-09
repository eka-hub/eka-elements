import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          setIsDarkMode(document.body.hasAttribute("dark-mode"));
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
    });
  }, []);

  const toggleMode = () => {
    document.body.toggleAttribute("dark-mode");
  };

  const setMode = (mode) => {
    document.body[mode === "dark" ? "setAttribute" : "removeAttribute"]("dark-mode", "");
  };

  return { dark: isDarkMode, toggleMode, setMode };
};
