import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (darkMode) setTheme("dark");
    else setTheme("light");
  }, [darkMode]);

  return [darkMode, setDarkMode, theme];
}
