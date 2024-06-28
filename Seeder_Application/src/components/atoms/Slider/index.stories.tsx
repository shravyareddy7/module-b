
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import SliderComponent, { SliderComponentProps } from './index';

export default {
  title: 'Components/SliderComponent',
  component: SliderComponent,
  argTypes: {
    max: { control: 'number' },
  },
} as Meta;

const Template: StoryFn<SliderComponentProps> = (args) => (
  <ThemeProvider theme={theme}>
    <SliderComponent {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  max: 100,
};
