import { Alert as FlowBiteAlert } from "flowbite-react";

type AlertProps = {
  color?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
  onDismiss?: () => void;
  rounded?: boolean;
  text: string;
  additionalContent?: React.ReactNode;
};
export const Alert: React.FC<AlertProps> = ({
  color,
  icon,
  onDismiss,
  rounded = false,
  text,
  additionalContent,
}) => {
  return (
    <FlowBiteAlert
      additionalContent={additionalContent}
      color={color}
      icon={icon}
      onDismiss={onDismiss}
      rounded={rounded}
    >
      <p className="text-start text-[14px]">{text}</p>
    </FlowBiteAlert>
  );
};
