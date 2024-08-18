import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  full?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

export const Label = ({ label, children, full, ...props }: IProp) => {
  if (label) {
    return (
      <div className={`col-flex gap-2 h-fit ${full ? "w-full" : "w-fit"}`}>
        <span className="text-body8">{label}</span>
        <div {...props} className={`flex items-center ${props.className}`}>
          {children}
        </div>
      </div>
    );
  } else {
    return children;
  }
};
