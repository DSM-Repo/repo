import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from ".";

const meta = { component: Profile } satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 32 }
};
