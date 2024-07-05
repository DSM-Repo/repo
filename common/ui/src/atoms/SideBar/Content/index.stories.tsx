import type { Meta, StoryObj } from "@storybook/react";
import { Content } from ".";

const meta = {
  title: "atoms/SideBar/Content",
  component: Content,
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { icon: "test", children: "내 정보", selected: false },
};
