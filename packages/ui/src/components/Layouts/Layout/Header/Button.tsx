import { useSideBarOpen } from "../../../../hooks";
import { useOutsideClickRef } from "@configs/util";
import { iconType, Icon } from "../../../";
import { useRef, useState } from "react";
import { Api } from "@configs/type";

export type actionType = {
  type: "OPEN_SIDEBAR" | "OPEN_MODAL" | "CALLBACK";
  sideBarName?: string;
  modalElement?: React.ReactNode;
  callback?: () => void;
};

interface IProp {
  action: actionType;
  icon: iconType;
  rotate?: "up" | "down" | "right" | "left";
  title: string;
  disabled?: Api.DisableType;
}

export const Button = ({ action, icon, rotate = "up", title, disabled }: IProp) => {
  const { open: sideOpen, setOpen: setSideOpen } = useSideBarOpen();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [openAnim, setOpenAnim] = useState(false);
  const showTimeout = useRef<NodeJS.Timeout | null>(null);
  const outsideRef = useOutsideClickRef<HTMLDivElement>(() => controlModal("close"));
  const openAnimRef = useRef<NodeJS.Timeout | null>(null);

  const checkSelect = action.type === "OPEN_MODAL" ? open : sideOpen === action.sideBarName;

  const handleHover = ({ type }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (type === "mouseenter") showTimeout.current = setTimeout(() => setShow(true), 250);
    else {
      clearTimeout(showTimeout.current);
      setShow(false);
    }
  };

  const controlModal = (type: "open" | "close") => {
    if (type === "open") {
      requestAnimationFrame(() => setOpen(true));
      setOpenAnim(true);
      clearTimeout(openAnimRef.current);
    } else {
      setOpen(false);
      openAnimRef.current = setTimeout(() => setOpenAnim(false), 500);
    }
  };

  const handleClick = () => {
    if (!disabled?.state) {
      if (action.type === "OPEN_MODAL") controlModal(open ? "close" : "open");
      else if (action.type === "OPEN_SIDEBAR") setSideOpen(sideOpen === action.sideBarName ? "" : action.sideBarName);
      else if (action.type === "CALLBACK") action.callback();
    }
    clearTimeout(showTimeout.current);
    setShow(false);
  };

  return (
    <div className="col-flex relative" ref={outsideRef}>
      <button
        className={`col-flex p-2 rounded-full transition-all duration-200 ${disabled?.state && "cursor-not-allowed"} ${checkSelect && "bg-[#0B4001]"}`}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Icon name={icon} rotate={rotate} color={checkSelect ? "#37E517" : "white"} disabled={disabled?.state} className="transition-all duration-200" />
      </button>
      <div style={{ opacity: title && show && !checkSelect ? 1 : 0 }} className={`col-flex items-center self-center top-[40px] z-50 transition-all duration-150 absolute`}>
        <div className="[border-bottom:_calc(7px_*_1.732)_solid_white] [border-left:_7px_solid_transparent] [border-right:_7px_solid_transparent]" />
        <div className="bg-white rounded-[8px] h-fit self-center px-[16px] py-[8px] z-50">
          <span className="text-[16px] font-light text-black whitespace-nowrap">{title + (disabled?.state ? `(${disabled?.reason})` : "")}</span>
        </div>
      </div>
      <div
        className={`col-flex items-center self-center transition-all duration-500 shadow-2xl shadow-gray-950 absolute top-[40px] z-20 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} ${!openAnim && "hidden"} `}
      >
        <div className="[border-bottom:_calc(7px_*_1.732)_solid_#333333] [border-left:_7px_solid_transparent] [border-right:_7px_solid_transparent]" />
        <div className="bg-gray-800 rounded-[8px] h-fit self-center p-5 border-[1px] border-gray-700">{action.type === "OPEN_MODAL" && (action.modalElement as React.ReactElement)}</div>
      </div>
    </div>
  );
};
