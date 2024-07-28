import { sizeDefault, roundDefault } from "./constants";
import { colorBox } from "../../common";
import { IProp } from "./types";

export const Box = ({
  children,
  color = "dark",
  size = sizeDefault,
  round = roundDefault,
  ...props
}: IProp) => {
  const { width, height, padding } = size;
  const { tl, tr, br, bl } = round;
  const borderRadius = `${tl} ${tr} ${br} ${bl}`;

  return (
    <div
      {...props}
      className={`col-flex gap-10 ${colorBox[color]} ${props.className}`}
      style={{ width, height, padding, borderRadius, ...props.style }}
    >
      {children}
    </div>
  );
};
