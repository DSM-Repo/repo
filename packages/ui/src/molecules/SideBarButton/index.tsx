import { HTMLAttributes } from "react";
import { Background, Content, iconType } from "../../atoms";
import { useNavigate, useLocation } from "react-router-dom";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  icon: iconType;
  title: string;
  url: string;
  selected?: boolean;
}

export const SideBarButton = ({
  icon,
  title,
  url,
  selected,
  ...props
}: IProp) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const storySelected = selected === undefined ? pathname === url : selected;

  return (
    <Background
      selected={storySelected}
      onClick={() => navigate(url)}
      {...props}
    >
      <Content icon={icon} selected={storySelected}>
        {title}
      </Content>
    </Background>
  );
};
