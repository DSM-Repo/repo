import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./index";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>testtestee</div>,
  },
};
