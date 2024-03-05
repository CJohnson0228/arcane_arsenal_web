import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { 
    variant: { control: 'select', options: ['filled','outlined','text'] },
    color: { control: 'select', options: ['red','orange','yellow','green','blue','violet','purple','pink', 'grey'] },
    label: { control: 'string' },
    shape: { control: 'select', options: ['round','semi-round','square']},
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled',
    color: 'green'
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined',
    color: 'red',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text',
    color: 'orange',
  },
};

