import { withRouter } from "storybook-addon-remix-react-router";
import type { Meta, StoryObj } from "@storybook/react";
import { SideBarButton as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "My",
    title: "내 정보",
    url: "/write?section=inform",
    selected: true,
  },
  decorators: [withRouter],
};
