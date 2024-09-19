import { forwardRef } from "react";

interface IProp {
  showPadding?: boolean;
  children: React.ReactElement | React.ReactElement[];
  scale?: number;
}

export const PageLayout = forwardRef(
  ({ showPadding, children, scale }: IProp, ref: any) => {
    return (
      <div
        style={{
          transform: scale !== undefined ? `scale(${scale})` : "scale(1)",
          willChange: scale !== undefined ? "transform" : "",
          transformOrigin: "center center"
        }}
        className={`${showPadding ? "w-[842px] h-[1191px] flex flex-center bg-gray-50" : scale ? "w-fit h-fit" : "w-[inherit] h-full"} overflow-auto flex-shrink-0 layout`}
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
