import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

const meta = { component: TextArea } satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    onChange: (e) => {},
    placeholder: "Example",
    max: 100
  }
};
