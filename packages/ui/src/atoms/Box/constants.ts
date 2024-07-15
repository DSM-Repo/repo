import { HTMLAttributes } from "react";

type TColor = "dark" | "light";

type TRound = {
  tr?: string | number;
  tl?: string | number;
  br?: string | number;
  bl?: string | number;
};

type TSize = {
  width: string;
  height: string;
  padding: string;
};

export interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  color?: TColor;
  size?: TSize;
  round?: TRound;
}

export const DRound: TRound = {
  tr: "5px",
  tl: "5px",
  br: "5px",
  bl: "5px",
};

export const DSize: TSize = {
  width: "100%",
  height: "100%",
  padding: "10px",
};

export const colors = {
  dark: "bg-[#222222]",
  light: "bg-[#2E2E2E]",
};
