import { sizeType } from "../../../../size";
import { ForwardedRef, forwardRef } from "react";

interface IProp {
  label?: string;
  children: React.ReactNode;
  size: sizeType;
  required?: boolean;
}

export const Label = forwardRef(({ label, children, size, required }: IProp, ref: ForwardedRef<any>) => {
  const isFull = size === "full";

  return label ? (
    <div className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 relative`} ref={ref}>
      {label && <span className={`text-body5 ${required && "after:text-body5 after:text-green-400 after:ml-1 after:content-['*']"}`}>{label}</span>}
      {children}
    </div>
  ) : (
    <div className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 h-fit relative`} ref={ref}>
      {children}
    </div>
  );
});
