import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  X,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  Bell,
} from "lucide-react";

export interface CustomAlertProps {
  variant?: "default" | "destructive" | "success" | "warning" | "info";
  title?: string;
  children: React.ReactNode;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
  };
  icon?: React.ReactNode;
  autoDismiss?: number; // milliseconds
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

const CustomAlert = React.forwardRef<HTMLDivElement, CustomAlertProps>(
  (
    {
      variant = "default",
      title,
      children,
      className,
      dismissible = false,
      onDismiss,
      action,
      icon,
      autoDismiss,
      analytics,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    React.useEffect(() => {
      if (autoDismiss && isVisible) {
        const timer = setTimeout(() => {
          handleDismiss();
        }, autoDismiss);

        return () => clearTimeout(timer);
      }
    }, [autoDismiss, isVisible]);

    const handleDismiss = () => {
      setIsVisible(false);
      if (onDismiss) {
        onDismiss();
      }
      if (analytics) {
        try {
          console.log(
            "Alert Dismissed:",
            analytics.event,
            analytics.properties
          );
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }
    };

    const handleActionClick = () => {
      if (action) {
        action.onClick();
        if (analytics) {
          try {
            console.log("Alert Action Clicked:", analytics.event, {
              ...analytics.properties,
              action: action.label,
            });
          } catch (error) {
            console.error("Analytics error:", error);
          }
        }
      }
    };

    const getVariantIcon = () => {
      if (icon) return icon;

      switch (variant) {
        case "success":
          return <CheckCircle className="h-4 w-4" />;
        case "warning":
          return <AlertTriangle className="h-4 w-4" />;
        case "destructive":
          return <AlertCircle className="h-4 w-4" />;
        case "info":
          return <Info className="h-4 w-4" />;
        default:
          return <Bell className="h-4 w-4" />;
      }
    };

    const getVariantClasses = () => {
      switch (variant) {
        case "success":
          return "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/20 dark:text-green-400";
        case "warning":
          return "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-400";
        case "destructive":
          return "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400";
        case "info":
          return "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400";
        default:
          return "";
      }
    };

    if (!isVisible) return null;

    return (
      <Alert
        ref={ref}
        variant={
          variant === "success" || variant === "warning" || variant === "info"
            ? "default"
            : variant
        }
        className={cn(
          "relative transition-all duration-200",
          getVariantClasses(),
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {getVariantIcon()}
          <div className="flex-1">
            {title && <AlertTitle>{title}</AlertTitle>}
            <AlertDescription>{children}</AlertDescription>
            {action && (
              <div className="mt-3">
                <Button
                  size="sm"
                  variant={action.variant || "outline"}
                  onClick={handleActionClick}
                >
                  {action.label}
                </Button>
              </div>
            )}
          </div>
          {dismissible && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 opacity-70 hover:opacity-100"
              onClick={handleDismiss}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Dismiss</span>
            </Button>
          )}
        </div>
      </Alert>
    );
  }
);

CustomAlert.displayName = "CustomAlert";

export { CustomAlert };
