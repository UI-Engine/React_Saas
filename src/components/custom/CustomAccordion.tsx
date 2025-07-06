import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

export interface CustomAccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

export interface CustomAccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  status?: "default" | "success" | "warning" | "error";
  icon?: React.ReactNode;
  disabled?: boolean;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

export interface CustomAccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  status?: "default" | "success" | "warning" | "error";
  icon?: React.ReactNode;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

export interface CustomAccordionContentProps {
  children: React.ReactNode;
  className?: string;
  animation?: "slide" | "fade" | "none";
}

const CustomAccordion = React.forwardRef<HTMLDivElement, CustomAccordionProps>(
  (
    {
      type = "single",
      collapsible = true,
      className,
      children,
      analytics,
      ...props
    },
    ref
  ) => {
    const handleValueChange = (value: string | string[]) => {
      if (analytics) {
        try {
          console.log("Accordion Analytics Event:", analytics.event, {
            ...analytics.properties,
            value,
            type,
          });
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }
    };

    return (
      <Accordion
        ref={ref}
        type={type}
        collapsible={collapsible}
        className={cn("w-full", className)}
        onValueChange={handleValueChange}
        {...props}
      >
        {children}
      </Accordion>
    );
  }
);

const CustomAccordionItem = React.forwardRef<
  HTMLDivElement,
  CustomAccordionItemProps
>(
  (
    {
      value,
      className,
      children,
      status = "default",
      icon,
      disabled,
      analytics,
      ...props
    },
    ref
  ) => {
    const getStatusClasses = () => {
      switch (status) {
        case "success":
          return "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20";
        case "warning":
          return "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20";
        case "error":
          return "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20";
        default:
          return "";
      }
    };

    return (
      <AccordionItem
        ref={ref}
        value={value}
        className={cn(
          "border rounded-lg transition-all duration-200",
          getStatusClasses(),
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </AccordionItem>
    );
  }
);

const CustomAccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  CustomAccordionTriggerProps
>(
  (
    { children, className, status = "default", icon, analytics, ...props },
    ref
  ) => {
    const getStatusIcon = () => {
      switch (status) {
        case "success":
          return <CheckCircle className="h-4 w-4 text-green-600" />;
        case "warning":
          return <Clock className="h-4 w-4 text-yellow-600" />;
        case "error":
          return <AlertCircle className="h-4 w-4 text-red-600" />;
        default:
          return icon;
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (analytics) {
        try {
          console.log(
            "Accordion Trigger Analytics Event:",
            analytics.event,
            analytics.properties
          );
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }
    };

    return (
      <AccordionTrigger
        ref={ref}
        className={cn(
          "px-6 py-4 hover:no-underline group",
          "transition-all duration-200 ease-in-out",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <div className="flex items-center gap-3 flex-1">
          {getStatusIcon()}
          <span className="flex-1 text-left font-medium">{children}</span>
        </div>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </AccordionTrigger>
    );
  }
);

const CustomAccordionContent = React.forwardRef<
  HTMLDivElement,
  CustomAccordionContentProps
>(({ children, className, animation = "slide", ...props }, ref) => {
  const getAnimationClasses = () => {
    switch (animation) {
      case "fade":
        return "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";
      case "none":
        return "";
      default:
        return "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-up-0 data-[state=open]:slide-down-0";
    }
  };

  return (
    <AccordionContent
      ref={ref}
      className={cn("px-6 pb-4", getAnimationClasses(), className)}
      {...props}
    >
      {children}
    </AccordionContent>
  );
});

CustomAccordion.displayName = "CustomAccordion";
CustomAccordionItem.displayName = "CustomAccordionItem";
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";
CustomAccordionContent.displayName = "CustomAccordionContent";

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};
