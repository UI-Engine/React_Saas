import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export interface CustomTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  side?: "top" | "right" | "bottom" | "left";
  variant?: "default" | "info";
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  content,
  children,
  className,
  analytics,
  side = "top",
  variant = "default",
}) => {
  const handleOpenChange = (open: boolean) => {
    if (open && analytics) {
      try {
        console.log(
          "Tooltip Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          className={cn(
            "rounded-lg shadow-lg px-3 py-2 text-sm",
            variant === "info" && "bg-blue-50 text-blue-800",
            className
          )}
        >
          {variant === "info" && <Info className="h-4 w-4 mr-2 inline" />}{" "}
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { CustomTooltip };
