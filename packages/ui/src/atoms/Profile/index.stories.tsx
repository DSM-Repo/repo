import type { Meta, StoryObj } from "@storybook/react";

import { Profile } from "./index";

const meta = {
  title: "atoms/Profile",
  component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 300,
  },
};

export const withProfile = Profile.bind({});

withProfile.args = {
  ...Default.args,
  img: "https://i.dailymail.co.uk/i/pix/2010/12/14/article-1338529-0C7A159D000005DC-496_634x492.jpg",
};
