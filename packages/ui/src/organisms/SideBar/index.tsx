import { SideBarProfile, SideBarProgress } from "../../molecules";
import { Box } from "../../atoms";
import { IProp } from "./types";

export const SideBar = ({
  type,
  user,
  progress,
  children,
  ...props
}: IProp) => {
  const isStudent = type === "student";

  return (
    <Box
      width="270px"
      height="100%"
      padding="20px"
      color="dark"
      round={{ all: 0 }}
      className={`grid grid-rows-[0.1fr_1fr_0.1fr] border-r-[1px] border-r-[#333333] gap-8 ${props.className}`}
    >
      <SideBarProfile isStudent={isStudent} data={user} />
      <div className="col-flex gap-3">
        <span>메인</span>
        <div className="col-flex gap-1">{children}</div>
      </div>
      <SideBarProgress progress={progress} isStudent={isStudent} />
    </Box>
  );
};
