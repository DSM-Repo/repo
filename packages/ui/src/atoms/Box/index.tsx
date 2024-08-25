import { colorBox, colorType } from "../../common";
import { HTMLAttributes, LegacyRef, MutableRefObject, forwardRef } from "react";

type roundType = {
  tr?: string | number;
  tl?: string | number;
  br?: string | number;
  bl?: string | number;
  all?: string | number;
};

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[] | string;
  color?: colorType;
  width?: string;
  height?: string;
  padding?: string;
  round?: roundType;
}

export const Box = forwardRef(
  (
    {
      children,
      color = "dark",
      width = "fit-content",
      height = "fit-content",
      padding = "10px",
      round = { all: "5px" },
      ...props
    }: IProp,
    ref?: any
  ) => {
    const borderRadius =
      round.all || `${round.tl}px ${round.tr}px ${round.br}px ${round.bl}px`;

    return (
      <div
        {...props}
        className={`col-flex gap-10 ${colorBox[color]} ${props.className}`}
        style={{
          width,
          height,
          padding,
          borderRadius,
          ...props.style
        }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
