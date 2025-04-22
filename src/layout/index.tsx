import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SecureLocalStorage from "../Modules/SecureLs";
import FirstLayout from "./layouts/FirstLayout";

// Define types for layout options
type LayoutType = "first" | "second" | "third" | "dashboard" | "minimal";

// Define props type for PresentLayout
interface PresentLayoutProps {
  children?: React.ReactNode;
  layoutType: LayoutType;
}

// Main layout switcher component
const PresentLayout: React.FC<PresentLayoutProps> = ({
  children,
  layoutType,
}) => {
  switch (layoutType) {
    case "first":
      return <FirstLayout>{children}</FirstLayout>;
    default:
      return <FirstLayout>{children}</FirstLayout>;
  }
};

// Main Layout component
const Layout: React.FC = () => {
  const [layoutType, setLayoutType] = useState<LayoutType>("first");

  useEffect(() => {
    const savedLayout = SecureLocalStorage.get("layout") as LayoutType;
    if (savedLayout && typeof savedLayout === "string") {
      setLayoutType(savedLayout);
    }
  }, []);

  return (
    <PresentLayout layoutType={layoutType}>
      <Outlet />
    </PresentLayout>
  );
};

export default Layout;
