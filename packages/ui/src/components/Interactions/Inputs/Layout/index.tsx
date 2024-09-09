import { sizeType } from "../../../../size";
import { Box, iconType } from "./Box";
import { Label } from "./Label";

export interface IDefaultProp {
  size: sizeType;
  required?: boolean;
  disabled?: boolean;
  icon?: iconType;
  label?: string;
  height?: number;
}

interface IProp extends IDefaultProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({
  size,
  required,
  icon,
  label,
  children,
  disabled,
  height
}: IProp) => {
  return (
    <Label size={size} label={label} required={required}>
      <Box size={size} icon={icon} disabled={disabled} height={height}>
        {children}
      </Box>
    </Label>
  );
};
