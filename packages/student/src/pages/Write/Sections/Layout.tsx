import { Box } from "ui";

interface IProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: IProp) => {
  return (
    <Box width="fit-content" padding="30px" round="24px" className="gap-6">
      {children}
    </Box>
  );
};
