import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 연혁 목록 조회 API */
export const historyList = () =>
  useMyQuery<Api.History.History>("history", "", Placeholder.CommonLayoutPlace);

/** 연혁 추가 API */
export const historyAdd = () =>
  useMyMutation<Api.History.HistoryAdd, null>("post", "history", "");

/** 연혁 삭제 API */
export const historyDelete = () =>
  useMyMutation<string, null>("delete", "history", "");
