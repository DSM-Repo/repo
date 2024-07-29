import type { Meta, StoryObj } from "@storybook/react";
import { Prefix as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "2111",
    color: "green",
  },
};
