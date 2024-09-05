import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { Header } from ".";

const meta = { component: Header } satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withRouter]
};
