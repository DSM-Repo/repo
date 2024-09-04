import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = { component: Sidebar } satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profile: {
      name: "육기준",
      major: "Frontend Developer",
      percent: 80
    },
    items: [
      {
        name: "메인",
        sections: [
          {
            name: "홈",
            icon: "House",
            urls: [""]
          },
          {
            name: "도서관",
            icon: "Book",
            urls: ["library"]
          }
        ]
      },
      {
        name: "포트폴리오",
        sections: [
          {
            name: "내 정보",
            icon: "User",
            urls: ["write?id=Book"]
          }
        ]
      }
    ]
  },
  decorators: [withRouter]
};
