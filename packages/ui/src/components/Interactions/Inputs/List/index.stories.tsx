import type { Meta, StoryObj } from "@storybook/react";
import { List } from ".";

const meta = { component: List } satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    values: [
      { id: "dasdkfjsadlkf", name: "Frontend Developer" },
      { id: "dasdkfjsadlkf", name: "Backend Developer" }
    ],
    listSize: "500px",
    size: "large",
    placeholder: "Example",
    onEnter: () => {},
    onDelete: () => {}
  }
};
