import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface CustomSkeletonsProps {
  count?: number;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  variant?: "default" | "circle" | "text";
}

const CustomSkeletons: React.FC<CustomSkeletonsProps> = ({
  count = 1,
  className,
  analytics,
  variant = "default",
}) => {
  React.useEffect(() => {
    if (analytics) {
      try {
        console.log(
          "Skeletons Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  }, [analytics]);

  const getVariantClass = () => {
    switch (variant) {
      case "circle":
        return "rounded-full w-12 h-12";
      case "text":
        return "h-4 w-32 rounded";
      default:
        return "h-6 w-full rounded";
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className={getVariantClass()} />
      ))}
    </div>
  );
};

export { CustomSkeletons };
