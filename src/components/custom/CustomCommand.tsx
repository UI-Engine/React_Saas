import React from "react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandSeparator,
  CommandEmpty,
} from "@/components/ui/command";
import { Search, Check, AlertCircle } from "lucide-react";

export interface CustomCommandProps {
  placeholder?: string;
  items: Array<{
    label: string;
    value: string;
    icon?: React.ReactNode;
    group?: string;
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
  emptyText?: string;
}

const CustomCommand: React.FC<CustomCommandProps> = ({
  placeholder = "Type a command...",
  items,
  onSelect,
  className,
  analytics,
  emptyText = "No results found.",
}) => {
  const handleSelect = (value: string) => {
    if (onSelect) onSelect(value);
    if (analytics) {
      try {
        console.log(
          "Command Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  };

  const groups = Array.from(new Set(items.map((item) => item.group || "")));

  return (
    <Command
      className={cn("rounded-lg shadow-lg p-4 w-full max-w-md", className)}
    >
      <CommandInput placeholder={placeholder} className="mb-2" />
      <CommandList>
        {groups.map((group, i) => (
          <React.Fragment key={group || i}>
            {group && <CommandGroup heading={group} />}
            {items
              .filter((item) => (item.group || "") === group)
              .map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  onSelect={() => handleSelect(item.value)}
                  className={cn(
                    item.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </CommandItem>
              ))}
            {i < groups.length - 1 && <CommandSeparator />}
          </React.Fragment>
        ))}
        <CommandEmpty>{emptyText}</CommandEmpty>
      </CommandList>
    </Command>
  );
};

export { CustomCommand };
