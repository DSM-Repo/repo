import { colorType } from "../../common";
import { HTMLAttributes } from "react";

export type roundType = {
  tr?: string | number,
  tl?: string | number,
  br?: string | number,
  bl?: string | number,
};

export type sizeType = {
  width: string,
  height: string,
  padding: string,
};

export interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[] | string;
  color?: colorType;
  round?: roundType;
  size?: sizeType;
}
