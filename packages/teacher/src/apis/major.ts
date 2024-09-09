import { useMyMutation, useMyQuery } from "@configs/util";
import { IAddMajor, IMajors } from "./types";

export const addMajor = () =>
  useMyMutation<IAddMajor, undefined>("post", "major", "");

export const getMajor = () => useMyQuery<IMajors>("major", "");

export const delMajor = () =>
  useMyMutation<string, undefined>("delete", "major", "");
