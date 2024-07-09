import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./index";

const meta = {
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
    color: "dark",
    size: {
      width: "100%",
      height: "10vh",
      padding: "10px",
    },
  },
};
