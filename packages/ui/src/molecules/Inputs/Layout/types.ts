import { HTMLAttributes, ReactElement } from "react";
import { sizeType } from "../../../common";

type rotationType = {
  from: number;
  to: number;
  value: boolean;
};

export interface IProp extends HTMLAttributes<HTMLLabelElement> {
  size: sizeType;
  error?: boolean;
  disabled?: boolean;
  children: ReactElement | ReactElement[];
  icon?: string;
  onIconClick?: () => void;
  iconRotation?: rotationType;
  label?: string;
  iconColor?: string;
  cursor?: "default" | "text" | "pointer" | "banned";
}
