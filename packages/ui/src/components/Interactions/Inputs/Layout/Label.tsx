import { childernType } from "@configs/type";
import { sizeType } from "../../../../size";
import { Ternary } from "@configs/util";

interface IProp {
  label?: string;
  children: childernType;
  size: sizeType;
  required?: boolean;
}

export const Label = ({ label, children, size, required }: IProp) => {
  const isFull = size === "full";

  return label ? (
    <div className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 relative`}>
      <Ternary data={label}>
        <span className="text-body5">
          {label}{" "}
          <Ternary data={required}>
            <span className="text-body5 text-green-400">*</span>
          </Ternary>
        </span>
      </Ternary>
      {children}
    </div>
  ) : (
    <div
      className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 h-fit relative`}
    >
      {children}
    </div>
  );
};
