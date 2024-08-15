import { useMyQuery } from "@configs/api";
import { IGetMajors } from "./types";
export * from "./types";

export const major = () => useMyQuery<IGetMajors>("major", "");
