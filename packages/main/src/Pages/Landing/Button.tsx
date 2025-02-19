import { useContext } from "react";
import { ModalContext } from ".";

interface IProp {
  children: string;
}

export const Button = ({ children }: IProp) => {
  const { toggle } = useContext(ModalContext);

  return (
    <button onClick={toggle} className="px-5 py-[10px] text-[15px] font-light leading-none text-white border-[1px] rounded-[100px] transition-all duration-150 border-gray-400 hover:bg-gray-400 modal">
      {children}
    </button>
  );
};
