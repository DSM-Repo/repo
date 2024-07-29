import { HTMLAttributes } from "react";

type titleType = {
  title: string,
  subTitle?: string,
};

export interface IProp extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: titleType;
  progress: number;
  type?: "Full" | "NoTitle" | "Simple";
  color?: "Blue" | "Green";
}
