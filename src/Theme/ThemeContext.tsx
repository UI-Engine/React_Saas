// src/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import SecureLocalStorage from "../Modules/SecureLs";

export type ThemeName = "theme-light" | "theme-dark" | "theme-custom";
export const themes: ThemeName[] = ["theme-light", "theme-dark"];

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  toggleDarkLightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "theme-light",
  setTheme: () => {},
  toggleDarkLightTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeName>(
    () => (SecureLocalStorage.get("theme") as ThemeName) || "theme-light"
  );

  const toggleDarkLightTheme = () => {
    if (theme === "theme-light") setTheme("theme-dark");
    else setTheme("theme-light");
  };

  useEffect(() => {
    const root = document.documentElement;
    // Remove old theme classes
    themes.forEach((t) => root.classList.remove(t));
    // Apply new theme class
    root.classList.add(theme);
    // Persist choice
    SecureLocalStorage.set("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleDarkLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
