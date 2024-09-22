import { useMyQuery, useMyMutation } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const history = () =>
  useMyQuery<Api.History.History>("history", ``, Placeholder.CommonLayoutPlace);

export const historyAdd = () =>
  useMyMutation<Api.History.HistoryAdd, undefined>("post", "history", "");

export const historyDel = () =>
  useMyMutation<string, undefined>("delete", "history", "");
