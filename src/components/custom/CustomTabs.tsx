import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface CustomTabsProps {
  tabs: Array<{
    value: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
    analytics?: {
      event: string;
      properties?: Record<string, any>;
    };
  }>;
  defaultValue?: string;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "underline" | "pill";
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  defaultValue,
  className,
  analytics,
  orientation = "horizontal",
  variant = "default",
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const tab = tabs.find((t) => t.value === value);
    if (tab && tab.analytics) {
      try {
        console.log(
          "Tab Analytics Event:",
          tab.analytics.event,
          tab.analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
    if (analytics) {
      try {
        console.log(
          "Tabs Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "underline":
        return "border-b";
      case "pill":
        return "rounded-full bg-muted";
      default:
        return "";
    }
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      orientation={orientation}
      className={cn(getVariantClass(), className)}
    >
      <TabsList
        className={cn(orientation === "vertical" ? "flex-col h-full" : "")}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export { CustomTabs };
