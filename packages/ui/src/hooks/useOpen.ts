import { create } from "zustand";

type openType = {
  name: string;
  component: React.ReactElement;
};

interface IOpen {
  opened: openType;
  setOpened: (name: openType) => void;
}

export const useOpen = create<IOpen>((set) => ({
  opened: undefined,
  setOpened: (name: openType) => set((prev) => ({ ...prev, opened: name }))
}));
