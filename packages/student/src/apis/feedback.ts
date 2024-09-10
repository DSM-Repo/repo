import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const feedbackList = () =>
  useMyQuery<Api.Feedback.Feedback>(
    "feedback",
    "",
    Placeholder.CommonLayoutPlace
  );

export const feedbackConfirm = () =>
  useMyMutation<string, null>("post", "feedback", "/confirm");
