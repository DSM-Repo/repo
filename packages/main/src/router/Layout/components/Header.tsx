import { Header as DefaultHeader } from "ui";

export interface IProp {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setOpened }: IProp) => {
  return (
    <div className="flex items-center fixed z-30 w-full">
      <DefaultHeader />
      <span
        className="pointable absolute right-48 text-body8 leading-none"
        onClick={() => setOpened(true)}
      >
        Login →
      </span>
    </div>
  );
};
