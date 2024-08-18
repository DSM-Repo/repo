import { withRouter } from "storybook-addon-remix-react-router";
import type { Meta, StoryObj } from "@storybook/react";
import { SideBarDrop as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    urls: [
      { title: "내 정보", url: "/write/1" },
      { title: "자기소개", url: "/write/2" },
      { title: "자격증 & 수상", url: "/write/3" },
      { title: "활동", url: "/write/4" },
      { title: "프로젝트", url: "/write/5" },
    ],
    title: "포트폴리오",
    icon: "Edit",
    selected: true,
  },
  decorators: [withRouter],
};
