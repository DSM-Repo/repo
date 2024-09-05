import { create } from "zustand";

interface IOpen {
  sideOpened: string;
  setSideOpened: (name: string) => void;
}

export const useSideBarOpen = create<IOpen>((set) => ({
  sideOpened: "",
  setSideOpened: (name: string) =>
    set((prev) => ({ ...prev, sideOpened: name }))
}));
