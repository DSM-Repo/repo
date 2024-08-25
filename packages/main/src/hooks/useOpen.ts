import { create } from "zustand";

interface IOpen {
  opened: string;
  setOpened: (name: string) => void;
}

export const useOpen = create<IOpen>((set) => ({
  opened: "",
  setOpened: (name: string) => set((prev) => ({ ...prev, opened: name }))
}));
