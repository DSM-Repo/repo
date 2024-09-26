import { useMyQuery, useMyMutation } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const noticeList = () =>
  useMyQuery<Api.Notice.NoticeList>(
    "notice",
    "",
    Placeholder.CommonLayoutPlace
  );

export const noticeDelete = () =>
  useMyMutation<string, null>("delete", "notice", "");

export const noticeCreate = () =>
  useMyMutation<Api.Notice.AddNotice, null>("post", "notice", "");
