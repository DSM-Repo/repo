import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from ".";

const meta = { component: CheckBox } satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
    label: "labeled",
    checked: true
  }
};
