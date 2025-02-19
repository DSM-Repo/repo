import { useEffect, useRef } from "react";

export const useOutsideClickRef = <T extends HTMLElement = HTMLElement>(callback: () => void) => {
  const targetRef = useRef<T | null>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node | null;
    if (target === null || targetRef.current === null) return;
    if (!targetRef.current.contains(target)) callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  return targetRef;
};
