import { IStudent } from "@configs/util";
import { HTMLAttributes } from "react";

export interface IProp extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  type: "student" | "teacher" | "free";
  user?: IStudent | { name: string };
  progress?: Number;
  children: React.ReactElement | React.ReactElement[];
}
