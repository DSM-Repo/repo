import { Ternary } from "@configs/util";
import { Icon } from "@/Others";

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
      <input type="checkbox" onClick={onClick} className="hidden" />
      <Ternary data={label}>
        <span className="text-body5">{label}</span>
      </Ternary>
    </label>
  );
};
