import { useState } from 'react';
import TableRow from './TableRow';

type TableProps = {
  tableType: string;
};

const Table = ({ tableType }: TableProps) => {
  const notesHeader: string[] = [
    '',
    'Name',
    'Created',
    'Category',
    'Content',
    'Dates',
  ];
  const statsHeader: string[] = ['', 'Note Category', 'Active', 'Archived'];

  const stats = [
    {
      image: 'src/assets/cart-fill.svg',
      name: 'Task',
      active: '0',
      archived: '0',
    },
    {
      image: 'src/assets/lightbulb-fill.svg',
      name: 'Idea',
      active: '0',
      archived: '0',
    },
    {
      image: 'src/assets/brain-fill.svg',
      name: 'Random Thought',
      active: '0',
      archived: '0',
    },
  ];

  const [notes, setNotes] = useState([
    {
      icon: 'src/assets/cart-fill.svg',
      name: 'Shopping list',
      created: 'April 20, 2021',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '-',
    },
    {
      icon: 'src/assets/brain-fill.svg',
      name: 'The theory of evolution',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      icon: 'src/assets/lightbulb-fill.svg',
      name: 'New Feature',
      created: 'May 05, 2021',
      category: 'Idea',
      content: 'Implement new things on 3/5/2021 and 5/5/2021',
      dates: '3/5/2021, 5/5/2021',
    },
    {
      icon: 'src/assets/cart-fill.svg',
      name: 'Books',
      created: 'May 15, 2021',
      category: 'Task',
      content: 'The Lean Startup',
      dates: '-',
    },
    {
      icon: 'src/assets/brain-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      icon: 'src/assets/lightbulb-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Idea',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      icon: 'src/assets/brain-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
  ]);
  return (
    <>
      <table className="flex flex-col gap-3">
        <thead>
          <TableRow
            rowData={tableType === 'notes' ? notesHeader : statsHeader}
            rowType={tableType === 'notes' ? 'notesHeader' : 'statsHeader'}
          />
        </thead>
        <tbody className="flex flex-col gap-3">
          {tableType === 'notes'
            ? notes.map((item, index) => {
                return (
                  <TableRow
                    key={item.name + index}
                    rowData={Object.values(item)}
                    rowType="note"
                  />
                );
              })
            : stats.map((item, index) => {
                return (
                  <TableRow
                    key={item.name + index}
                    rowData={Object.values(item)}
                    rowType="stat"
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
