import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";
import { IAddMajor } from "./types";

export const addMajor = () =>
  useMyMutation<IAddMajor, undefined>("post", "major", "");

export const getMajor = () =>
  useMyQuery<Api.Major.Major>("major", "", Placeholder.CommonLayoutPlace);

export const delMajor = () =>
  useMyMutation<string, undefined>("delete", "major", "");
