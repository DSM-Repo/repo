import type { Meta, StoryObj } from "@storybook/react";
import { SideBarButton } from ".";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "molecules/SideBarButton",
  component: SideBarButton,
} satisfies Meta<typeof SideBarButton>;

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
