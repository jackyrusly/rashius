import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    children: 'Button Example',
    $isLoading: false,
    $type: 'primary',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  $type: 'secondary',
};

export const Loading = Template.bind({});

Loading.args = {
  $isLoading: true,
};
