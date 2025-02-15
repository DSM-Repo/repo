import { sizeType } from "../../../../size";

interface IProp {
  label?: string;
  children: React.ReactNode;
  size: sizeType;
  required?: boolean;
}

export const Label = ({ label, children, size, required }: IProp) => {
  const isFull = size === "full";

  return label ? (
    <div className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 relative`}>
      {label && <span className={`text-body5 ${required && "after:text-body5 after:text-green-400 after:content-['*']"}`}>{label}</span>}
      {children}
    </div>
  ) : (
    <div className={`${isFull ? "w-full" : "w-fit"} col-flex gap-3 h-fit relative`}>{children}</div>
  );
};
