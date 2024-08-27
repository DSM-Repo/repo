import { useCallback, useRef, useState } from "react";
import { Bell } from "@/assets/newAssets";

type hoverType = "enter" | "leave";

interface IProp {
  select?: {
    value: any;
    setValue: () => void;
  };
  onClick: () => void;
  icon: string;
  title?: string;
}

const styles = {
  wrapper: "relative flex flex-col",
  icon: "transition-all duration-200"
};

export const Button = ({ select, onClick, icon, title }: IProp) => {
  const [localSelect, setLocalSelect] = useState(false);
  const [show, setShow] = useState(false);
  const canShowTitle = useRef(false);

  const handleClick = useCallback(() => {
    if (!!!select) {
      setLocalSelect((prev) => !prev);
    }
    onClick();
  }, []); // 의존성이 필요한가?

  const handleHover = useCallback((type: hoverType) => {
    if (type === "enter") {
      canShowTitle.current = true;
      setTimeout(() => {
        if (canShowTitle.current) {
          setShow(true);
        }
      }, 1000);
    } else {
      canShowTitle.current = false;
      setShow(false);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <button
        className={`flex flex-col p-[8px] rounded-[100px] transition-all duration-200 ${localSelect || select?.value ? "bg-[#0B4001]" : ""}`}
        onClick={handleClick}
        onMouseEnter={() => handleHover("enter")}
        onMouseLeave={() => handleHover("leave")}
      >
        <Bell
          fill={localSelect || select?.value ? "#37E517" : "white"}
          className={styles.icon}
        />
      </button>
      {title && show && !(localSelect || select?.value) && (
        <div className="self-center absolute bottom-[-50px] flex flex-col items-center">
          <div className="[border-bottom:_calc(7px_*_1.732)_solid_white] [border-left:_7px_solid_transparent] [border-right:_7px_solid_transparent]" />
          <div className="bg-white rounded-[8px] h-fit self-center px-[16px] py-[8px] whitespace-nowrap">
            <span className="text-[16px] font-light text-black leading-none">
              {title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
