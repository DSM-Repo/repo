import { toast } from "react-toastify";
import { useEffect } from "react";

type propType = {
  key: string;
  shift?: boolean;
  ctrl?: boolean;
  disabled?: {
    state: boolean;
    reason: string;
  };
  action: (e: KeyboardEvent) => void;
}[];

export const useShortcut = (items: propType) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      items.forEach((i) => {
        const isCtrl = i.ctrl ? e.ctrlKey || e.metaKey : true;
        const isShift = i.shift ? e.shiftKey : true;
        if (i.ctrl || i.shift) {
          if (e.key === i.key && isCtrl && isShift) {
            e.preventDefault();
            if (!!i.disabled?.state) {
              toast.error(i.disabled.reason);
              return;
            }
            i.action(e);
          }
        } else {
          if (e.key === i.key) {
            e.preventDefault();
            if (!!i.disabled?.state) {
              toast.error(i.disabled.reason);
              return;
            }
            i.action(e);
          }
        }
      });
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [items]);
};
