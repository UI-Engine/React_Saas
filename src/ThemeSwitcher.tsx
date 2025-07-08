import React from "react";
import { useTheme } from "./Theme/ThemeContext";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleDarkLightTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      {theme === "dark" ? (
        <Sun className="" onClick={() => toggleDarkLightTheme()} />
      ) : (
        <Moon className="" onClick={() => toggleDarkLightTheme()} />
      )}
    </div>
  );
};
