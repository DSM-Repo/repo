import { useMyMutation } from "@configs/util";
import { Api } from "@configs/type";

/** 이미지 업로드 API */
export const fileAdd = () =>
  useMyMutation<FormData, Api.File.Image>("post", "file", "/resume");

/** 이미지 제거 API */
export const fileRemove = () =>
  useMyMutation<string, null>("delete", "file", "");
