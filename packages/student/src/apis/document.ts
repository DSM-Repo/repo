import {
  IResume,
  achievementType,
  activityType,
  projectType,
  useMyQuery,
  useMyMutation
} from "@configs/util";
import { ICompletion, IDelImage, IIntroduce } from "./types";

export const completion = () =>
  useMyQuery<ICompletion>("resume", "/completion");

export const resumeData = () => useMyQuery<IResume>("resume", "/detail");

export const introduce = () => useMyQuery<IIntroduce>("resume", "");

export const submit = () =>
  useMyMutation<undefined, undefined>("post", "resume", "/submit");

export type urlType =
  | "writer-info"
  | "introduce"
  | "achievement"
  | "activity"
  | "project";

export const update = () => useMyMutation<IResume, null>("patch", "resume", "");

export const delFile = () =>
  useMyMutation<IDelImage, undefined>("put", "file", "/del");
