import { forwardRef } from "react";

interface IProp {
  showPadding?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

export const PageLayout = forwardRef(
  ({ showPadding, children }: IProp, ref: any) => {
    return (
      <div
        className={`${showPadding ? "w-[842px] h-[1191px] flex flex-center bg-gray-50" : "w-[inherit] h-full"} overflow-auto flex-shrink-0 layout`}
      >
        <div
          className={`w-[794px] h-[1123px] p-[30px] col-flex bg-white checkAble border-none flex-shrink-0 overflow-hidden`}
          ref={ref}
        >
          {children}
        </div>
      </div>
    );
  }
);
