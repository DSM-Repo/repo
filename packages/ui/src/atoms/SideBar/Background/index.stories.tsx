import type { Meta, StoryObj } from "@storybook/react";
import { Background } from ".";

const meta = {
  title: "atoms/SideBar/Background",
  component: Background,
} satisfies Meta<typeof Background>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args) => (
  <div className="w-[300px]">
    <Background {...args} />
  </div>
);

export const Default: Story = Template.bind({});

Default.args = {
  children: <></>,
  selected: false,
};

export const selected = Template.bind({});

selected.args = {
  ...Default.args,
  selected: true,
};

export const list = Template.bind({});

list.args = {
  children: <div className="w-full h-[15rem]"></div>,
  selected: true,
};
