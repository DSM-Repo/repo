import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "atoms/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => console.log("change"),
    disabled: false,
    value: "test",
    size: "extraSmall",
    error: false,
    placeholder: "",
  },
};

Default.storyName = "Extra Small";

export const small = Input.bind({});

small.args = {
  ...Default.args,
  size: "small",
};

export const medium = Input.bind({});

medium.args = {
  ...Default.args,
  size: "medium",
};

export const large = Input.bind({});

large.args = {
  ...Default.args,
  size: "large",
};

export const extraLarge = Input.bind({});

extraLarge.args = {
  ...Default.args,
  size: "extraLarge",
};

export const full = Input.bind({});

full.args = {
  ...Default.args,
  size: "full",
};

export const error = Input.bind({});

error.args = {
  ...Default.args,
  size: "large",
  error: true,
};

export const disabled = Input.bind({});

disabled.args = {
  ...Default.args,
  size: "large",
  disabled: true,
};

export const multiLine = Input.bind({});

multiLine.args = {
  ...Default.args,
  multiLine: 5,
};
