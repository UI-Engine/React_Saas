import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import { Check, AlertCircle, Info } from "lucide-react";

export interface CustomContextMenuProps {
  trigger: React.ReactNode;
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
}

const CustomContextMenu: React.FC<CustomContextMenuProps> = ({
  trigger,
  items,
  onSelect,
  className,
  analytics,
  label,
}) => {
  const handleSelect = (item: any) => {
    if (item.disabled) return;
    if (item.analytics) {
      try {
        console.log(
          "ContextMenu Item Analytics:",
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
          "ContextMenu Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
    if (onSelect) onSelect(item.value);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{trigger}</ContextMenuTrigger>
      <ContextMenuContent className={cn("min-w-[180px] shadow-lg", className)}>
        {label && <ContextMenuLabel>{label}</ContextMenuLabel>}
        {label && <ContextMenuSeparator />}
        {items.map((item) => (
          <ContextMenuItem
            key={item.value}
            onClick={() => handleSelect(item)}
            disabled={item.disabled}
            className={cn(item.disabled && "opacity-50 cursor-not-allowed")}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export { CustomContextMenu };
