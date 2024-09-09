import { Ternary } from "@configs/util";
import { sizeType } from "../../../../size";

interface IProp {
  label?: string;
  children: React.ReactElement;
  size: sizeType;
  required?: boolean;
}

export const Label = ({ label, children, size, required }: IProp) => {
  const isFull = size === "full";

  return label ? (
    <div className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 relative`}>
      <Ternary data={label}>
        <span className="text-[16px] font-light">
          {label}{" "}
          <Ternary data={required}>
            <span className="text-[16px] font-light text-green-400">*</span>
          </Ternary>
        </span>
      </Ternary>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
