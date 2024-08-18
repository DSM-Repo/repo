import type { Meta, StoryObj } from "@storybook/react";
import { Box as component } from ".";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <span>안녕하세요 박스입니다</span>,
    color: "dark",
    width: "fit-content",
    height: "fit-content",
    padding: "10px",
    round: { all: "5px" }
  }
};
