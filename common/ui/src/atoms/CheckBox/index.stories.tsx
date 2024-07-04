import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from ".";
import { useState } from "@storybook/preview-api";

const meta = {
  title: "atoms/CheckBox",
  component: CheckBox,
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: false,
    onChange: () => {},
    label: "with label",
  },
  render: function Render(args) {
    const [ch, setCh] = useState<boolean>(args.state);
    return (
      <CheckBox {...args} state={ch} onChange={() => setCh((prev) => !prev)} />
    );
  },
};

export const checked = CheckBox.bind({});

checked.args = {
  ...Default.args,
  state: true,
};

export const withoutLabel = CheckBox.bind({});

withoutLabel.args = {
  ...Default.args,
  label: "",
};
