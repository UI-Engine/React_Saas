import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import React, { useState, useEffect, useRef } from "react";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import SidebarComponent from "../sidebar";
import SecureLocalStorage from "../../Modules/SecureLs";
import { LucideMenu } from "lucide-react";
import AppLogo from "../../../public/assets/AppLogo.png";
import Header from "../header";

const FirstLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isMd, isSm, isXs } = useBreakpoints();

  const ScreenLargerThanMd = !(isMd || isSm || isXs);

  const shouldShowAppLogo = (): boolean => {
    if (isCollapsed || !ScreenLargerThanMd) return true;
    else return false;
  };

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
                {isCollapsed ? "" : <img src={AppLogo} className="app-logo" />}
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
            titleIcon={() => <img src={AppLogo} className="app-logo" />}
          />
          <DrawerItems>
            <SidebarComponent isCollapsed={false} />
          </DrawerItems>
        </Drawer>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[7dvh] flex-1 flex items-center border-b-1 border-b-gray-200">
          {/* Mobile: Drawer toggle */}
          <LucideMenu
            size={32}
            className="sidebar-toggle"
            strokeWidth={1}
            onClick={() => setIsDrawerOpen((open) => !open)}
          />
          <Header showAppLogo={shouldShowAppLogo()} />
        </header>

        {/* Content */}
        <main className="h-[93dvh] overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default FirstLayout;
