import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './index';

export default {
  title: 'Core/Text',
  component: Text,
  args: {
    children: 'Text Example',
    $color: 'primary',
    $size: 'md',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Text value',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  $color: 'secondary',
};

export const Small = Template.bind({});

Small.args = {
  $size: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  $size: 'lg',
};
