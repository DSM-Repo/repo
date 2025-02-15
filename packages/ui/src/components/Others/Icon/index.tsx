import { HTMLAttributes } from "react";
import * as _ from "./icons";

export type iconType = _.CommunicationType | _.EditType | _.FileType | _.InterfaceType | _.MenuType | _.NavigationType | _.SystemsType | _.UserType | _.WarningType;

interface IProp extends HTMLAttributes<SVGSVGElement> {
  name: iconType;
  rotate?: "up" | "down" | "left" | "right";
  visible?: boolean;
  color?: string;
  size?: number;
  disabled?: boolean;
}

const rotateTable = {
  up: "0",
  left: "-90deg",
  right: "90deg",
  down: "180deg"
};

export const Icon = ({ name, visible, rotate = "up", color = "white", size = 24, disabled, ...props }: IProp) => {
  const SelectedIcon = _[name];

  if (visible === undefined || visible === true) {
    return (
      <SelectedIcon
        {...props}
        onClick={(e) => !disabled && props.onClick && props.onClick(e)}
        style={{ transform: `rotate(${rotateTable[rotate]})` }}
        className={`flex-shrink-0 transition-all duration-150 ${props.className} ${disabled ? "cursor-[not-allowed_!important]" : ""}`}
        fill={!disabled ? color : "#777777"}
        width={size}
        height={size}
      />
    );
  }
};
