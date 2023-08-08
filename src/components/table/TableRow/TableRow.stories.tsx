import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import TableRow from './TableRow';

const meta: Meta = {
  title: 'Table/TableRow',
  component: TableRow,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
};

export default meta;

type TableRowStory = StoryObj<typeof TableRow>;

export const Note: TableRowStory = {
  args: {
    rowType: 'note',
    rowData: [
      crypto.randomUUID(),
      'src/assets/cart-fill.svg',
      'Shopping list',
      'April 20, 2021',
      'Task',
      'Tomatoes, bread',
      '-'
    ]
  },
  render: ({ rowType, rowData }) => {
    return <TableRow rowType={rowType} rowData={rowData} />;
  }
};

export const Stat: TableRowStory = {
  args: {
    rowType: 'stat',
    rowData: ['src/assets/cart-fill.svg', 'Task', '0', '0']
  },
  render: ({ rowType, rowData }) => {
    return <TableRow rowType={rowType} rowData={rowData} />;
  }
};

export const NotesHeader: TableRowStory = {
  args: {
    rowType: 'notesHeader',
    rowData: ['', 'Name', 'Created', 'Category', 'Content', 'Dates']
  },
  render: ({ rowType, rowData }) => {
    return <TableRow rowType={rowType} rowData={rowData} />;
  }
};

export const StatsHeader: TableRowStory = {
  args: {
    rowType: 'statsHeader',
    rowData: ['', 'Note Category', 'Active', 'Archived']
  },
  render: ({ rowType, rowData }) => {
    return <TableRow rowType={rowType} rowData={rowData} />;
  }
};
