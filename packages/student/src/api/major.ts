import { useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 전공 목록 조회 API */
export const majorList = () =>
  useMyQuery<Api.Major.Major>("major", "", Placeholder.CommonLayoutPlace);
