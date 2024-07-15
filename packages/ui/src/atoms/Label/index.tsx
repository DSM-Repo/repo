import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: React.ReactElement | React.ReactElement[];
}

export const Label = ({ label, children, ...props }: IProp) => {
  if (label) {
    return (
      <div className="flex flex-col gap-2 w-fit h-fit">
        <span className="text-white font-semibold text-sm">{label}</span>
        <div {...props} className={`relative ${props.className}`}>
          {children}
        </div>
      </div>
    );
  } else {
    return children;
  }
};
