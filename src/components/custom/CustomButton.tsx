import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, Check, AlertCircle } from "lucide-react";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "success"
    | "warning";
  size?: "default" | "sm" | "lg" | "icon";
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  pulse?: boolean;
  gradient?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      loading = false,
      success = false,
      error = false,
      analytics,
      icon,
      iconPosition = "left",
      pulse = false,
      gradient = false,
      children,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || isLoading) return;

      // Analytics tracking
      if (analytics) {
        try {
          // In a real app, you'd use your analytics service here
          console.log(
            "Analytics Event:",
            analytics.event,
            analytics.properties
          );
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }

      // Simulate loading state for async operations
      if (onClick) {
        setIsLoading(true);
        try {
          await onClick(e);
        } finally {
          setIsLoading(false);
        }
      }
    };

    const getVariantClasses = () => {
      const baseClasses = "transition-all duration-200 ease-in-out";

      if (gradient) {
        return cn(
          baseClasses,
          "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
          "text-primary-foreground shadow-lg hover:shadow-xl"
        );
      }

      if (pulse) {
        return cn(baseClasses, "animate-pulse hover:animate-none");
      }

      switch (variant) {
        case "success":
          return cn(
            baseClasses,
            "bg-green-600 hover:bg-green-700 text-white",
            "border-green-600 hover:border-green-700"
          );
        case "warning":
          return cn(
            baseClasses,
            "bg-yellow-600 hover:bg-yellow-700 text-white",
            "border-yellow-600 hover:border-yellow-700"
          );
        default:
          return "";
      }
    };

    const getStateIcon = () => {
      if (loading || isLoading) {
        return <Loader2 className="h-4 w-4 animate-spin" />;
      }
      if (success) {
        return <Check className="h-4 w-4" />;
      }
      if (error) {
        return <AlertCircle className="h-4 w-4" />;
      }
      return icon;
    };

    const isDisabled = disabled || loading || isLoading;

    return (
      <Button
        ref={ref}
        variant={
          variant === "success" || variant === "warning" ? "default" : variant
        }
        size={size}
        className={cn(
          getVariantClasses(),
          "relative overflow-hidden",
          className
        )}
        onClick={handleClick}
        disabled={isDisabled}
        {...props}
      >
        {/* Ripple effect */}
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-200" />

        {/* Content */}
        <span className="relative flex items-center gap-2">
          {iconPosition === "left" && getStateIcon()}
          {children}
          {iconPosition === "right" && getStateIcon()}
        </span>
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
