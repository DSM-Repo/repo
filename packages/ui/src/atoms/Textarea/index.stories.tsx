import type { Meta, StoryObj } from "@storybook/react";

import { Textarea as component } from "./index";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
    onChange: () => {},
    value: "value",
    rows: 0,
  },
};
