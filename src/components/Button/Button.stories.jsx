import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
    size: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  leftIcon: 'las la-bell',
  rightIcon: 'las la-bell',
  size: 'sm',
  disabled: false,
  type: 'button',
};
