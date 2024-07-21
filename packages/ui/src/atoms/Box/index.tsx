import { IProp, DSize, DRound, colors } from "./constants.ts";

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
      className={`col-flex gap-10 ${colors[color]} ${props.className}`}
      style={{ width, height, padding, borderRadius, ...props.style }}
    >
      {children}
    </div>
  );
};
