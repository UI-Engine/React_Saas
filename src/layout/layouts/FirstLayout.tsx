import { Drawer, DrawerHeader } from "flowbite-react";
import React, { useState, useEffect, useRef } from "react";
import useBreakpoints from "../../hooks/ui/useBreakpoints";

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

  const sidebarClasses = [
    "layout-sidebar",
    !isDrawerOpen && "sidebar-closed",
    isCollapsed && "sidebar-collapsed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex min-h-screen">
      {ScreenLargerThanMd ? (
        <aside ref={sidebarRef} className={sidebarClasses}>
          <div className="">Logo / Nav Links</div>
        </aside>
      ) : (
        <Drawer
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
        >
          <DrawerHeader title="MENU" titleIcon={() => <></>}>
            ps
          </DrawerHeader>
        </Drawer>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[5dvh] shadow flex items-center px-4 border-b-1">
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

          {/* Desktop: Collapse toggle */}
          <button
            onClick={() => setIsCollapsed((c) => !c)}
            className="sidebar-collapse ml-2"
          >
            {/* chevron icon; rotates when collapsed */}
            <svg
              className={`w-6 h-6 transform transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Header title / other controls */}
          <h1 className="ml-4 text-xl font-semibold">My SaaS App</h1>
        </header>

        {/* Content */}
        <main className="h-[90dvh] overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default FirstLayout;
