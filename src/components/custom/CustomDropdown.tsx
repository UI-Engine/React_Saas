import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Check, AlertCircle, Info } from "lucide-react";

export interface CustomDropdownProps {
  trigger?: React.ReactNode;
  items: Array<{
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    analytics?: {
      event: string;
      properties?: Record<string, any>;
    };
  }>;
  onSelect?: (value: string) => void;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  label?: string;
  variant?: "default" | "info" | "success" | "error";
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  trigger = (
    <Button variant="outline" size="sm">
      Select <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  ),
  items,
  onSelect,
  className,
  analytics,
  label,
  variant = "default",
}) => {
  const handleSelect = (item: any) => {
    if (item.disabled) return;
    if (item.analytics) {
      try {
        console.log(
          "Dropdown Item Analytics:",
          item.analytics.event,
          item.analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
    if (analytics) {
      try {
        console.log(
          "Dropdown Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
    if (onSelect) onSelect(item.value);
  };

  const getVariantIcon = () => {
    switch (variant) {
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "success":
        return <Check className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={cn("min-w-[180px] shadow-lg", className)}>
        {label && (
          <DropdownMenuLabel className="flex items-center gap-2">
            {getVariantIcon()}
            {label}
          </DropdownMenuLabel>
        )}
        {label && <DropdownMenuSeparator />}
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleSelect(item)}
            disabled={item.disabled}
            className={cn(item.disabled && "opacity-50 cursor-not-allowed")}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { CustomDropdown };
