import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { X, Menu, Info, CheckCircle, AlertCircle } from "lucide-react";

export interface CustomDrawerProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  variant?: "default" | "info" | "success" | "error";
  size?: "sm" | "md" | "lg";
  showClose?: boolean;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  trigger = <Menu className="h-5 w-5" />,
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  analytics,
  variant = "default",
  size = "md",
  showClose = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const controlled = open !== undefined;

  const handleOpenChange = (val: boolean) => {
    if (analytics) {
      try {
        console.log(
          "Drawer Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
    if (onOpenChange) onOpenChange(val);
    if (!controlled) setIsOpen(val);
  };

  const getVariantIcon = () => {
    switch (variant) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "max-w-xs";
      case "lg":
        return "max-w-2xl";
      default:
        return "max-w-lg";
    }
  };

  return (
    <Drawer open={controlled ? open : isOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent
        className={cn(
          "rounded-t-2xl shadow-lg transition-all duration-300",
          getSizeClass(),
          className
        )}
      >
        <div className="flex items-center justify-between px-6 pt-4 pb-2 border-b">
          <div className="flex items-center gap-2">
            {getVariantIcon()}
            {title && <span className="font-semibold text-lg">{title}</span>}
          </div>
          {showClose && (
            <button
              onClick={() => handleOpenChange(false)}
              className="p-1 rounded hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {description && (
          <div className="px-6 pt-2 pb-1 text-muted-foreground text-sm">
            {description}
          </div>
        )}
        <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export { CustomDrawer };
