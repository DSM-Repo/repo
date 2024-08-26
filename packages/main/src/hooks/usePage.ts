import { create } from "zustand";

interface IPage {
  page: number;
  setPage: (value: number, max: number) => void;
}

export const usePage = create<IPage>((set) => ({
  page: 1,
  setPage: (value: number, max: number) => {
    if (value < 1 || value > max) return;
    set((prev) => ({ ...prev, page: value }));
  }
}));
