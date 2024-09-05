import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from ".";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = { component: Layout } satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: [
      {
        action: "test",
        title: "test",
        icon: "Add"
      },
      {
        action: "test2",
        title: "test2",
        icon: "Remove"
      },
      {
        action: "test3",
        title: "test3",
        icon: "Trash"
      }
    ],
    sidebars: [
      {
        type: "standard",
        name: "test2",
        width: "400px",
        items: [{ name: "Test1", content: <span>asef</span> }]
      },
      {
        type: "standard",
        name: "test",
        items: [{ name: "Test2", content: <span>asef</span> }]
      },
      {
        type: "custom",
        name: "test3",
        width: "500px",
        component: <div className="w-[500px] h-full"></div>
      }
    ],
    children: <></>
  },
  decorators: [withRouter]
};
