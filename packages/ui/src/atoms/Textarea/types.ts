import { HTMLAttributes } from "react";

export type TSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";

export interface IProp extends HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
  size?: TSize;
  placeholder: string;
  label?: string;
  value?: string;
  rows: number;
}
