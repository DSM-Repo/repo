import { useMyMutation, useMyQuery } from "@configs/util";
import { IFeedback } from "./types";

export const feedback = () => useMyQuery<IFeedback>("feedback", "");

export const confirm = () =>
  useMyMutation<string, undefined>("post", "feedback", "/confirm");
