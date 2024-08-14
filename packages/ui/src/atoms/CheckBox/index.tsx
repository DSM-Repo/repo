import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLInputElement> {
  state: boolean;
  label?: string;
  onChange: () => void;
}

export const CheckBox = ({ state, onChange, label, ...props }: IProp) => {
  return (
    <div
      {...props}
      className={`flex gap-2 items-center text-body8 ${props.className}`}
    >
      <input
        type="checkbox"
        className="appearance-none cursor-pointer size-5 border-[#454545] border-2 rounded-sm transition-all duration-100 checked:bg-[#454545]"
        checked={state}
        onChange={onChange}
      />
      {!!label && <span>{label}</span>}
    </div>
  );
};
