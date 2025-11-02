import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: '/happy.jpg',
    alt: 'Be Happy',
    title: 'Stay Happy Always',
    subtitle: 'This is a reminder to stay happy and stress less.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: '/happy.jpg',
    alt: 'Be Happy',
    title: 'Disabled Banner',
    subtitle: 'This hero section is disabled',
    disabled: true,
  },
};
