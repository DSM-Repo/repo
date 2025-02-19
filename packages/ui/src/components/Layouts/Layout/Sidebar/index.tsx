import { useSideBarOpen } from "../../../../hooks";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
export * from "./Items";
export * from "./StandardSidebar";

export type elementsType = {
  name: string;
  element: React.ReactNode;
  layoutProps?: HTMLAttributes<HTMLDivElement>;
};

interface IProps {
  children: React.ReactNode;
  elements: Array<elementsType>;
}

export const SidebarProvider = ({ children, elements }: IProps) => {
  const { open } = useSideBarOpen();
  const widths = useRef<Record<string, number>>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 300);
  }, []);

  return (
    <div className="flex size-full overflow-hidden relative">
      <div style={{ width: isReady && widths.current[open] ? `calc(100% - ${widths.current[open]}px)` : "100%" }} className="shrink transition-all h-full">
        {children}
      </div>
      <div className="w-fit max-w-[900px] overflow-hidden transition-all h-full shrink-0 relative">
        {elements.map(({ name, element, layoutProps = {} }) => (
          <div
            {...layoutProps}
            key={name}
            className={`${open === name ? "translate-x-0" : "translate-x-full absolute"} ${!isReady && "invisible absolute"} h-full transition-transform`}
            ref={(item) => {
              if (item) widths.current[name] = item.getBoundingClientRect().width;
            }}
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};
