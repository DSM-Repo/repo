import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLInputElement> {
  state: boolean;
  onChange: () => void;
  label?: string;
}

export const CheckBox = ({ state, onChange, label, ...props }: IProp) => {
  return (
    <div {...props} className={`flex gap-2 items-center ${props.className}`}>
      <input
        id="cb"
        type="checkbox"
        className="appearance-none w-6 h-6 border-[#454545] bg-transparent border-[2px] rounded-sm cursor-pointer transition-all duration-100 checked:bg-[#454545]"
        checked={state}
        onClick={onChange}
      />
      {!!label && (
        <label htmlFor="cb" className="font-regular text-lg text-white">
          {label}
        </label>
      )}
    </div>
  );
};
