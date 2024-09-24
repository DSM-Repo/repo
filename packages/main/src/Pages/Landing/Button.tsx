import { Dispatch, SetStateAction } from "react";

interface IProp {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: IProp) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-[10px] text-[15px] font-light leading-none text-white border-[1px] rounded-[100px] transition-all duration-150 border-gray-400 hover:bg-gray-400 modal"
    >
      {children}
    </button>
  );
};
