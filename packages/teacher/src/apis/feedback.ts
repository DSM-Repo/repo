import { useMyMutation, useMyQuery } from "@configs/util";
import { IAddFeedback } from "./types";
import { Api, Placeholder } from "@configs/type";

export const AddFeedback = () =>
  useMyMutation<IAddFeedback, undefined>("post", "feedback", "");

export const ConfirmFeedback = () =>
  useMyMutation<string, undefined>("post", "feedback", "/accept");

export const DeleteFeedback = () =>
  useMyMutation<string, undefined>("delete", "feedback", "");

export const RejectFeedback = () =>
  useMyMutation<string, undefined>("post", "feedback", "/reject");

export const getFeedback = (id: string) =>
  useMyQuery<Api.Feedback.Feedback>(
    "feedback",
    `/${id}`,
    Placeholder.CommonLayoutPlace
  );
