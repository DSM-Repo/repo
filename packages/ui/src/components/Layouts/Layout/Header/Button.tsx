import { useSideBarOpen, useOpen } from "../../../../hooks";
import { iconType, Icon } from "../../../";
import { useEffect, useRef, useState } from "react";

export type actionType = string | React.ReactElement | (() => void);

interface IProp {
  action: actionType;
  icon: iconType;
  rotate?: "up" | "down" | "right" | "left";
  title: string;
  disabled?: boolean;
  disabledReason?: string;
}

const styles = {
  wrapper: "relative col-flex",
  icon: "transition-all duration-200"
};

export const Button = ({
  action,
  icon,
  rotate = "up",
  title,
  disabled,
  disabledReason
}: IProp) => {
  const { opened, setOpened } = useOpen();
  const { sideOpened, setSideOpened } = useSideBarOpen();
  const [show, setShow] = useState(false);
  const canShowTitle = useRef(false);
  const animTimeout = useRef(null);
  const [first, setFirst] = useState(true);

  const handleClick = () => {
    if (!disabled) {
      if (typeof action === "object") {
        const object = {
          name: title,
          component: action
        };
        clearTimeout(animTimeout?.current);
        if (opened?.name === title && opened) {
          setOpened({ ...opened, name: undefined });
          animTimeout.current = setTimeout(() => {
            setOpened(undefined);
          }, 200);
        } else {
          setOpened(object);
        }
      } else if (typeof action === "string") {
        setSideOpened(sideOpened === action ? "" : action);
      } else if (typeof action === "function") {
        action();
      }
      canShowTitle.current = false;
      setShow(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setFirst(false);
    }, 200);
  }, []);

  const checkSelect =
    typeof action === "object"
      ? opened && opened?.name === title
      : sideOpened === action;

  const handleHover = (type: "enter" | "leave") => {
    if (type === "enter") {
      canShowTitle.current = true;
      setTimeout(() => {
        if (canShowTitle.current) {
          setShow(true);
        }
      }, 250);
    } else {
      canShowTitle.current = false;
      setShow(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`flex flex-col p-[8px] rounded-[100px] transition-all ${disabled ? "cursor-not-allowed" : ""} duration-200 ${checkSelect ? "bg-[#0B4001]" : ""}`}
        onClick={handleClick}
        onMouseEnter={() => handleHover("enter")}
        onMouseLeave={() => handleHover("leave")}
      >
        <Icon
          name={icon}
          rotate={rotate}
          color={disabled ? "#777777" : checkSelect ? "#37E517" : "white"}
          className={styles.icon}
        />
      </button>
      <div
        style={{ opacity: title && show && !checkSelect ? 1 : 0 }}
        className={`top-[40px] z-20 transition-all duration-150 self-center absolute flex flex-col items-center`}
      >
        <div className="[border-bottom:_calc(7px_*_1.732)_solid_white] [border-left:_7px_solid_transparent] [border-right:_7px_solid_transparent]" />
        <div className="bg-white rounded-[8px] h-fit self-center px-[16px] py-[8px] whitespace-nowrap">
          <span className="text-[16px] font-light text-black leading-none">
            {title}
            {disabled && disabledReason ? ` (${disabledReason})` : ""}
          </span>
        </div>
      </div>
      <div
        className={`${first ? "preload" : ""} ${opened?.name === title ? "move-up" : "move-down"} self-center absolute top-[40px] flex flex-col items-center z-20`}
      >
        <div className="[border-bottom:_calc(7px_*_1.732)_solid_#333333] [border-left:_7px_solid_transparent] [border-right:_7px_solid_transparent]" />
        <div className="bg-gray-800 rounded-[8px] h-fit self-center p-5 border-[1px] border-gray-700">
          {opened?.name === title || (!!!opened?.name && opened?.component) ? (
            (action as React.ReactElement)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
