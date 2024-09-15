import type { Meta, StoryObj } from "@storybook/react";
import { Date } from ".";

const meta = { component: Date } satisfies Meta<typeof Date>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    placeholder: "Example",
    onChange: () => {},
    onDelete: () => {}
  }
};
