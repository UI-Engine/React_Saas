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
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "theme-light",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeName>(
    () => (SecureLocalStorage.get("theme") as ThemeName) || "theme-light"
  );

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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
