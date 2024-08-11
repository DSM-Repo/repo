import type { Meta, StoryObj } from "@storybook/react";
import { File } from ".";

const meta = {
  component: File,
} satisfies Meta<typeof File>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
    value: undefined,
    onChange: () => {},
    onDelete: () => {},
  },
};
