import React from 'react';
import { Icon } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    className: { control: 'text' },
    onClick: { control: 'function' },
    icon: { control: 'text' },
  },
};

const Template = (args) => <Icon {...args} />;
export const IconDefault = Template.bind({});
IconDefault.args = {
  icon: 'las la-times la-lg',
};
