import I from "./PS.svg?react";

interface IProp {
  icon: "My" | "Library" | "Edit"; // 타입 따로 지정
  children: string;
  selected: boolean;
}

export const Content = ({ icon, children, selected }: IProp) => {
  const font = selected
    ? "text-white font-semibold"
    : "text-[#999999] font-regular";
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 bg-[#333333] rounded-md">
        <I />
      </div>
      <span className={font}>{children}</span>
    </div>
  );
};
