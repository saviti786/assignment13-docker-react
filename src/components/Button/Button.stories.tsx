import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";
// import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "#007bff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't click me",
    backgroundColor: "#999999",
    disabled: true,
  },
};
