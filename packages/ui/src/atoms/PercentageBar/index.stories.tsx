import type { Meta, StoryObj } from "@storybook/react";
import { PercentageBar as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: {
      title: "진행도",
      subTitle: "무언가를 진행중입니다..",
    },
    progress: 10,
    color: "Green",
    type: "Full",
  },
};

export const withoutText = component.bind({});

withoutText.args = {
  ...Default.args,
  type: "NoTitle",
};

export const simple = component.bind({});

simple.args = {
  ...Default.args,
  type: "Simple",
};
