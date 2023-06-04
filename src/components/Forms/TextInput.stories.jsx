import React from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Components/Forms',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
    helper: { control: 'text' },
  },
};

const Template = (args) => <TextInput {...args} />;
export const TextInputDefault = Template.bind({});

TextInputDefault.args = {
  label: 'Label',
  type: 'text',
  disabled: false,
  helper: 'Helper text',
};
