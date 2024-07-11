import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./index";
import { useState } from "@storybook/preview-api";

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: undefined,
    selections: ["selection", "another", "helloWOrld"],
    onSelect: () => {},
    placeholder: "test",
    size: "extraSmall",
    error: false,
    disabled: false
  },
  render: function Render(args) {
    const [ch, setCh] = useState<string>(args.selected);
    return <Dropdown {...args} selected={ch} onSelect={(i) => setCh(i)} />;
  },
};

Default.storyName = "Extra Small";

export const small = Dropdown.bind({});

small.args = {
  ...Default.args,
  size: "small",
};

export const medium = Dropdown.bind({});

medium.args = {
  ...Default.args,
  size: "medium",
};

export const large = Dropdown.bind({});

large.args = {
  ...Default.args,
  size: "large",
};

export const extraLarge = Dropdown.bind({});

extraLarge.args = {
  ...Default.args,
  size: "extraLarge",
};

export const full = Dropdown.bind({});

full.args = {
  ...Default.args,
  size: "full",
};

export const error = Dropdown.bind({});

error.args = {
  ...Default.args,
  size: "large",
  error: true,
};

export const disabled = Dropdown.bind({});

disabled.args = {
  ...Default.args,
  size: "large",
  disabled: true,
};
