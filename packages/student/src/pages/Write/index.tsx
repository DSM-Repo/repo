import { useParams } from "react-router-dom";
import * as _ from "./components";

export const Write = () => {
  const section = parseInt(useParams().section as string);

  if (section) {
    return (
      <div className="flex w-full h-full overflow-auto">
        <div className="flex flex-col w-7/12 h-full overflow-hidden">
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
          <_.Footer section={section} />
        </div>
        <div className="w-5/12 h-full bg-black"></div>
      </div>
    );
  }
};
