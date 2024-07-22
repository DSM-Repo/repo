import { HTMLAttributes } from "react";

type TTitle = {
  title: string;
  subTitle?: string;
};

export interface IProp extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: TTitle;
  progress: number;
  type?: "Full" | "NoTitle" | "Simple";
  color?: "Blue" | "Green";
}

export const colors = {
  Blue: "bg-[#2492E2]",
  Green: "bg-[#42E224]",
};

export const defaultTitle = {
  title: "진행도",
};
