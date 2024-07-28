import type { Meta, StoryObj } from "@storybook/react";
import { Content as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { icon: "Library", children: "내 정보", selected: true },
};
