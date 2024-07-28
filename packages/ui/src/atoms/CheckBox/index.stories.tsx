import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: false,
    onChange: () => {},
    label: "with label",
  },
};

export const checked = component.bind({});

checked.args = {
  ...Default.args,
  state: true,
};

export const withoutLabel = component.bind({});

withoutLabel.args = {
  ...Default.args,
  label: "",
};
