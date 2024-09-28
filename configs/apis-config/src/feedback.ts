import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 피드백 목록 조회 API */
export const feedbackList = () =>
  useMyQuery<Api.Feedback.Feedback>(
    "feedback",
    "",
    Placeholder.CommonLayoutPlace
  );

/** 피드백 추가 API */
export const feedbackAdd = () =>
  useMyMutation<Api.Feedback.FeedbackAdd, null>("post", "feedback", "");

/** 피드백 거부 API */
export const feedbackReject = () =>
  useMyMutation<string, null>("post", "feedback", "/reject");

/** 피드백 수락 API */
export const feedbackConfirm = () =>
  useMyMutation<string, null>("post", "feedback", "/confirm");

/** 피드백 반영 API */
export const feedbackAccept = () =>
  useMyMutation<string, null>("post", "feedback", "/accept");

/** 피드백 삭제 API */
export const feedbackDelete = () =>
  useMyMutation<string, null>("delete", "feedback", "/delete");

/** 피드백 수정 API
 * @param id 수정할 피드백의 ID
 */
export const feedbackEdit = (id: string) =>
  useMyMutation<Api.Feedback.FeedbackEdit, null>("patch", "feedback", `/${id}`);

/** 특정 레주메의 피드백 조회 API
 * @param id 조회할 레주메의 ID
 */
export const feedbackListSpecific = (id: string) =>
  useMyQuery<Api.Feedback.Feedback>(
    "feedback",
    `/${id}`,
    Placeholder.CommonLayoutPlace
  );

/** 작성한 피드백 목록 조회 API */
export const feedbackListTeacher = () =>
  useMyQuery<Api.Feedback.Feedback>(
    "feedback",
    "/teacher",
    Placeholder.CommonLayoutPlace
  );
