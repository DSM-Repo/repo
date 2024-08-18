import { HTMLAttributes } from "react";
import { sizeType } from "../../common";

export interface IDefaultProp {
  label?: string;
  id?: string;
  error?: boolean;
  disabled?: boolean;
  size?: sizeType;
  placeholder: string;
}

export type inputType = IDefaultProp & HTMLAttributes<HTMLInputElement>;
export type textAreaType = IDefaultProp & HTMLAttributes<HTMLTextAreaElement>;
