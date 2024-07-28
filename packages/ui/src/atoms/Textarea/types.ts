import { ChangeEvent, HTMLAttributes } from "react";
import { sizeType } from "../../common";

export interface IProp extends HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
  size?: sizeType;
  placeholder: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  rows: number;
}
