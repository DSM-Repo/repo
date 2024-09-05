import { useLocation, useNavigate } from "react-router-dom";
import { Icon, iconType } from "../../Others";
import { Ternary } from "@configs/util";

export interface ISectionProp {
  name: string;
  urls: string[];
  icon: iconType;
  checked?: boolean;
}

export const Section = ({ name, urls, icon, checked }: ISectionProp) => {
  const locs = useLocation()?.pathname;
  const navigate = useNavigate();

  const isSelected = urls.includes("/")
    ? locs === "/"
    : urls?.map((i) => locs.includes(i)).find((i) => i) || false;

  return (
    <div
      className={`cursor-pointer transition-all duration-150 flex items-center justify-between p-3 w-full h-12 rounded-xl border-[1px] ${isSelected ? "bg-gray-700 border-gray-600" : "hover:bg-gray-600 border-gray-800"}`}
      onClick={() => `/${navigate(urls[0])}`}
    >
      <div className="flex items-center gap-3">
        <Icon
          name={icon}
          size={20}
          color={isSelected ? "#ffffff" : "#888888"}
        />
        <span className="text-[14px] font-normal">{name}</span>
      </div>
      <Ternary data={checked}>
        <div className="w-fit h-fit p-1 rounded-[100px] bg-green-800">
          <Icon name="Check" color="#37E517" size={16} />
        </div>
      </Ternary>
    </div>
  );
};
