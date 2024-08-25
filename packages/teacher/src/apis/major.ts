import { useMyMutation, useMyQuery } from "@configs/util";
import { IAddMajor, IDelMajor, IMajors } from "./types";

export const addMajor = () =>
  useMyMutation<IAddMajor, undefined>("post", "major", "");

export const major = () => useMyQuery<IMajors>("major", "");

export const delMajor = () =>
  useMyMutation<IDelMajor, undefined>("put", "major", "/del");
