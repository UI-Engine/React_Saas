import React, { useEffect, useRef } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownDivider,
  DropdownHeader,
  Tooltip,
} from "flowbite-react";
import logoSrc from "../../../public/assets/AppLogo.png";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { useTheme } from "../../Theme/ThemeContext";
import { LucideMoon, LucideSun } from "lucide-react";
import Icon from "../../components/Icons";
import { FaGithub } from "react-icons/fa";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import { ThemeSwitcher } from "../../ThemeSwitcher";

interface HeaderProps {
  showAppLogo: boolean;
}

const Header: React.FC<HeaderProps> = ({ showAppLogo }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { isXs } = useBreakpoints();

  const ScreenLargerThanXs = !isXs;

  const { theme, toggleDarkLightTheme } = useTheme();

  // Ctrl+K to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleDropdownClick = (action: string) => {
    switch (action) {
      case "theme":
        toggleDarkLightTheme();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-4 h-full gap-1">
        {/* Left toolbar */}
        <div className="left-toolbar flex items-center space-x-2 overflow-hidden h-full">
          {showAppLogo && (
            <img src={logoSrc} alt="Logo" className="app-logo mr-3" />
          )}
          {ScreenLargerThanXs ? (
            <input
              ref={searchRef}
              type="text"
              placeholder="Search… (Ctrl + K)"
              className="search-input max-w-md px-4 py-2 border  rounded-md focus:outline-none"
            />
          ) : (
            <Icon name="Search" />
          )}
        </div>

        {/* Right toolbar */}
        <div className="right-toolbar">
          <ThemeSwitcher />
          <Tooltip content="View on GitHub" placement="bottom" style="light">
            <a
              href="https://github.com/UI-Engine/React_Saas"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer toolbar-icon"
            >
              <FaGithub size={24} />
            </a>
          </Tooltip>
          <Dropdown
            label={
              <Icon name="CircleUserRound" className="pointer" size={28} />
            }
            arrowIcon={false}
            inline
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@UiEngine.com
              </span>
            </DropdownHeader>
            <DropdownItem icon={HiViewGrid}>Dashboard</DropdownItem>
            <DropdownItem icon={HiCog}>Settings</DropdownItem>
            <DropdownItem
              icon={theme === "theme-light" ? LucideMoon : LucideSun}
              onClick={() => handleDropdownClick("theme")}
            >
              {theme === "theme-light" ? "Dark Mode" : "Light Mode"}
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
