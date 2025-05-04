// // Icon.tsx
// import React, { lazy, Suspense } from "react";
// import dynamicIconImports from "lucide-react/dynamicIconImports";
// import type { LucideProps } from "lucide-react";

// export type IconName = keyof typeof dynamicIconImports;

// interface IconProps extends Omit<LucideProps, "ref"> {
//   name: IconName;
// }

// const Icon: React.FC<IconProps> = ({
//   name,
//   size = 24,
//   color = "currentColor",
//   strokeWidth = 1, // set your default
//   ...rest
// }) => {
//   const LazyIcon = lazy(dynamicIconImports[name]);
//   return (
//     <Suspense
//       fallback={
//         <span style={{ display: "inline-block", width: size, height: size }} />
//       }
//     >
//       <LazyIcon
//         size={size}
//         color={color}
//         strokeWidth={strokeWidth} // pass it here
//         {...rest}
//       />
//     </Suspense>
//   );
// };

// export default Icon;

// static import
import React from "react";
import type { LucideProps } from "lucide-react";
import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 1,
  ...rest
}) => {
  const LucideIcon = icons[name];
  return (
    <LucideIcon size={size} color={color} strokeWidth={strokeWidth} {...rest} />
  );
};

export default Icon;
