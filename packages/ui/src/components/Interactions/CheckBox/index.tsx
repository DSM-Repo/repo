import { Ternary } from "@configs/util";
import { Icon } from "../../Others";

interface IProp {
  checked?: boolean;
  onClick: () => void;
  label?: string;
}

export const CheckBox = ({ checked, onClick, label }: IProp) => {
  return (
    <label className="flex gap-1 items-center cursor-pointer w-fit">
      <Icon
        color={checked ? "white" : "#777777"}
        name="Check"
        className="cursor-pointer"
      />
      <input
        type="checkbox"
        onClick={onClick}
        className="hidden"
        // className={`${checked ? "bg-white" : ""} border-[1px] w-6 h-6 border-gray-600 font-light text-[16px] transition-all cursor-pointer rounded-[4px]`}
      />
      <Ternary data={label}>
        <span>{label}</span>
      </Ternary>
    </label>
  );
};
