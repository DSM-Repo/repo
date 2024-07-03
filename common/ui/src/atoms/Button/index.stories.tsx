import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "atoms/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: () => console.log("Clicked!"),
    disabled: false,
    color: "dark",
    size: "extraSmall",
  },
};

Default.storyName = "Extra Small";

export const small = Button.bind({});

small.args = {
  ...Default.args,
  size: "small",
};

export const medium = Button.bind({});

medium.args = {
  ...Default.args,
  size: "medium",
};

export const large = Button.bind({});

large.args = {
  ...Default.args,
  size: "large",
};

export const extraLarge = Button.bind({});

extraLarge.args = {
  ...Default.args,
  size: "extraLarge",
};

export const full = Button.bind({});

full.args = {
  ...Default.args,
  size: "full",
};

export const disabled = Button.bind({});

disabled.args = {
  ...Default.args,
  size: "large",
  disabled: true,
};
