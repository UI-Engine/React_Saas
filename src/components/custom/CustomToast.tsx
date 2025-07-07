import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export interface CustomToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "error" | "info";
  duration?: number;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
}

const CustomToast: React.FC<CustomToastProps> = ({
  open,
  onOpenChange,
  title,
  description,
  variant = "default",
  duration = 4000,
  className,
  analytics,
  action,
  dismissible = true,
}) => {
  const [visible, setVisible] = useState(open ?? true);

  React.useEffect(() => {
    if (open !== undefined) setVisible(open);
  }, [open]);

  React.useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onOpenChange) onOpenChange(false);
        if (analytics) {
          try {
            console.log(
              "Toast Dismissed:",
              analytics.event,
              analytics.properties
            );
          } catch (error) {
            console.error("Analytics error:", error);
          }
        }
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onOpenChange, analytics]);

  if (!visible) return null;

  const getVariantIcon = () => {
    switch (variant) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "error":
        return "bg-red-50 border-red-200 text-red-800";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800";
      default:
        return "bg-background border-muted text-foreground";
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[100] border rounded-lg shadow-lg p-4 flex items-start gap-3 min-w-[280px] max-w-xs animate-in fade-in-0 slide-in-from-bottom-4",
        getVariantClass(),
        className
      )}
    >
      {getVariantIcon()}
      <div className="flex-1">
        {title && <div className="font-semibold text-base mb-1">{title}</div>}
        {description && (
          <div className="text-sm text-muted-foreground">{description}</div>
        )}
        {action && (
          <button
            className="mt-2 text-primary underline text-sm"
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
      {dismissible && (
        <button
          className="ml-2 p-1 rounded hover:bg-muted"
          onClick={() => {
            setVisible(false);
            if (onOpenChange) onOpenChange(false);
          }}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export { CustomToast };
