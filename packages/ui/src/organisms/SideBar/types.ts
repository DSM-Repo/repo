import { HTMLAttributes } from "react";

interface IUser {
  profile?: string;
  name: string;
}

export interface IStudent extends IUser {
  type: "student";
  major?: string; // 전공 타입 따로 지정 예정
  grade: number;
  class: number;
  number: number;
  progress: number;
}

export interface ITeacher extends IUser {
  type: "teacher";
}

type TUser = IStudent | ITeacher;

export interface IProp extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  user: TUser;
  children: React.ReactElement | React.ReactElement[];
}
