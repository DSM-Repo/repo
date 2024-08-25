import { iconType } from "../../../atoms";
import { HTMLAttributes } from "react";

export type urlType = {
  url: string;
  title: string;
};

export interface IProp extends HTMLAttributes<HTMLDivElement> {
  urls?: Array<urlType>;
  deepSelected?: string;
  title: string;
  selections?: string[];
  action?: (data: string) => void;
  icon: iconType;
  selected?: boolean;
}
