import { Api, Document, Placeholder } from "@configs/type";
import { useMyQuery, useMyMutation } from "@configs/util";

export const resumeCompletion = () =>
  useMyQuery<Api.Resume.ResumeCompletion>(
    "resume",
    "/completion",
    Placeholder.ResumeCompletionPlace
  );

export const resumeDetail = () =>
  useMyQuery<Document.Resume>(
    "resume",
    "/detail",
    Placeholder.ResumeDetailPlace
  );

export const recentlyShared = () =>
  useMyQuery<Api.Resume.RecentlyShared>(
    "resume",
    "",
    Placeholder.RecentlySharedPlace
  );

export const resumeSubmit = () => useMyMutation("post", "resume", "/submit");

export const resumeSave = () =>
  useMyMutation<Document.Resume, null>("patch", "resume", "");
