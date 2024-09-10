import { useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const majorList = () =>
  useMyQuery<Api.Major.Major>("major", "", Placeholder.CommonLayoutPlace);
