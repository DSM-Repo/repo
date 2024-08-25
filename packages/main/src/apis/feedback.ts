import { useMyQuery, useMyMutation } from "@configs/util";
import { IFeedback, addFeedbackType, editFeedbackType } from "./types";

export const feedback = (id: string) =>
  useMyQuery<IFeedback>("feedback", `/${id}`);

export const addFeedback = () =>
  useMyMutation<addFeedbackType, undefined>("post", "feedback", "");

export const rejectFeedback = () =>
  useMyMutation<editFeedbackType, undefined>("post", "feedback", "/reject");

export const acceptFeedback = () =>
  useMyMutation<editFeedbackType, undefined>("post", "feedback", "/accept");

export const deleteFeedback = () =>
  useMyMutation<editFeedbackType, undefined>("put", "feedback", "/del");
