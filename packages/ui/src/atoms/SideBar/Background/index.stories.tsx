import type { Meta, StoryObj } from "@storybook/react";
import { Background } from ".";

const meta = {
  title: "atoms/SideBar/Background",
  component: Background,
} satisfies Meta<typeof Background>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
    selected: false,
  },
};

export const selected = Background.bind({});

selected.args = {
  ...Default.args,
  selected: true,
};

export const list = Background.bind({});

list.args = {
  selected: true,
  children: <div className="w-full h-[15rem]"></div>,
};
