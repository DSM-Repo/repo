import { useNavigate, useParams } from "react-router-dom";
import * as _ from "./components";
import { Box } from "ui";
import { Icon } from "@iconify/react";

export const Write = () => {
  const section = parseInt(useParams().section as string);
  const navigate = useNavigate();
  const colors = (item: boolean) => (item ? "text-white" : "text-[#999999]");

  if (section) {
    return (
      <div className="flex w-full h-[100vh] overflow-auto">
        <div className="flex flex-col w-[60%] h-full overflow-hidden">
          <div
            className="flex w-full h-full transition-all duration-300"
            style={{
              transform: `translateX(${(section - 1) * -100}%)`,
            }}
          >
            <_.Inform />
            <_.Introduce />
            <_.Certification />
            <_.Activity />
            <_.Projects />
          </div>
          <Box
            size={{ width: "100%", height: "55px", padding: "10px" }}
            style={{ flexDirection: "row" }}
            className="px-[1.5rem_!important] justify-between"
          >
            <div className="flex gap-2 h-full items-center w-fit">
              <div className="text-white align-middle flex gap-1 items-center">
                <Icon
                  icon="material-symbols:save"
                  className="inline-block"
                  width={22}
                />
                <span className="font-semibold line-fit text-lg">저장</span>
              </div>
              <div className="text-white align-middle flex gap-1 items-center">
                <Icon
                  icon="ic:baseline-delete"
                  className="inline-block"
                  width={22}
                />
                <span className="font-semibold line-fit text-lg">초기화</span>
              </div>
            </div>
            <div className="flex gap-2 h-full items-center w-fit">
              <div
                className={`${colors(
                  section > 1
                )} align-middle flex gap-1 items-center`}
              >
                <Icon
                  icon="ep:arrow-up-bold"
                  className="inline-block rotate-[-90deg]"
                  width={22}
                />
                <span
                  onClick={() =>
                    section > 1 &&
                    navigate(`/write/${section - 1}`, { replace: true })
                  }
                  className="font-semibold line-fit text-lg"
                >
                  이전으로
                </span>
              </div>
              <div
                className={`${colors(
                  section < 5
                )} align-middle flex gap-1 items-center`}
              >
                <Icon
                  icon="ep:arrow-up-bold"
                  className="inline-block rotate-[90deg]"
                  width={22}
                />
                <span
                  onClick={() =>
                    section < 5 &&
                    navigate(`/write/${section + 1}`, { replace: true })
                  }
                  className="font-semibold line-fit text-lg"
                >
                  다음으로
                </span>
              </div>
            </div>
          </Box>
        </div>
        <div className="w-[40%] h-full bg-black"></div>
      </div>
    );
  }
};
