import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

const meta: Meta = {
  title: 'UI/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
};

export default meta;

type ButtonStory = StoryObj<typeof Button>;

export const Primary: ButtonStory = {
  args: {
    buttonText: 'Create Note'
  },

  render: ({ buttonText }) => {
    return <Button buttonText={buttonText} />;
  }
};
