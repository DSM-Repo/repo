import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";
import { IAddMajor } from "./types";
export const addMajor = (options: Api.MutationOption<undefined, IAddMajor>) => useMyMutation<IAddMajor, undefined>("post", "major", "", options);

export const getMajor = () => useMyQuery<Api.Major.Major>("major", "", Placeholder.CommonLayoutPlace);

export const delMajor = (options: Api.MutationOption<undefined, string>) => useMyMutation<string, undefined>("delete", "major", "", options);
