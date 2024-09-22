import { default as Logo } from "./Logo.svg?react";
import { Button, actionType } from "./Button";
import { iconType } from "../../../";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSideBarOpen } from "../../../../hooks";

export type buttonType = {
  action: actionType;
  icon: iconType;
  rotate?: "up" | "down" | "right" | "left";
  title: string;
  disabled?: boolean;
  disabledReason?: string;
};

interface IProp {
  buttons?: buttonType[];
}

export const Header = ({ buttons }: IProp) => {
  const navigate = useNavigate();
  const { setSideOpened } = useSideBarOpen();
  useEffect(() => {
    setSideOpened("");
  }, []);

  return (
    <div className="flex justify-center w-full h-fit py-3 z-50 ">
      <div className="flex-shrink-0 w-[480px] h-[60px] flex justify-between p-[12px] items-center self-center bg-[#222222] border-[#333333] border-[1px] rounded-[100px]">
        <div
          className="flex px-[16px] py-[8px] bg-[#333333] rounded-[100px] cursor-pointer"
          onClick={() => navigate("/", { replace: true })}
        >
          <Logo />
        </div>
        <div className="flex items-center gap-2 px-[12px]">
          {buttons?.map((i) => (i ? <Button {...i} /> : <></>))}
        </div>
      </div>
    </div>
  );
};
