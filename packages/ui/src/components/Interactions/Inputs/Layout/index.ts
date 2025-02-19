import { sizeType } from "../../../../size";

export * from "./Box";
export * from "./Label";

export interface IDefaultProp {
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  size: sizeType;
  error?: string;
  id?: string;
}
