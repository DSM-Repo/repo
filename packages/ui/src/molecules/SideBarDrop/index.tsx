import { useNavigate, useLocation } from "react-router-dom";
import { Background, Content } from "../../atoms";
import { IProp, urlType } from "./types";
import { Icon } from "@iconify/react";

export const SideBarDrop = ({
  selected,
  title,
  icon,
  urls,
  ...props
}: IProp) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const storySelected =
    selected === undefined
      ? !!urls.find((item: urlType) => item.url === pathname)
      : selected;

  const rotate = storySelected ? "rotate-180" : "rotate-90";

  const text = (item: string) =>
    pathname === item ? "text-white font-semibold" : "pointable";

  return (
    <Background
      selected={storySelected}
      onClick={() => !storySelected && navigate(urls[0].url)}
      {...props}
    >
      <div className="flex w-full justify-between items-center">
        <Content selected={storySelected} icon={icon}>
          {title}
        </Content>
        <Icon
          icon="ep:arrow-up-bold"
          width={15}
          color={storySelected ? "white" : "#999999"}
          className={`${rotate} transition-all duration-150`}
        />
      </div>
      {storySelected && (
        <ul className="flex flex-col gap-2 overflow-hidden">
          {urls.map((item: urlType, index: number) => (
            <li
              onClick={() => navigate(item.url)}
              key={index}
              className={`${text(
                item.url,
              )} text-[#999999] font-light list-disc ml-4`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </Background>
  );
};
