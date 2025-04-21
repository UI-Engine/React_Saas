// Spinner.tsx
import React from "react";

type SpinnerProps = {
  type?: "circle" | "dots" | "grow" | "dots-alternate";
  color?: string; // Tailwind color class, e.g., 'text-blue-500'
  size?: "sm" | "md" | "lg" | number; // Tailwind size or custom pixel value
  className?: string;
};

const sizeMap: Record<string, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const Spinner: React.FC<SpinnerProps> = ({
  type = "circle",
  color = "text-blue-500",
  size = "md",
  className = "",
}) => {
  const sizeClass =
    typeof size === "number" ? "" : sizeMap[size] || sizeMap["md"];
  const customSizeStyle =
    typeof size === "number" ? { width: size, height: size } : {};
  const colorClass =
    color === "blue"
      ? "bg-blue-500"
      : color === "green"
      ? "bg-green-500"
      : "bg-gray-500";

  const circleColorClass =
    color === "blue"
      ? "text-blue-500"
      : color === "green"
      ? "text-green-500"
      : "text-black-500";

  if (type === "dots") {
    return (
      <div className={`flex space-x-2 ${className}`} style={customSizeStyle}>
        <div
          className={`w-3 h-3 rounded-full ${colorClass} animate-bounce [animation-delay:-0.6s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${colorClass} animate-bounce [animation-delay:-0.4s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${colorClass} animate-bounce [animation-delay:-0.2s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${colorClass} animate-bounce `}
        ></div>
      </div>
    );
  }

  if (type === "dots-alternate") {
    return (
      <div className={`flex space-x-2 ${className}`} style={customSizeStyle}>
        <div
          className={`w-3 h-3 rounded-full ${`bg-red-400`} animate-bounce [animation-delay:-0.6s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${"bg-green-400"} animate-bounce [animation-delay:-0.4s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${`bg-blue-400`} animate-bounce [animation-delay:-0.2s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${`bg-yellow-300`} animate-bounce `}
        ></div>
      </div>
    );
  }

  if (type === "grow") {
    return (
      <div
        className={`rounded-full bg-current opacity-75 animate-ping ${circleColorClass} ${sizeClass} ${className}`}
        style={customSizeStyle}
      />
    );
  }

  // Default: circle spinner
  return (
    <div
      className={`border-2 border-current border-t-transparent rounded-full animate-spin ${circleColorClass} ${sizeClass} ${className}`}
      style={customSizeStyle}
    />
  );
};

export default Spinner;
