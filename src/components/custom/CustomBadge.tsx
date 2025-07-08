import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export interface CustomBadgeProps {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "info"
    | "premium";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  status?: "online" | "offline" | "away" | "busy";
  animated?: boolean;
  pulse?: boolean;
  gradient?: boolean;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

const CustomBadge = React.forwardRef<HTMLDivElement, CustomBadgeProps>(
  (
    {
      variant = "default",
      size = "default",
      children,
      className,
      icon,
      iconPosition = "left",
      status,
      animated = false,
      pulse = false,
      gradient = false,
      analytics,
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      if (analytics) {
        try {
          console.log("Badge Clicked:", analytics.event, analytics.properties);
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }
    };

    const getStatusIcon = () => {
      switch (status) {
        case "online":
          return <div className="w-2 h-2 bg-green-500 rounded-full" />;
        case "offline":
          return <div className="w-2 h-2 bg-gray-400 rounded-full" />;
        case "away":
          return <div className="w-2 h-2 bg-yellow-500 rounded-full" />;
        case "busy":
          return <div className="w-2 h-2 bg-red-500 rounded-full" />;
        default:
          return null;
      }
    };

    const getVariantIcon = () => {
      if (icon) return icon;

      switch (variant) {
        case "success":
          return <CheckCircle className="h-3 w-3" />;
        case "warning":
          return <AlertCircle className="h-3 w-3" />;
        case "info":
          return <Clock className="h-3 w-3" />;
        case "premium":
          return <TrendingUp className="h-3 w-3" />;
        default:
          return null;
      }
    };

    const getVariantClasses = () => {
      const baseClasses =
        "inline-flex items-center gap-1 transition-all duration-200";

      if (gradient) {
        return cn(
          baseClasses,
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
          "shadow-sm hover:shadow-md"
        );
      }

      if (pulse) {
        return cn(baseClasses, "animate-pulse");
      }

      switch (variant) {
        case "success":
          return cn(
            baseClasses,
            "bg-green-100 text-green-800 border-green-200",
            "dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
          );
        case "warning":
          return cn(
            baseClasses,
            "bg-yellow-100 text-yellow-800 border-yellow-200",
            "dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800"
          );
        case "info":
          return cn(
            baseClasses,
            "bg-blue-100 text-blue-800 border-blue-200",
            "dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
          );
        case "premium":
          return cn(
            baseClasses,
            "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
            "shadow-lg hover:shadow-xl"
          );
        default:
          return baseClasses;
      }
    };

    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "px-2 py-0.5 text-xs";
        case "lg":
          return "px-3 py-1 text-sm";
        default:
          return "px-2.5 py-0.5 text-xs";
      }
    };

    return (
      <Badge
        ref={ref}
        variant={
          variant === "success" ||
          variant === "warning" ||
          variant === "info" ||
          variant === "premium"
            ? "default"
            : variant
        }
        className={cn(
          getVariantClasses(),
          getSizeClasses(),
          animated && "hover:scale-105",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {status && (
          <span className="flex items-center gap-1">
            {getStatusIcon()}
            {iconPosition === "left" && getVariantIcon()}
            {children}
            {iconPosition === "right" && getVariantIcon()}
          </span>
        )}
        {!status && (
          <>
            {iconPosition === "left" && getVariantIcon()}
            {children}
            {iconPosition === "right" && getVariantIcon()}
          </>
        )}
      </Badge>
    );
  }
);

CustomBadge.displayName = "CustomBadge";

export { CustomBadge };
