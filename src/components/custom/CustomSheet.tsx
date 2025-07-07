import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { X, Info, CheckCircle, AlertCircle, Menu } from "lucide-react";

export interface CustomSheetProps {
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
  side?: "left" | "right" | "top" | "bottom";
  showClose?: boolean;
}

const CustomSheet: React.FC<CustomSheetProps> = ({
  trigger = <Menu className="h-5 w-5" />,
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  analytics,
  variant = "default",
  side = "right",
  showClose = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const controlled = open !== undefined;

  const handleOpenChange = (val: boolean) => {
    if (analytics) {
      try {
        console.log(
          "Sheet Analytics Event:",
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

  return (
    <Sheet open={controlled ? open : isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        className={cn(
          "rounded-l-2xl shadow-lg transition-all duration-300",
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
      </SheetContent>
    </Sheet>
  );
};

export { CustomSheet };
