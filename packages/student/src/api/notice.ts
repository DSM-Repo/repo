import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 공지 목록 조회 API */
export const noticeList = () =>
  useMyQuery<Api.Notice.NoticeList>(
    "notice",
    "",
    Placeholder.CommonLayoutPlace
  );

/** 공지 확인 API */
export const noticeCheck = () =>
  useMyMutation<string, null>("post", "notice", "");
