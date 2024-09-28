import { useMyMutation, useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/** 레주메 제출 API */
export const resumeSubmit = () =>
  useMyMutation<null, null>("post", "resume", "/submit");

/** 레주메 공개 API */
export const resumeRelease = () =>
  useMyMutation<string, null>("post", "resume", "/release");

/** 레주메 조회 API */
export const resumeDetail = () =>
  useMyQuery<Api.Resume.ResumeDetail>(
    "resume",
    "/detail",
    Placeholder.ResumeDetailPlace
  );

/** 레주메 목록 조회 API */
export const resumeList = () =>
  useMyQuery<Api.Resume.ResumeStudent>(
    "resume",
    "/student",
    Placeholder.CommonLayoutPlace
  );

/** 특정 레주메 상세조회 API
 * @param id 조회할 레주메의 ID
 */
export const resumeDetailSpecific = (id: string) =>
  useMyQuery<Api.Resume.ResumeStudent>(
    "resume",
    "/student",
    Placeholder.CommonLayoutPlace
  );

/** 공개된 문서 목록 조회 API */
export const resumeReleased = () =>
  useMyQuery<Api.Resume.ResumeReleased>(
    "resume",
    "/released",
    Placeholder.CommonLayoutPlace
  );

/** 공개된 문서 상세 목록 조회 API
 * @param grade 조회할 학년
 */
export const resumeReleasedDetail = (grade: string | number) =>
  useMyQuery<Api.Resume.ResumeReleased>(
    "resume",
    `/released/grade/${grade}/year/${new Date().getFullYear()}`,
    Placeholder.CommonLayoutPlace
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
