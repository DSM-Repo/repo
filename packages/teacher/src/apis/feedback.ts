import { useMyMutation, useMyQuery } from "@configs/util";
import { IAddFeedback, IFeedback } from "./types";

export const AddFeedback = () =>
  useMyMutation<IAddFeedback, undefined>("post", "feedback", "");

export const ConfirmFeedback = () =>
  useMyMutation<string, undefined>("post", "feedback", "/confirm");

export const DeleteFeedback = () =>
  useMyMutation<string, undefined>("delete", "feedback", "");

export const RejectFeedback = () =>
  useMyMutation<string, undefined>("post", "feedback", "/reject");

export const getFeedback = (id: string) =>
  useMyQuery<IFeedback>("feedback", `/${id}`);
