import type { Meta, StoryObj } from "@storybook/react";
import { Button as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: () => console.log("Clicked!"),
    size: "extraSmall",
  },
};

Default.storyName = "Extra Small";

export const small = component.bind({});

small.args = {
  ...Default.args,
  size: "small",
};

export const medium = component.bind({});

medium.args = {
  ...Default.args,
  size: "medium",
};

export const large = component.bind({});

large.args = {
  ...Default.args,
  size: "large",
};

export const extraLarge = component.bind({});

extraLarge.args = {
  ...Default.args,
  size: "extraLarge",
};

export const full = component.bind({});

full.args = {
  ...Default.args,
  size: "full",
};

export const disabled = component.bind({});

disabled.args = {
  ...Default.args,
  size: "large",
  disabled: true,
};
