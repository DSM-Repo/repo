import { useMyQuery, IResume } from "@configs/util";
import { IStudent } from "./types";

export const students = () => useMyQuery<IStudent>("resume", "/student");

export const studentDetail = (id: string) =>
  useMyQuery<IResume>("resume", `/student/${id}`);
