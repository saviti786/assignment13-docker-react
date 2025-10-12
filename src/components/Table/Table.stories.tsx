import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Age"],
    data: [
      ["Alice", "25"],
      ["Bob", "30"],
    ],
    footer: ["Total", "2"],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: ["Name", "Age"],
    data: [
      ["Alice", "25"],
      ["Bob", "30"],
    ],
    footer: ["Total", "2"],
    disabled: true,
  },
};
