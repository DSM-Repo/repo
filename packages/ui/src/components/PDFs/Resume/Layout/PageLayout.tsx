import { forwardRef, useContext } from "react";
import { Context } from "..";

interface IProp {
  children: React.ReactNode;
}

export const PageLayout = forwardRef(({ children }: IProp, ref: any) => {
  const { scale, showPadding, noOverflow } = useContext(Context);
  return (
    <div
      style={{ transform: scale !== undefined ? `scale(${scale})` : "scale(1)" }}
      className={`overflow-auto origin-center flex-shrink-0 layout ${scale !== undefined && "will-change-transform"} ${showPadding && !noOverflow ? "w-[842px] h-[1191px] flex flex-center bg-gray-50" : scale ? "w-fit h-fit" : "w-[inherit] h-full"}`}
    >
      <div className={`w-[794px] p-[30px] col-flex bg-white traversable border-none flex-shrink-0 overflow-visible ${noOverflow ? "h-fit" : "h-[1123px]"}`} ref={ref}>
        {children}
      </div>
    </div>
  );
});
