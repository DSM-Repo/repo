import { Placeholder, Document, Api } from "@configs/type";
import { useMyQuery } from "@configs/util";

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
