import { Document, Placeholder } from "@configs/type";
import { create } from "zustand";

export type setType = (
  partial:
    | IResumeData
    | Partial<IResumeData>
    | ((state: IResumeData) => IResumeData | Partial<IResumeData>),
  replace?: boolean | undefined
) => void;

interface IResumeData {
  data: Document.Resume;
  set: setType;
  setPartial: (
    section: Document.sectionKeyType,
    data: any,
    id?: string
  ) => void;
}

export const useResumeData = create<IResumeData>((set) => ({
  data: Placeholder.ResumeDetailPlace,
  set,
  setPartial: (section: Document.sectionKeyType, data: any, id?: string) =>
    set((prev) => ({
      data: {
        ...prev.data,
        [section]:
          section === "writer" || section === "introduce"
            ? { ...prev.data[section], [id as string]: data }
            : [data, ...prev.data[section]]
      }
    }))
}));
