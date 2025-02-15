import { useSideBarOpen } from "../../../../hooks";

interface IProp {
  name: string;
  width: string;
  children: React.ReactElement | React.ReactElement[];
}

export const Custom = ({ name, width, children }: IProp) => {
  const { open } = useSideBarOpen();

  return (
    <div
      style={{
        width,
        transform: `translateX(${open === name ? "0" : `${width}%`})`
      }}
      className={`transition-all duration-200 flex h-screen flex-col absolute bg-gray-800 border-l-[1px] border-gray-700 overflow-y-auto`}
    >
      {children}
    </div>
  );
};
