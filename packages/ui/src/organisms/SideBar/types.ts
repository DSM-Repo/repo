import { IStudent } from "@configs/default";
import { HTMLAttributes } from "react";

export interface IProp extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  type: "student" | "teacher";
  user: IStudent;
  progress?: Number;
  children: React.ReactElement | React.ReactElement[];
}
