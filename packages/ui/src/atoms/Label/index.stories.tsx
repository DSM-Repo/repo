import type { Meta, StoryObj } from "@storybook/react";
import { Label as component } from ".";
import { Input } from "../Input";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Input placeholder="placeholder" value="" onChange={() => {}} />,
  },
};
