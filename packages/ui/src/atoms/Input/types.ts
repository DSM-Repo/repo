import { ChangeEvent, HTMLAttributes } from "react";

export type TSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";

export interface IProp extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  size?: TSize;
  placeholder: string;
  password?: boolean;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  form?: string;
  name?: string;
}
