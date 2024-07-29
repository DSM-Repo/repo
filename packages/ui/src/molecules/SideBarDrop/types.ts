import { HTMLAttributes } from "react";
import { iconType } from "../../atoms";

export type urlType = {
  url: string,
  title: string,
};

export interface IProp extends HTMLAttributes<HTMLDivElement> {
  urls: Array<urlType>;
  title: string;
  icon: iconType;
  selected?: boolean;
}
