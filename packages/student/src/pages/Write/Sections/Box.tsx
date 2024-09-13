import { Box as UiBox } from "ui";

interface IProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Box = ({ children }: IProp) => {
  return (
    <UiBox
      width="fit-content"
      padding="30px"
      round="24px"
      className="gap-6 z-0"
    >
      {children}
    </UiBox>
  );
};
