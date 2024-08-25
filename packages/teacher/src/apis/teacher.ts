import { useMyQuery } from "@configs/util";
import { ITeacher } from "./types";

export const teacher = () => useMyQuery<ITeacher>("teacher", "");
