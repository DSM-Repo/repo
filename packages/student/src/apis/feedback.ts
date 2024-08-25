import { useMyMutation, useMyQuery } from "@configs/util";
import { ICheckFeedback, IFeedback } from "./types";

export const feedback = () => useMyQuery<IFeedback>("feedback", "");

export const checkFeedback = () =>
  useMyMutation<ICheckFeedback, undefined>("post", "feedback", "/confirm");
