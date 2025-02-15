import { Box as UiBox } from "ui";

interface IProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Box = ({ children }: IProp) => {
  return (
    <UiBox width="502px" padding="30px" round="24px" className="gap-6" height="fit-content">
      {children}
    </UiBox>
  );
};
