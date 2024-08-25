import { IAddHistory, IDelHistory, historiesType } from "./types";
import { useMyMutation, useMyQuery } from "@configs/util";

export const addHistory = () =>
  useMyMutation<IAddHistory, undefined>("post", "history", "");

export const histories = () => useMyQuery<historiesType>("history", "");

export const delHistory = () =>
  useMyMutation<IDelHistory, undefined>("put", "history", "/del");
