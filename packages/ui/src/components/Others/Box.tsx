import { HTMLAttributes, forwardRef } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  padding?: string;
  round?: string;
  children: React.ReactNode;
}

export const Box = forwardRef(({ width = "100%", height = "100%", padding = "20px", round = "24px", children, ...props }: IProp, ref: any) => {
  return (
    <div {...props} style={{ width, height, padding, borderRadius: round }} className={`col-flex gap-2 border-[1px] border-gray-700 bg-gray-800 ${props.className}`} ref={ref}>
      {children}
    </div>
  );
});
