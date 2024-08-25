import { useLocation } from "react-router-dom";
import { Header as DefaultHeader } from "ui";

export interface IProp {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setOpened }: IProp) => {
  const { pathname } = useLocation();
  return pathname === "/" ? (
    <div className="flex items-center fixed z-30 w-full">
      <DefaultHeader />
      <span
        className="pointable absolute right-48 text-body8 leading-none"
        onClick={() => setOpened(true)}
      >
        Login →
      </span>
    </div>
  ) : (
    <DefaultHeader className="w-full" />
  );
};
