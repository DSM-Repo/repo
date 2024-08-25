import { Background, Content, iconType } from "../../../atoms";
import { useNavigate, useLocation } from "react-router-dom";
import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  icon: iconType;
  title: string;
  url?: string;
  action?: () => void;
  selected?: boolean;
}

export const SideBarButton = ({
  icon,
  title,
  url,
  action,
  selected,
  ...props
}: IProp) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const storySelected = selected === undefined ? pathname === url : selected;

  return (
    <Background
      selected={storySelected}
      onClick={() => (url ? navigate(url) : action())}
      {...props}
    >
      <Content icon={icon} selected={storySelected}>
        {title}
      </Content>
    </Background>
  );
};
