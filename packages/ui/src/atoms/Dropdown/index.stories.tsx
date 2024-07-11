import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./index";

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: "selected",
    selections: ["selection", "another", "helloWOrld"],
    onSelect: () => {},
    placeholder: "test",
  },
};
