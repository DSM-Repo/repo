import { useMyQuery } from "@configs/util";
import { IMajors } from "./types";

export const major = () => useMyQuery<IMajors>("major", "");
