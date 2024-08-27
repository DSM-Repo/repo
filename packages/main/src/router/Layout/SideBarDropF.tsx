import { Background, Content, iconType } from "ui";
import { Icon } from "@iconify/react";
import { useOpen } from "@/hooks/useOpen";

type actionType = {
  action: () => void;
  name: string;
};

interface IProp {
  deepSelected: string;
  title: string;
  icon: iconType;
  actions: actionType[];
  forceOpen?: boolean;
}
export const SideBarDropF = ({
  deepSelected,
  title,
  icon,
  actions,
  forceOpen,
  ...props
}: IProp) => {
  const { opened, setOpened } = useOpen();
  const selected = forceOpen ? true : opened === title;

  const rotate = selected ? "rotate-180" : "rotate-90";

  const text = (item: string) =>
    deepSelected === item ? "text-white font-semibold" : "pointable";

  return (
    <Background
      selected={selected}
      onClick={() => !selected && setOpened(title)}
      {...props}
    >
      <div
        className="flex w-full justify-between items-center"
        onClick={() => (!selected ? setOpened(title) : setOpened(""))}
      >
        <Content selected={selected} icon={icon}>
          {title}
        </Content>
        <Icon
          icon="ep:arrow-up-bold"
          width={15}
          color={selected ? "white" : "#999999"}
          className={`${rotate} transition-all duration-150`}
        />
      </div>
      {selected ? (
        <ul className="flex flex-col gap-2 overflow-hidden">
          {actions.map((item: actionType, index: number) => (
            <li
              onClick={item.action}
              key={index}
              className={`${text(
                item.name
              )} text-[#999999] font-light list-disc ml-4`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </Background>
  );
};
