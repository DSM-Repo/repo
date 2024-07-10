import type { Meta, StoryObj } from "@storybook/react";
import { Prefix } from "./index";

const meta = {
  component: Prefix,
} satisfies Meta<typeof Prefix>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "2111",
    color: "green",
  },
};
