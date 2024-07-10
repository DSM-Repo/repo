import type { Meta, StoryObj } from "@storybook/react";
import { PercentageBar } from ".";

const meta = {
  title: "atoms/PercentageBar",
  component: PercentageBar,
} satisfies Meta<typeof PercentageBar>;

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

export const withoutText = PercentageBar.bind({});

withoutText.args = {
  ...Default.args,
  type: "NoTitle",
};

export const simple = PercentageBar.bind({});

simple.args = {
  ...Default.args,
  type: "Simple",
};
