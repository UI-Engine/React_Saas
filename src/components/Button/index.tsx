import { Button as FlowbiteButton } from "flowbite-react";
import type {
  ButtonProps,
  ButtonProps as FlowbiteButtonProps,
} from "flowbite-react";

export const Button: React.FC<FlowbiteButtonProps | ButtonProps> = ({
  children,
  className,
  ...rest
}) => (
  <FlowbiteButton className={`${className ?? ""} custom-btn`} {...rest}>
    {children}
  </FlowbiteButton>
);
