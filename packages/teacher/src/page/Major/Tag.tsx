import { Icon } from "@iconify/react";
import { Box } from "ui";

interface IProp {
  onRemove: () => void;
  children: string;
}

export const Tag = ({ onRemove, children }: IProp) => {
  return (
    <Box className="flex-row items-center gap-2 p-4 rounded-[5px]">
      <span className="text-body7">{children}</span>
      <Icon
        icon="ph:x-bold"
        width={20}
        className="cursor-pointer"
        color="white"
        onClick={onRemove}
      />
    </Box>
  );
};
