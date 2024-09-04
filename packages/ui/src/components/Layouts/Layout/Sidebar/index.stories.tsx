import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from ".";

const meta = { component: SideBar } satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Example",
    items: [
      {
        name: "test",
        content: (
          <>
            <span>test1</span>
            <span>test1</span>
            <span>test1</span>
          </>
        )
      },
      {
        name: "test2",
        content: (
          <>
            <span>test1</span>
            <span>test1</span>
            <span>test1</span>
            <span>test1</span>
            <span>test1</span>
            <span>test1</span>
          </>
        )
      }
    ]
  }
};
