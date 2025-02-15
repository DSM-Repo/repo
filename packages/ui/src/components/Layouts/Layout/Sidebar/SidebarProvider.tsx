import { useSideBarOpen } from "../../../../hooks";
import { HTMLAttributes } from "react";

type elementsType = {
  name: string;
  element: React.ReactNode;
  layoutProps?: HTMLAttributes<HTMLDivElement>;
};

interface IProp {
  children: React.ReactNode;
  elements: Array<elementsType>;
}

export const SidebarProvider = ({ children, elements }: IProp) => {
  const { open } = useSideBarOpen();

  return (
    <div className="flex size-full overflow-hidden sticky">
      {children}
      <div className={`w-fit max-w-[814px] justify-end transition-all overflow-hidden flex relative h-full`}>
        {elements.map(({ name, element, layoutProps = {} }) => (
          <div {...layoutProps} className={`${open === name ? "translate-x-0" : `translate-x-full absolute`} overflow-hidden w-full flex justify-end transition-all ${layoutProps?.className}`}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};
