import type { Meta, StoryObj } from "@storybook/react";
import { Calander } from "./index";

const meta = {
  component: Calander
} satisfies Meta<typeof Calander>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: undefined,
    onChange: () => console.log(""),
    onDelete: () => {},
    placeholder: "날짜 선택"
  }
};
