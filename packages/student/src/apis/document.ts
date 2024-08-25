import {
  IResume,
  achievementType,
  activityType,
  projectType,
  useMyQuery,
  useMyMutation
} from "@configs/util";
import {
  ICompletion,
  IDelImage,
  IIntroduce,
  IIntroduceSpec,
  IUpdateWriter
} from "./types";

export const completion = () =>
  useMyQuery<ICompletion>("document", "/completion");

export const resumeData = () => useMyQuery<IResume>("document", "/detail");

export const introduce = () => useMyQuery<IIntroduce>("document", "");

export const submit = () =>
  useMyMutation<undefined, undefined>("post", "document", "/submit");

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

export const delFile = () =>
  useMyMutation<IDelImage, undefined>("put", "file", "/del");
