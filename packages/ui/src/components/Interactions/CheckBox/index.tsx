import { Ternary } from "@configs/util";

interface IProp {
  checked?: boolean;
  onClick: () => void;
  label?: string;
}

export const CheckBox = ({ checked, onClick, label }: IProp) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        onClick={onClick}
        className={`${checked ? "bg-gray-700" : ""} border-[1px] w-6 h-6 border-gray-600 font-light text-[16px] transition-all cursor-pointer rounded-[4px]`}
      />
      <Ternary data={label}>
        <span>{label}</span>
      </Ternary>
    </div>
  );
};
