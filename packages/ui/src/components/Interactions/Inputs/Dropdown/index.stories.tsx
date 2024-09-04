import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

const meta = { component: Dropdown } satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    selections: ["value1", "value2", "value3"],
    selected: undefined,
    placeholder: "Example",
    onChange: () => {}
  }
};
