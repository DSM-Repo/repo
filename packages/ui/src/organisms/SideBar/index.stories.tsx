import { withRouter } from "storybook-addon-remix-react-router";
import { SideBarButton, SideBarDrop } from "../../molecules";
import type { Meta, StoryObj } from "@storybook/react";
import { SideBar as component } from ".";
import { IStudent } from "./types";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const userDefault: IStudent = {
  name: "육기준",
  type: "student",
  major: "", //Frontend Developer
  grade: 2,
  class: 1,
  number: 11,
  progress: 40,
};

export const Default: Story = {
  args: {
    user: userDefault,
    children: (
      <>
        <SideBarButton title="" icon="My" url="/" />
        <SideBarDrop
          title="포트폴리오 수정"
          icon="Edit"
          urls={[
            { title: "내 정보", url: "/write/1" },
            { title: "자기소개", url: "/write/2" },
            { title: "자격증 & 수상", url: "/write/3" },
            { title: "활동", url: "/write/4" },
            { title: "프로젝트", url: "/write/5" },
          ]}
        />
      </>
    ),
  },
  decorators: [withRouter],
};
