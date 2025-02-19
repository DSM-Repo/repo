import { create } from "zustand";

interface IOpen {
  open: string;
  setOpen: (name: string) => void;
}

export const useSideBarOpen = create<IOpen>((set) => ({
  open: "",
  setOpen: (name: string) => set((prev) => ({ ...prev, open: name }))
}));
