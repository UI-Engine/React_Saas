// src/ThemeSwitcher.tsx
import React from "react";
import { useTheme, themes } from "./Theme/ThemeContext";
import { Button } from "flowbite-react";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <Button
          key={t}
          onClick={() => setTheme(t)}
          //   className={`px-3 py-1 rounded ${
          //     theme === t ? "btn-primary" : "btn-secondary"
          //   }`}
        >
          {t.replace("theme-", "").toUpperCase()}
        </Button>
      ))}
    </div>
  );
};
