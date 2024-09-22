import { Placeholder, Document, Api } from "@configs/type";
import { useMyQuery, useMyMutation } from "@configs/util";

export const students = () =>
  useMyQuery<Api.Resume.ResumeStudent>(
    "resume",
    "/student",
    Placeholder.CommonLayoutPlace
  );

export const studentDetail = (id: string) =>
  useMyQuery<Document.Resume>(
    "resume",
    `/student/${id}`,
    Placeholder.ResumeDetailPlace
  );

export const studentAll = (grade: string) =>
  useMyQuery<Api.Resume.ResumeReleased>(
    "resume",
    `/released/grade/${grade}/year/${new Date().getFullYear()}`,
    Placeholder.CommonLayoutPlace
  );

export const studentRelease = () =>
  useMyMutation<string, null>("post", "resume", "/release");
