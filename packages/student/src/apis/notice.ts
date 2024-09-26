import { useMyQuery, useMyMutation } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const noticeList = () =>
  useMyQuery<Api.Notice.NoticeList>(
    "notice",
    "",
    Placeholder.CommonLayoutPlace
  );

export const noticeCheck = () =>
  useMyMutation<string, null>("post", "notice", "");
