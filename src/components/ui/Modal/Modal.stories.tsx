import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

const meta: Meta = {
  title: 'UI/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
};

export default meta;

type ButtonStory = StoryObj<typeof Modal>;

export const Primary: ButtonStory = {
  render: () => {
    return <Modal />;
  }
};
