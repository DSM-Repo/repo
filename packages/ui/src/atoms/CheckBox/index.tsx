import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLInputElement> {
  state: boolean;
  onChange: () => void;
  label?: string;
}

export const CheckBox = ({ state, onChange, label, ...props }: IProp) => {
  return (
    <div className="flex gap-2 items-center" {...props}>
      <input
        id="checkBox"
        type="checkbox"
        className="appearance-none w-6 h-6 cursor-pointer transition-all duration-100 checked:bg-[#454545] bg-transparent border-[2px] border-[#454545] rounded-sm"
        checked={state}
        onClick={onChange}
      />
      {!!label && (
        <label
          htmlFor="checkBox"
          className="font-regular text-[17px] text-white"
        >
          {label}
        </label>
      )}
    </div>
  );
};
