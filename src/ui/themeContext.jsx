import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [isDark, setDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "true" ? theme === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
