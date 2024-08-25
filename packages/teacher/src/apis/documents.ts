import { useMyQuery } from "@configs/util";
import { IStudent } from "./types";

export const students = () => useMyQuery<IStudent>("document", "/student");
