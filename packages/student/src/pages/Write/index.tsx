import { useParams } from "react-router-dom";
import * as _ from "./components";
import { Icon } from "@iconify/react";

export const Write = () => {
  const section = parseInt(useParams().section as string);
  const isLoading = false;

  if (section) {
    return (
      <div className="flex w-full h-full relative">
        <div className="flex flex-col w-7/12 h-full overflow-x-hidden">
          <div
            className="flex w-full h-full transition-all duration-300 shrink"
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
          <_.Footer section={section} />
        </div>
        <div className="w-5/12 h-full bg-black"></div>
        {isLoading && (
          <div className="w-full h-full col-flex flex-center gap-5 absolute z-20 bg-[#00000080]">
            <Icon
              icon="line-md:loading-twotone-loop"
              color="white"
              width={80}
            />
            <span className="text-body3">데이터를 불러오고 있습니다...</span>
          </div>
        )}
      </div>
    );
  }
};
