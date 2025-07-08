import React, { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import AppSidebar from "../sidebar";
import SecureLocalStorage from "../../Modules/SecureLs";
import Header from "../header";

const FirstLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isMd, isSm, isXs } = useBreakpoints();

  const ScreenLargerThanMd = !(isMd || isSm || isXs);

  const shouldShowAppLogo = (): boolean => {
    if (isCollapsed || !ScreenLargerThanMd) return true;
    return false;
  };

  useEffect(() => {
    if (ScreenLargerThanMd) {
      setIsCollapsed(true);
    }
  }, [ScreenLargerThanMd]);

  useEffect(() => {
    try {
      const collapsed = SecureLocalStorage.get("isSidebarCollapsed");
      setIsCollapsed(collapsed);
    } catch (e) {
      setIsCollapsed(false);
    }
  }, []);

  useEffect(() => {
    SecureLocalStorage.set("isSidebarCollapsed", isCollapsed);
  }, [isCollapsed]);

  return (
    <SidebarProvider open={isCollapsed} onOpenChange={setIsCollapsed}>
      <AppSidebar />
      <main className="flex-1 flex flex-col w-[50vw]">
        <header className="h-[7dvh] flex items-center border-b border-border">
          <div className="flex items-center gap-2 px-4 ">
            <SidebarTrigger className="hover:bg-muted" />
            <Header showAppLogo={shouldShowAppLogo()} />
          </div>
        </header>
        <div className="h-[93dvh] w-full overflow-auto">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default FirstLayout;
