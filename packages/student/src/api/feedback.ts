import { UseMutationOptions } from "@tanstack/react-query";
import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 피드백 목록 조회 API */
export const feedbackList = () => useMyQuery<Api.Feedback.Feedback>("feedback", "", Placeholder.CommonLayoutPlace);

/** 피드백 거부 API */
export const feedbackReject = () => useMyMutation<string, null>("post", "feedback", "/reject");

/** 피드백 반영 API */
export const feedbackConfirm = (options?: UseMutationOptions<null, Error, string, unknown>) => useMyMutation<string, null>("post", "feedback", "/confirm", options);
