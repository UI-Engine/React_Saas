import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import React, { useState, useEffect, useRef } from "react";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import SidebarComponent from "../sidebar";
import SecureLocalStorage from "../../Modules/SecureLs";
import Icon from "../../components/Icons";
import { LucideListCollapse, LucideMenu } from "lucide-react";
import AppLogo from "../../../public/assets/AppLogo.png";

const FirstLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isMd, isSm, isXs } = useBreakpoints();

  const ScreenLargerThanMd = !(isMd || isSm || isXs);

  useEffect(() => {
    if (ScreenLargerThanMd) {
      setIsCollapsed(true);
    } else {
      setIsDrawerOpen(false);
    }
  }, [ScreenLargerThanMd]); // empty deps → runs once on mount and cleanup on unmount

  useEffect(() => {
    try {
      let collapsed = SecureLocalStorage.get("isSidebarCollapsed");
      setIsCollapsed(collapsed);
    } catch (e) {
      setIsCollapsed(false);
    }
  }, []);

  useEffect(() => {
    SecureLocalStorage.set("isSidebarCollapsed", isCollapsed);
  }, [isCollapsed]);

  const sidebarClasses = [
    "layout-sidebar",
    !isDrawerOpen && "sidebar-closed",
    isCollapsed && "sidebar-collapsed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {ScreenLargerThanMd ? (
        <aside ref={sidebarRef} className={sidebarClasses}>
          <div className="sidebar-header">
            <>
              <LucideMenu
                onClick={() => setIsCollapsed((c) => !c)}
                size={32}
                className="text-base pointer"
                strokeWidth={1}
              />
              <span className="sidebar-desktop-header">
                {isCollapsed ? "" : <img src={AppLogo} />}
              </span>
            </>
          </div>
          <SidebarComponent isCollapsed={isCollapsed} />
        </aside>
      ) : (
        <Drawer
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
          className="app-drawer"
        >
          <DrawerHeader
            className="app-drawer-header"
            title=""
            titleIcon={() => <img src={AppLogo} />}
          />
          <DrawerItems>
            <SidebarComponent isCollapsed={false} />
          </DrawerItems>
        </Drawer>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[5dvh] flex items-center px-4 border-b-1 border-b-gray-200">
          {/* Mobile: Drawer toggle */}
          <button
            onClick={() => setIsDrawerOpen((open) => !open)}
            className="sidebar-toggle"
          >
            {/* hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        {/* Content */}
        <main className="h-[95dvh] overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default FirstLayout;
