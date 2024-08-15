import {
  ICompletion,
  IIntroduce,
  IIntroduceSpec,
  IUpdateWriter
} from "./types";
import {
  IResume,
  achievementType,
  activityType,
  projectType
} from "@configs/default";
import { useMyMutation, useMyQuery } from "@configs/api";

export const completion = () =>
  useMyQuery<ICompletion>("document", "/completion");

export const resumeData = () => useMyQuery<IResume>("document", "/detail");

export const introduce = () => useMyQuery<IIntroduce>("document", "");

export const submit = () =>
  useMyMutation<undefined, undefined>("patch", "document", "/submit");

export type urlType =
  | "writer-info"
  | "introduce"
  | "achievement"
  | "activity"
  | "project";
export const update = (url: urlType) =>
  useMyMutation<
    | IUpdateWriter
    | IIntroduceSpec
    | {
        list: projectType[] | achievementType[] | activityType[];
      },
    null
  >("patch", "document", `/${url}`);
