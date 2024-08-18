import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children, ...props }: IProp) => {
  return (
    <div
      {...props}
      className={`flex gap-20 items-center justify-between w-9/12 max-w-[1400px] h-screen ${props.className}`}
    >
      {children}
    </div>
  );
};
