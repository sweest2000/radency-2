import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Table from './Table';

const meta: Meta = {
  title: 'Table/Table',
  component: Table,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
};

export default meta;

type TableStory = StoryObj<typeof Table>;

export const Notes: TableStory = {
  args: {
    tableType: 'notes'
  },
  render: ({ tableType }) => {
    return <Table tableType={tableType} />;
  }
};

export const Stats: TableStory = {
  args: {
    tableType: 'stats'
  },
  render: ({ tableType }) => {
    return <Table tableType={tableType} />;
  }
};
