import { useEffect } from "react";
import { useEventListeners } from "./useEventListener";

type propType = {
  key: string;
  shift?: boolean;
  ctrl?: boolean;
  action: (e: KeyboardEvent) => void;
}[];

export const useShortcut = (items: propType) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      items.forEach((i) => {
        const isCtrl = i.ctrl ? e.ctrlKey || e.metaKey : true;
        const isShift = i.shift ? e.shiftKey : true;
        if (isCtrl || isShift) {
          if (e.key === i.key && isCtrl && isShift) {
            e.preventDefault();
            i.action(e);
          }
        } else {
          if (e.key === i.key) {
            e.preventDefault();
            i.action(e);
          }
        }
      });
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [items]);
};
