import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Default Label",
    color: "#114e04ff",
  },
};

export const Red: Story = {
  args: {
    text: "Red Label",
    color: "red",
  },
};
