import { useMyMutation, useMyQuery } from "@configs/api";
import { IAccFeedback, IFeedback } from "./types";

export const getFeedback = () => useMyQuery<IFeedback>("feedback", "");

export const accFeedback = () =>
  useMyMutation<IAccFeedback, undefined>("post", "feedback", "/confirm");
