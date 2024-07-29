import type { Meta, StoryObj } from "@storybook/react";
import { Background as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = component.bind({});

Default.args = {
  children: <></>,
  selected: false,
};

export const selected = component.bind({});

selected.args = {
  ...Default.args,
  selected: true,
};

export const list = component.bind({});

list.args = {
  children: <div className="w-full h-[15rem]"></div>,
  selected: true,
};
