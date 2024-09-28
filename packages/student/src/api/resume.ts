import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 레주메 제출 API */
export const resumeSubmit = () =>
  useMyMutation<null, null>("post", "resume", "/submit");

/** 레주메 조회 API */
export const resumeDetail = () =>
  useMyQuery<Api.Resume.ResumeDetail>(
    "resume",
    "/detail",
    Placeholder.ResumeDetailPlace
  );

/** 레주메 자기소개 조회 API */
export const resumeIntroduce = () =>
  useMyQuery<Api.Resume.RecentlyShared>(
    "resume",
    "",
    Placeholder.RecentlySharedPlace
  );

/** 레주메 완성도 조회 API */
export const resumeCompletion = () =>
  useMyQuery<Api.Resume.ResumeCompletion>(
    "resume",
    "/completion",
    Placeholder.ResumeCompletionPlace
  );

/** 레주메 저장 API */
export const resumeSave = () =>
  useMyMutation<Api.Resume.ResumeDetail, null>("patch", "resume", "");
