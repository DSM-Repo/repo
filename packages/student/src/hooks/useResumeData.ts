import { IResume, resumeData } from "@configs/default";
import { create } from "zustand";

export type setType = (
  partial:
    | IResumeData
    | Partial<IResumeData>
    | ((state: IResumeData) => IResumeData | Partial<IResumeData>),
  replace?: boolean | undefined
) => void;

type sectionType =
  | "writer"
  | "introduce"
  | "achievementList"
  | "activityList"
  | "projectList";

interface IResumeData {
  data: IResume;
  set: setType;
  setPartial: (section: sectionType, data: any, id?: string) => void;
}

export const useResumeData = create<IResumeData>((set) => ({
  data: resumeData,
  set,
  setPartial: (section: sectionType, data: any, id?: string) =>
    set((prev) => ({
      data: {
        ...prev.data,
        [section]:
          section === "writer" || section === "introduce"
            ? { ...prev.data[section], [id as string]: data }
            : [...prev.data[section], data]
      }
    }))
}));
