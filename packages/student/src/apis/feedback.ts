import { useMyMutation, useMyQuery } from "@configs/util";
import { ICheckFeedback, IFeedback } from "./types";

export const feedback = () => useMyQuery<IFeedback>("feedback", "");

export const confirm = () =>
  useMyMutation<ICheckFeedback, undefined>("post", "feedback", "/confirm");
