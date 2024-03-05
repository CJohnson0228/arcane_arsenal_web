import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { 
    color: { control: 'select', options: ['red','orange','yellow','green','blue','violet','purple','pink', 'grey'] },
    type: { control: 'select', options: ['text', 'email', 'password'] },
    value: { control: 'string' },
    label: { control: 'string' },
  }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Text Input'
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email Input'
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password Input'
  },
};

