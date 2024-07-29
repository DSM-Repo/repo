import type { Meta, StoryObj } from "@storybook/react";
import { Header as component } from "./index";

const meta = { component } satisfies Meta<typeof component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
