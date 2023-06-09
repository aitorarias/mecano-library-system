import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Feedback',
  component: Alert,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    url: { control: 'text' },
    urlName: { control: 'text' },
    status: { control: 'text' },
    iconNeutral: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
};

const Template = (args) => <Alert {...args} />;
export const AlertNeutral = Template.bind({});
AlertNeutral.args = {
  status: 'neutral',
  title: 'Alert',
  description: 'This is a neutral alert—check it out!',
  url: 'https://www.google.com',
  urlName: 'Google',
  isOpen: true,
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
  status: 'success',
  title: 'Alert',
  description: 'This is a success alert—check it out!',
  url: 'https://www.google.com',
  urlName: 'Google',
  isOpen: true,
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
  status: 'warning',
  title: 'Alert',
  description: 'This is a warning alert—check it out!',
  url: 'https://www.google.com',
  urlName: 'Google',
  isOpen: true,
};

export const AlertError = Template.bind({});
AlertError.args = {
  status: 'error',
  title: 'Alert',
  description: 'This is a error alert—check it out!',
  url: 'https://www.google.com',
  urlName: 'Google',
  isOpen: true,
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
  status: 'info',
  title: 'Alert',
  description: 'This is a info alert—check it out!',
  url: 'https://www.google.com',
  urlName: 'Google',
  isOpen: true,
};
