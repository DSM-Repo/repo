import { HTMLAttributes } from "react";

type TColor = "dark" | "light";

type TRound = {
  tr?: string | number;
  tl?: string | number;
  br?: string | number;
  bl?: string | number;
};

type TSize = {
  width: string;
  height: string;
  padding: string;
};

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  color?: TColor;
  size?: TSize;
  round?: TRound;
}

const DRound: TRound = {
  tr: "5px",
  tl: "5px",
  br: "5px",
  bl: "5px",
};

const DSize: TSize = {
  width: "100%",
  height: "100%",
  padding: "10px",
};

const colors = {
  dark: "bg-[#222222]",
  light: "bg-[#2E2E2E]",
};

export const Box = ({
  children,
  color = "dark",
  size = DSize,
  round = DRound,
  ...props
}: IProp) => {
  const { width, height, padding } = size;
  const { tl, tr, br, bl } = round;
  const borderRadius = `${tl} ${tr} ${br} ${bl}`;

  return (
    <div
      {...props}
      className={`flex flex-col gap-10 ${colors[color]} ${props.className}`}
      style={{ width, height, padding, borderRadius }}
    >
      {children}
    </div>
  );
};
