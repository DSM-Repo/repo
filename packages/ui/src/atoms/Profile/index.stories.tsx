import type { Meta, StoryObj } from "@storybook/react";
import { Profile as component } from "./index";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 300 },
};

export const withProfile = component.bind({});

withProfile.args = {
  ...Default.args,
  img: "https://i.dailymail.co.uk/i/pix/2010/12/14/article-1338529-0C7A159D000005DC-496_634x492.jpg",
};
