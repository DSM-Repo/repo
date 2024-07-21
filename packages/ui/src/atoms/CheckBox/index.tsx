import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLInputElement> {
  state: boolean;
  onChange: () => void;
  label?: string;
}

export const CheckBox = ({ state, onChange, label, ...props }: IProp) => {
  return (
    <div
      {...props}
      className={`flex gap-2 items-center text-body5 ${props.className}`}
    >
      <input
        type="checkbox"
        className="appearance-none cursor-pointer w-6 h-6 border-[#454545] bg-transparent border-[2px] rounded-sm transition-all duration-100 checked:bg-[#454545]"
        checked={state}
        onClick={onChange}
      />
      {!!label && <span>{label}</span>}
    </div>
  );
};
