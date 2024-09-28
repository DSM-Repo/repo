import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 전공 목록 조회 API */
export const majorList = () =>
  useMyQuery<Api.Major.Major>("major", "", Placeholder.CommonLayoutPlace);

/** 전공 추가 API */
export const majorAdd = () =>
  useMyMutation<Api.Major.MajorAdd, null>("post", "major", "");

/** 전공 삭제 API */
export const majorDelete = () =>
  useMyMutation<string, null>("delete", "major", "");
