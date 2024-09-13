import { Document, Placeholder } from "@configs/type";
import { toast } from "react-toastify";
import { create } from "zustand";

type listType = Exclude<Document.sectionKeyType, "writer" | "introduce">;
type staticType = "writer" | "introduce";

interface IResumeData {
  data: Document.Resume;
  setPartial: (section: staticType, data: any, id: string) => void;
  setDeepPartial: (
    section: listType,
    itemId: string,
    data: any,
    id: string
  ) => void;
  set: (
    partial:
      | IResumeData
      | Partial<IResumeData>
      | ((state: IResumeData) => IResumeData | Partial<IResumeData>),
    replace?: boolean | undefined
  ) => void;
  addItem: (section: listType, data: any) => void;
  removeItem: (section: listType, id: string) => void;
  moveItem: (
    section: listType,
    index: number,
    direction: "up" | "down"
  ) => void;
}

export const useResumeData = create<IResumeData>((set) => ({
  data: Placeholder.ResumeDetailPlace,
  set,
  setPartial: (section, data, id) =>
    set((prev) => ({
      data: {
        ...prev.data,
        [section]: { ...prev.data[section], [id]: data }
      }
    })),
  setDeepPartial: (section, itemId, data, id) =>
    set((prev) => ({
      data: {
        ...prev.data,
        [section]: prev.data[section].map((i) =>
          i.element_id === itemId ? { ...i, [id]: data } : i
        )
      }
    })),
  addItem: (section, data) => {
    set((prev) => ({
      data: {
        ...prev.data,
        [section]: [
          { ...data, element_id: crypto.randomUUID() },
          ...prev.data[section]
        ]
      }
    }));
    toast.success("항목이 생성되었습니다");
  },
  removeItem: (section, id) => {
    set((prev) => ({
      data: {
        ...prev.data,
        [section]: prev.data[section].filter((i) => i.element_id !== id)
      }
    }));
    toast.success("항목이 제거되었습니다");
  },
  moveItem: (section, index, direction) =>
    set((prev) => {
      let array = [...prev.data[section]];

      if (direction === "up" && index < array.length - 1) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
      } else if (direction === "down" && index > 0) {
        [array[index - 1], array[index]] = [array[index], array[index - 1]];
      }
      return { data: { ...prev.data, [section]: array } };
    })
}));
